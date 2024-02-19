const logger = require('../utils/handleSqlLogger.js');


const logSqlErrorAndQuery = (error) => {
    logSqlError(error);
    logSqlQuery(error);
};

const logSqlError = (error) => {
    const sqlError = error.parent && error.parent.message ? error.parent.message : null;
    console.log(sqlError);
    if (sqlError !== null) {
        logger.error(`SQL Error: ${sqlError}`);
    }
};

const logSqlQuery = (error) => {
    const query = error.parent && error.parent.sql ? error.parent.sql : null;
    
    if (query !== null) {
        logger.error(`SQL Query: ${query}`);
    }
};


module.exports = logSqlErrorAndQuery;
