type posts = {
    author: string,
    text: string
};

const firstPost: posts = {
    author: "Davi",
    text: "I am glad that I am learning something new everyday."
};

const secondPost: posts = {
    author: "Soter",
    text: "Hi! My name is Soter and I love to debug."
};

const thirdPost: posts = {
    author: "Goli",
    text: "Back-end >>>> Front-end."
};

const fourthPost: posts = {
    author: "Darvas",
    text: "Future4 is way more nice than Sweden."
};

const fifthPost: posts = {
    author: "Paula",
    text: "Machine learning rocks!"
};

const sixthPost: posts = {
    author: "Davi",
    text: "When I grow up I want to be a Software Engineer."
};

const allPosts: posts[] = [firstPost, secondPost, thirdPost, fourthPost, fifthPost, sixthPost];

const postFilter = (posts: posts[], author?: string): posts[] => {
    return author ? posts.filter(post => post.author === author) : posts;
};

console.log(postFilter(allPosts, "Davi"));