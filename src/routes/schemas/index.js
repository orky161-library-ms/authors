const validation_mw = (schema) => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body)
        next()
    }
    catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

module.exports = validation_mw
