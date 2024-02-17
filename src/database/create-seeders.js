const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const seedersPath = path.resolve('src/database/seeders');
const files = fs.readdirSync(seedersPath);

for (const file of files) {
  if (file !== 'dummy.txt') {
    fs.unlinkSync(path.join(seedersPath, file));
  }
}

const commands = [
  'npx sequelize-cli seed:generate --name create-genero',
  'npx sequelize-cli seed:generate --name create-documentoTipo',
  'npx sequelize-cli seed:generate --name create-seguimientoTipo',
  'npx sequelize-cli seed:generate --name create-rol',
  'npx sequelize-cli seed:generate --name create-pais',
  'npx sequelize-cli seed:generate --name create-provincia',
  'npx sequelize-cli seed:generate --name create-localidad',
  'npx sequelize-cli seed:generate --name create-instituto',
  'npx sequelize-cli seed:generate --name create-carrera',
  'npx sequelize-cli seed:generate --name create-estado',
  'npx sequelize-cli seed:generate --name create-categoria',
  'npx sequelize-cli seed:generate --name create-seguimiento',
  'npx sequelize-cli seed:generate --name create-entrevista',
  'npx sequelize-cli seed:generate --name create-persona',
  'npx sequelize-cli seed:generate --name create-usuario',
  'npx sequelize-cli seed:generate --name create-storage'
];

try {
  for (const command of commands) {
    console.log(`Executing: ${command}`);
    execSync(command, { stdio: 'inherit' });
  }
  console.log('All seeders generated successfully.');
} catch (error) {
  console.error('Error generating seeders:', error.message);
  process.exit(true);
}