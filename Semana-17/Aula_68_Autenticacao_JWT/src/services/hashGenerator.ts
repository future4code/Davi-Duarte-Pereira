import * as bcrypt from 'bcrypt'

export interface HashGenerator {
    generate(): string
}

export class BCryptHashGenerator implements HashGenerator {
    generate():string {
        return ''
    }
}