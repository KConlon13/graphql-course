import { GraphQLString, GraphQLNonNull } from "graphql";
import { Author } from "../types/Author";
import { fakeDatabase } from "../../FakeDatabase";

export default {
    author: {
        type: Author,
        description: 'Get a specific author',
        args: { 
            id: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: function(parent, args){
            return fakeDatabase.getAuthor(args.id);
        }
    }
}