"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostTypes = `

    type Post {
        id: ID!
        title: String!
        content: String!
        photo: String!
        createdAt: String!
        updateAt: String!
        author: User!
        comments: [Comment! ]!    
    }

    input PostInput {
        title: String!
        content: String!
        photo: String!
        author: Int!
    }

`;
exports.PostTypes = PostTypes;
const PostQueries = `
    posts(firt: Int, offset: Int): [Post!]!
    post(id: ID!): Post
`;
exports.PostQueries = PostQueries;
const PostMutations = `
    createPost(input: PostInput!): Post
    updatePost(id: ID!, input: PostInput!): Post
    deletePost(id: ID!): Boolean
`;
exports.PostMutations = PostMutations;
