const firstPost = {
    author: "Davi",
    text: "I am glad that I am learning something new everyday."
};
const secondPost = {
    author: "Soter",
    text: "Hi! My name is Soter and I love to debug."
};
const thirdPost = {
    author: "Goli",
    text: "Back-end >>>> Front-end."
};
const fourthPost = {
    author: "Darvas",
    text: "Future4 is way more nice than Sweden."
};
const fifthPost = {
    author: "Paula",
    text: "Machine learning rocks!"
};
const sixthPost = {
    author: "Davi",
    text: "When I grow up I want to be a Software Engineer."
};
const allPosts = [firstPost, secondPost, thirdPost, fourthPost, fifthPost, sixthPost];
const postFilter = (posts, author) => {
    return author ? posts.filter(post => post.author === author) : posts;
};
console.log(postFilter(allPosts, "Davi"));
//# sourceMappingURL=ex2.js.map