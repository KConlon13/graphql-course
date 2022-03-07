"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require("express-graphql"),
    graphqlHTTP = _require.graphqlHTTP;
// import graphqlHTTP from "express-graphql";


var app = (0, _express2.default)();

app.use('/graphql', graphqlHTTP({
    schema: _schema2.default,
    graphiql: true
}));

console.log('Starting server...');
app.listen(4000);