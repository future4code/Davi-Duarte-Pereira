export interface PostCreator {
    author: string,
    postContent: string

    createNewPost(author: string, postContent: string): void
}