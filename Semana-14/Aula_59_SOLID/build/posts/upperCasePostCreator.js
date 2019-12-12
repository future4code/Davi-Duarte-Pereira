"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const normalPostCreator_1 = require("./normalPostCreator");
const JSONFileManager_1 = require("../JSONFileManager");
const errorPrinter_1 = require("../error/errorPrinter");
class upperCasePostCreator extends normalPostCreator_1.NormalPostCreator {
    createNewPost(author, postContent) {
        if (author && postContent) {
            moment.locale("pt-br");
            const newPost = {
                author: author,
                postContent: postContent.toUpperCase(),
                date: moment().format("DD/MM/YY - LTS")
            };
            const oldArrayOfPosts = new JSONFileManager_1.JSONFileManager("posts.json");
            const newArrayOfPosts = oldArrayOfPosts.getJSONContent();
            newArrayOfPosts.push(newPost);
            oldArrayOfPosts.saveToJSON(newArrayOfPosts);
            console.log("Post created successfully.");
        }
        else {
            this.errorPrinter = new errorPrinter_1.ErrorPrinter("Missing either author name or post content. Try again.", `${moment().format("LTS")}`);
            this.errorPrinter.onError();
        }
        ;
    }
    ;
}
exports.upperCasePostCreator = upperCasePostCreator;
//# sourceMappingURL=upperCasePostCreator.js.map