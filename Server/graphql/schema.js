import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Question {
        _id: ID!
        title: String!
        content: String!
    }

    input QuestionInput {
        title: String!
        content: String!
    }

    type User {
        _id: ID!
        username: String!
        password: String!
    }

    input UserInput {
        username: String!
        password: String!
    }

    type Query {
        allList: [Question]
        getUser(username: String): User
        Login(input: UserInput):User
    }

    type Mutation {
        createQuestion(input: QuestionInput): Boolean!
        createUser(input: UserInput): Boolean!
    }
    `;

// createUser(input: UserInput): User
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
