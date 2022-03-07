import { GraphQLNonNull, GraphQLInt } from "graphql";
import { Post } from "../types/Post";
import { fakeDatabase } from "../../FakeDatabase";

export default {
    post: {
        type: Post,
        description: 'Get a specific post',
        args: { 
            id: { type: new GraphQLNonNull(GraphQLInt) },
        },
        resolve: function(parent, args){
            return fakeDatabase.getBlogPost(args.id);
        }
    }
}