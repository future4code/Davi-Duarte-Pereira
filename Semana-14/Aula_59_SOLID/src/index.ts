import { NormalPostCreator } from './posts/normalPostCreator';
import { upperCasePostCreator } from './posts/upperCasePostCreator';


export type posts = {
    author: string,
    postContent: string,
    date?: string
}

const str = "aaaaa";


const newPost = new NormalPostCreator("Davi", "Hi! I am trying to create a new post.")

newPost.createNewPost("Davi", "Hi! I am a test");

const newUpperCasePost = new upperCasePostCreator("Davi", "Hi! I am trying to create a new post with upper case.")

newUpperCasePost.createNewPost("Davi", "Hi! I am a test");