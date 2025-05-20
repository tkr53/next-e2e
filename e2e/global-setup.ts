const { resetDb } = require('./dbUtils');

async function globalSetup() {
  await resetDb();
}

module.exports = globalSetup;
