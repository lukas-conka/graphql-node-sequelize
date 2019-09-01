"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./resources/user/user.schema");
const post_squema_1 = require("./resources/post/post.squema");
const comment_schema_1 = require("./resources/comment/comment.schema");
const Mutation = `
    type Mutation {
        ${post_squema_1.PostMutations}
        ${user_schema_1.userMutations}
        ${comment_schema_1.commentMutations}
    }
`;
exports.Mutation = Mutation;
