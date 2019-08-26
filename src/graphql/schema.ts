const users: any[] = [
    {
        id: 1,
        name: 'Json',
        email: 'json@email.com'
    },
    {
        id: 2,
        name: 'Dani',
        email: 'dani@email.com'
    },
]
import { makeExecutableSchema } from 'graphql-tools';
const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]!
    }

    type Mutation {
        createUser(name: String!, email: String!): User
    }

`;

const resolvers = {
    //resolver trivial
    /*User: {
        id: (user) => user.id,
        name: (user) => 'Qualquer coisa',
        email: (user) => user.email
    },*/
    Query: {
        allUsers: () => users
    },
    Mutation: {
        createUser:(parent, args) =>{
            const newUser = Object.assign({id: users.length + 1}, args)
            users.push(newUser)
            return newUser
        }
    }
}

export default makeExecutableSchema({typeDefs, resolvers})