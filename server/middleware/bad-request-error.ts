export class BadRequestError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    getErrorMessage() {
        return 'Something went wrong: ' + this.message;
    }
}
