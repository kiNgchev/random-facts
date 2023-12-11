module.exports = class NotFoundException extends Error {
    httpStatus
    errors

    constructor(httpStatus, message, errors) {
        super(message)
        this.httpStatus = httpStatus
        this.errors = errors
    }

    static MotFound(errors = []) {
        return new NotFoundException(500, "Факты не найдены", errors)
    }
}