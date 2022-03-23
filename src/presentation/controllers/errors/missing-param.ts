export class MissingParam extends Error {
    constructor(param) {
        super(`Missing parameter: ${param}`)
    }
}