const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const migrationsPath = path.resolve('src/database/migrations');
const files = fs.readdirSync(migrationsPath);

for (const file of files) {
  if (file !== 'dummy.txt') {
    fs.unlinkSync(path.join(migrationsPath, file));
  }
}

const commands = [
  'npx sequelize-cli model:generate --name DocumentoTipo --attributes nombre:string --force',
  'npx sequelize-cli model:generate --name SeguimientoTipo --attributes nombre:string --force',
  'npx sequelize-cli model:generate --name Genero --attributes nombre:string --force',
  'npx sequelize-cli model:generate --name Rol --attributes nombre:string --force',
  'npx sequelize-cli model:generate --name Pais --attributes nombre:string,nacionalidad:string,iso:string --force',
  'npx sequelize-cli model:generate --name Provincia --attributes nombre:string,id_pais:integer --force',
  'npx sequelize-cli model:generate --name Localidad --attributes nombre:string,id_provincia:integer --force',
  'npx sequelize-cli model:generate --name Instituto --attributes nombre:string --force',
  'npx sequelize-cli model:generate --name Carrera --attributes nombre:string,id_instituto:integer --force',
  'npx sequelize-cli model:generate --name Estado --attributes nombre:string,color:string --force',
  'npx sequelize-cli model:generate --name Categoria --attributes nombre:string,color:string --force',
  'npx sequelize-cli model:generate --name Seguimiento --attributes nombre:string,motivo:string --force',
  'npx sequelize-cli model:generate --name Entrevista --attributes nombre:string,observaciones:string,acciones:string --force',
  'npx sequelize-cli model:generate --name Persona --attributes nombre:string,apellido:string,email:string,password:string,id_documento:integer,documento:string,telefono:string,id_genero:integer,id_localidad:integer,id_provincia:integer,id_pais:integer,id_carrera:integer --force',
  'npx sequelize-cli model:generate --name Usuario --attributes id_persona:integer,id_rol:integer,password:string --force',
  'npx sequelize-cli model:generate --name Storage --attributes nombre:string,url:string --force',
];

try {
  for (const command of commands) {
    console.log(`Executing: ${command}`);
    execSync(command, { stdio: 'inherit' });
  }
  console.log('All models created successfully.');
} catch (error) {
  console.error('Error creating models:', error.message);
  process.exit(true);
}
