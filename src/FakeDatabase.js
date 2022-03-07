class FakeDatabase {

    constructor() {
        this.authors = [
            { id: "1", name: "Kyle Conlon", email: "kyle@gmail.com" },
            { id: "2", name: "Matt Conlon", email: "matt@gmail.com" },
            { id: "3", name: "Sean Conlon", email: "sean@gmail.com" }
        ];

        this.blogPosts = [
            {
                id: 1,
                title: 'My first blog post',
                content: 'This is my very first blog post. Hope you like it!',
                author: '1'
            },
            {
                id: 2,
                title: 'My second post',
                content: 'This is my second blog post. Hope you like this',
                author: '2'
            },
            {
                id: 3,
                title: 'My third post!',
                content: 'Check out my third post. I think its better than my first two.',
                author: '3'
            }
        ];

        this.comments = [
            { id: 1, postId: 1, name: 'Anonymous', content: 'Good luck with your blog!' },
            { id: 2, postId: 1, name: 'Alex', content: 'Love the content' },
            { id: 3, postId: 3, name: 'Peter', content: 'Ive read better' }
        ];
    }

    // ---------------------------
    //      READ METHODS
    // ---------------------------

    getBlogPosts(){
        return this.blogPosts;
    }

    getBlogPost(id){
        return this.blogPosts.filter((post)=> {
            return post.id === id;
        })[0];
    }

    getCommentsforPost(postId){
        return this.comments.filter((comment) => {
            return comment.postId === postId;
        });
    }

    getAuthor(authorId){
        return this.authors.filter((author)=>{
            return author.id === authorId;
        })[0];
    }

    getPostsOfAuthor(authorId){
        return this.getBlogPosts().filter((item)=> {
            return item.author === authorId;
        });
    }

    // ----------------------------
    //       WRITE METHODS
    // ----------------------------

    addNewBlogPost(post){
        post.id = this.blogPosts.length + 1;
        this.blogPosts.push(post);
        return post;
    }

    addNewComment(comment){
        comment.id = this.comments.length + 1;
        this.comments.push(comment);
        return comment;
    }

}

export const fakeDatabase = new FakeDatabase();