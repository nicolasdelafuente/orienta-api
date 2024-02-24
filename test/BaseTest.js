const request = require('supertest');
const app = require('../app.js');

class BaseTest {
  constructor(entity, model) {
    this.endpoint = `/orientacion/${entity}/`;
    this.model = model;
  }

  getItems() {
    return describe(`GET ${this.endpoint}`, () => {
      it(`respond with json containing a list of all ${this.endpoint}`, (done) => {
        request(app)
          .get(this.endpoint)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200, done);
      });
    });
  }

  getItem(id) {
    describe(`GET ${this.endpoint}/${id}`, () => {
      it(`respond with json containing a single ${this.endpoint}`, (done) => {
        request(app)
          .get(`${this.endpoint}/${id}`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200, done);
      });
    });
  }

  getNoItem(id) {
    describe(`GET ${this.endpoint}/${id} when ${this.endpoint} does not exist`, () => {
      it(`respond with json ${this.entity} not found`, (done) => {
        request(app)
          .get(`${this.endpoint}/${id}`) // Non-existent ID
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          //.expect(404)
          .expect({ "error": `${this.model.toUpperCase()}_NOT_FOUND` })
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });
    });
  }

  createItem() {
    describe(`POST ${this.endpoint}`, () => {
      it("respond with 201 created", (done) => {
        request(app)
          .post(`${this.endpoint}`)
          .send(this.data)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(201)
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });
    })
  }

  createItemFail() {
    const data = { "dataError": "Test error" }
    describe(`POST ${this.endpoint}`, () => {
      it("respond with 500 on bad request", (done) => {
        request(app)
          .post(`${this.endpoint}`)
          .send(data)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(500)
          .expect(
            {
              "error": "ERROR_CREATE_ITEM",
              "details": "Validation error"
            }
          )
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });
    })
  }
}

module.exports = BaseTest;
