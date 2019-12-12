"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const normalPostCreator_1 = require("./posts/normalPostCreator");
const upperCasePostCreator_1 = require("./posts/upperCasePostCreator");
const str = "aaaaa";
const newPost = new normalPostCreator_1.NormalPostCreator("Davi", "Hi! I am trying to create a new post.");
newPost.createNewPost("Davi", "Hi! I am a test");
const newUpperCasePost = new upperCasePostCreator_1.upperCasePostCreator("Davi", "Hi! I am trying to create a new post with upper case.");
newUpperCasePost.createNewPost("Davi", "Hi! I am a test");
//# sourceMappingURL=index.js.map