import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers.js";

const typeDefs = `
    type User {
        _id: ID!
        username: String
        password: String
    }

    input UserInput {
        username: String
        password: String
    }

    type Question {
        _id: ID!
        title: String!
        contents: String!
    }

    input QuestionInput {
        title: String
        contents: String
    }

    type Query {
        allUser: [User]
        getUser(input: UserInput): [User]
        allQuestion: [Question]
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(_id: ID!, input: UserInput): Boolean
        deleteUser(_id: ID!): Boolean!
        createQuestion(input: QuestionInput): Question
    }

`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
