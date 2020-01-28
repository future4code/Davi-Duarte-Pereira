export class User {
  constructor(
    private name: string,
    private email: string,
    private password: string,
    private id: string,
    private birthday: string,
    private age: number,
    private photo: string
  ) {}

  public getName(): string {
    return this.name
  }

  public getEmail(): string {
    return this.email
  }

  public getPassword(): string {
    return this.password
  }

  public getId(): string {
    return this.id
  }

  public getbirthday(): string {
    return this.birthday
  }

  public getAge(): number {
    return this.age
  }

  public getPhoto(): string {
    return this.photo
  }

}

