import * as moment from 'moment';
import { PostCreator } from './postCreator';
import { Post } from './post';
import { posts } from '..';
import { JSONFileManager } from '../JSONFileManager';
import { ErrorPrinter } from '../error/errorPrinter';

export class NormalPostCreator extends Post implements PostCreator {

    protected errorPrinter: ErrorPrinter;

    createNewPost(author: string, postContent: string):void {
        if (author && postContent){

            moment.locale("pt-br");

            const newPost: posts = {
                author: author,
                postContent: postContent,
                date: moment().format("DD/MM/YY - LTS")
            };

            const oldArrayOfPosts = new JSONFileManager("posts.json");

            const newArrayOfPosts = oldArrayOfPosts.getJSONContent();

            newArrayOfPosts.push(newPost);

            oldArrayOfPosts.saveToJSON(newArrayOfPosts);


            console.log("Post created successfully.");
        } else {

            this.errorPrinter = new ErrorPrinter("Missing either author name or post content. Try again.", `${moment().format("LTS")}`);
            this.errorPrinter.onError();
        };
    };
};