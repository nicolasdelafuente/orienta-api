const handleNotFound = (res, modelName) => {
    res.status(404).json({ error: `${modelName.toUpperCase()}_NOT_FOUND` });
};

module.exports = { handleNotFound };  