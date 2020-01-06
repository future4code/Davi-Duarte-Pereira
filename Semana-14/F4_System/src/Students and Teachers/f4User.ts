
export abstract class f4User {
    constructor(
        public name: string,
        public email: string,
        public birthday: string,
        public abilities?: string[],
        public belongsTo?: string | number
    ){}


    abstract createNewUser(
        name?: string,
        email?: string,
        birthday?: string,
        abilities?: string[],
        belongsTo?: string |  number
    ): void
}