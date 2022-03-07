import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { Post } from "./Post";
import { fakeDatabase } from "../../FakeDatabase";

export const Author = new GraphQLObjectType({
    name: "Author",
    description: "All details about an author",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        posts: {
            type: new GraphQLList(Post),
            resolve: (author)=> {
                return fakeDatabase.getPostsOfAuthor(author.id);
            }
        }
    })
})

