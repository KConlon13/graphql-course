import { GraphQLNonNull, GraphQLInt } from "graphql";
import { fakeDatabase } from "../../FakeDatabase";
import { Comment, CommentInputType } from "../types/Comment";

export default {
    addComment: {
        type: Comment,
        description: 'Creates a new comment for a blog post',
        args: { 
            post: { type: CommentInputType },
        },
        resolve: function(parent, {comment} ){
            return fakeDatabase.addNewComment(comment);
        }
    }
}