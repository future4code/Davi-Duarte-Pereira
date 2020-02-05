export class User {
  constructor(
    private name: string,
    private email: string,
    private password: string,
    private birthday: string,
    private photo: string,
    private id: string 
  ){}

  public getName(): string {
    return this.name
  }
  
  public getEmail(): string {
    return this.email
  }

  public getPassword(): string {
    return this.password
  }

  public getBirthday(): string {
    return this.birthday
  }

  public getPhoto(): string {
    return this.photo
  }

  public getId(): string {
    return this.id
  }

}

