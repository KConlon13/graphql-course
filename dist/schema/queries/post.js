"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require("graphql");

var _Post = require("../types/Post");

var _FakeDatabase = require("../../FakeDatabase");

exports.default = {
    post: {
        type: _Post.Post,
        description: 'Get a specific post',
        args: {
            id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) }
        },
        resolve: function resolve(parent, args) {
            return _FakeDatabase.fakeDatabase.getBlogPost(args.id);
        }
    }
};