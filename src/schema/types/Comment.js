import { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInputObjectType } from "graphql";

export const Comment = new GraphQLObjectType({
    name: "Comment",
    description: "All details about a comment",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        content: { type: GraphQLString }
    })
})

export const CommentInputType = new GraphQLInputObjectType({
    name: "CommentInput",
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
        post: { type: new GraphQLNonNull(GraphQLInt) },
    }
})