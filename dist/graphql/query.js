"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./resources/user/user.schema");
const post_squema_1 = require("./resources/post/post.squema");
const comment_schema_1 = require("./resources/comment/comment.schema");
const Query = `
    type Query {
        ${comment_schema_1.commentQueries}
        ${post_squema_1.PostQueries}
        ${user_schema_1.userQueries}
    }

`;
exports.Query = Query;
