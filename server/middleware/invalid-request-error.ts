export class InvalidRequestError extends Error {
    statusCode = 400;

    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, InvalidRequestError.prototype);
    }

    getErrorMessage() {
        return 'Something went wrong: ' + this.message;
    }
}
