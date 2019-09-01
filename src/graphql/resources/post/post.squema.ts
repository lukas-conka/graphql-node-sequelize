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

const PostQueries = `
    posts(firt: Int, offset: Int): [Post!]!
    post(id: ID!): Post
`; 

const PostMutations = `
    createPost(input: PostInput!): Post
    updatePost(id: ID!, input: PostInput!): Post
    deletePost(id: ID!): Boolean
`;

export  {
    PostTypes,
    PostQueries,
    PostMutations  

}