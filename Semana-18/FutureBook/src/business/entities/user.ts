export class User {
  constructor(
    private name: string,
    private email: string,
    private password: string,
    private id: string
  ) {}

  public getName(){
    return this.name
  }

  public getEmail(){
    return this.email
  }

  public getPassword(){
    return this.password
  }

  public getId(){
    return this.id
  }

}

