export class Post {
  constructor(
    private photo: string,
    private description: string,
    private creationDate: Date,
    private postType: string,
    private id: string,
    private userId: string
  ){}

  public getPhoto(){
    return this.photo
  }

  public getDescription(){
    return this.description
  }

  public getDate(){
    return this.creationDate
  }

  public getPostType(){
    return this.postType
  }

  public getPostId(){
    return this.id
  }

  public getUserId(){
    return this.userId
  }
}