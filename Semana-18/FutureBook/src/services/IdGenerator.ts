import { v4 } from 'uuid'

export interface IdGenerator {
  generate(): string;
}

export class V4IdGenerator implements IdGenerator {
  generate(): string {
    return v4()
  }
}

