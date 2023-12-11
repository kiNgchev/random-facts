const NotFoundException = require("../exceptions/NotFoundException")

module.exports = (err, req, res, next) => {
    console.log(err);
    if (err instanceof NotFoundException) {
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }

    return res.status(500).json({message: "Непредвиденная ошибка"})
}