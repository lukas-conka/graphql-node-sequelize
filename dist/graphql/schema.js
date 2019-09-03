"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const lodash_1 = require("lodash");
const query_1 = require("./query");
const mutation_1 = require("./mutation");
const user_schema_1 = require("./resources/user/user.schema");
const post_squema_1 = require("./resources/post/post.squema");
const comment_schema_1 = require("./resources/comment/comment.schema");
const comment_resolvers_1 = require("./resources/comment/comment.resolvers");
const post_resolver_1 = require("./resources/post/post.resolver");
const user_resolver_1 = require("./resources/user/user.resolver");
const resolvers = lodash_1.merge(comment_resolvers_1.commentResolvers, post_resolver_1.postResolver, user_resolver_1.userResolvers);
const SchemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`;
exports.default = graphql_tools_1.makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        query_1.Query,
        mutation_1.Mutation,
        user_schema_1.userTypes,
        post_squema_1.PostTypes,
        comment_schema_1.commentTypes,
    ],
    resolvers
});
