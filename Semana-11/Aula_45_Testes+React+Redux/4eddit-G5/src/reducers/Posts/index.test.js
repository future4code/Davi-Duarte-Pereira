import posts from "./index";

const mockPosts = {
    posts: [
        {
            votesCount: 2,
            userVoteDirection: 0,
            commentsNumber: 14,
            id: "23",
            username: "AstroDev",
            title: "Eu amo meus alunos",
            text: "Dessa vez não é fraude.",
            createdAt: 1573759519795
        }
    ],
    post: {
        comments: [
            {
                votesCount: 0,
                userVoteDirection: 0,
                id: "12309",
                username: "Davi",
                text: "AstroDev strikes again.",
                createdAt: 1573915768984
            }
        ],
        votesCount: -1,
        userVoteDirection: 0,
        commentsNumber: 1,
        id: "938092138",
        username: "Pedro Darvas",
        createdAt: 1573757199907,
        title: "URGENTE!",
        text: " Astrodev demite funcionários responsáveis por espalhar boatos de bônus em forma de viagem espacial."
    }
};

describe('Post reducer', () => {
    it('should get posts', () => {
        const testAction = {
            type: "GET_POSTS",
            payload: {
                posts: mockPosts.posts
            }
        };

        const newState = posts(undefined, testAction);

        expect(newState.posts).toHaveLength(1);
        expect(newState.posts[0].text).toBe("Dessa vez não é fraude.");
        expect(newState.posts[0].createdAt).toBe(1573759519795);
        expect(newState.posts[0].id).toBe("23");
        expect(newState.posts[0].commentsNumber).toBe(14);
    });

    it('should get a detailed post', () => {
        const testAction = {
            type: "DISPLAY_DETAILED_POST",
            payload: {
                post: mockPosts.post
            }
        };

        const newState = posts(undefined, testAction);
        expect(newState.post.comments[0].username).toBe("Davi");
        expect(newState.post.title).toBe("URGENTE!");
    });
});