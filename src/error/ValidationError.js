class ValidationError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.name = 'ValidationError'; 
        this.errorCode = errorCode; 
        this.date = new Date();
    }
}