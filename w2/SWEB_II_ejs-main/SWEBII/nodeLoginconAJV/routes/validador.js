// routes/validate.js
const express = require("express");
const router = express.Router();

// Importamos la instancia de Ajv (con todos los schemas registrados)
const ajv = require("../schemas");

// Ejemplo de endpoint para validar el schema "person"
router.post("/person", (req, res) => {
  // Obtenemos el validador asociado al nombre "person"
  const validatePerson = ajv.getSchema("person");
  
  // Validamos el body
  if (validatePerson(req.body)) {
    // Si es válido, respondemos 200
    return res.sendStatus(200);
  } else {
    // Si no es válido, mostramos errores en consola y devolvemos 400
    console.error(validatePerson.errors);
    return res.sendStatus(400);
  }
});

// Ejemplo de endpoint para validar el schema "coordinate"
router.post("/coordinate", (req, res) => {
  const validateCoordinate = ajv.getSchema("coordinate");
  
  if (validateCoordinate(req.body)) {
    return res.sendStatus(200);
  } else {
    console.error(validateCoordinate.errors);
    return res.sendStatus(400);
  }
});

module.exports = router;
