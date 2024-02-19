/**
 * Maneja errores HTTP y envía una respuesta JSON con el código de estado, mensaje de error y detalles (si los hay).
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {string|null} details - Detalles específicos del error (opcional).
 * @param {string} message - Mensaje de error por defecto.
 * @param {number} code - Código de estado HTTP (por defecto 403).
 */
const handleHttpError = (res, details = null, message = "ERROR", code = 403) => {
    res.status(code);
    
    const responseObj = {
        error: message,
        ...(details !== null && details !== '' && { details }),
    };

    res.send(responseObj);
};


module.exports = { handleHttpError }