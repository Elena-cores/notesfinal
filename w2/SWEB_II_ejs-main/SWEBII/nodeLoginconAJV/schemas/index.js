// schemas/index.js
//Cargar todos los schemas y darles un identificador
const Ajv2020 = require("ajv/dist/2020");
const ajv = new Ajv2020();

// Cargamos los archivos JSON
const schemaPerson = require("./person.schema.json");
const schemaCoordinate = require("./coordinate.schema.json");

// Registramos cada schema con un ID
ajv.addSchema(schemaPerson, "person");
ajv.addSchema(schemaCoordinate, "coordinate");

module.exports = ajv;
