const CarrerasTests = require('./Carreras.test.js');
const InstitutosTests = require('./Institutos.test.js');

describe("Carreras Endpoints", () => {
  const carrerasTests = new CarrerasTests();
  carrerasTests.getItems();
  carrerasTests.getItem('1'); // Assuming ID 1 exists
  carrerasTests.getNoItem('-1'); // Assuming ID # no exists
  carrerasTests.createItem();
  carrerasTests. createItemFail();
});

describe("Institutos Endpoints", () => {
  const institutosTests = new InstitutosTests();
  institutosTests.getItems();
  institutosTests.getItem('1'); // Assuming ID 1 exists
  institutosTests.getNoItem('-1'); // Assuming ID # no exists
  institutosTests.createItem();
  institutosTests.createItemFail();
});