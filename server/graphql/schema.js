import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers.js";

const typeDefs = `
    type User {
        _id: ID!
        token: String
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
        desc: String!
        createdAt: String 
    }

    input QuestionInput {
        title: String
        desc: String
    }

    type Calendar {
        _id: ID!
        title: String!
        desc: String!
        start: String
        end: String
    }

    input CalendarInput {
        title: String
        desc: String
        start: String
        end: String
    }

    type Query {
        allUser: [User]
        getUser(input: UserInput): [User]
        allQuestion: [Question]
        allCalendar: [Calendar]
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(_id: ID!, input: UserInput): Boolean
        deleteUser(_id: ID!): Boolean!
        createQuestion(input: QuestionInput): Question
        createCalendar(input: CalendarInput): Calendar
    }

`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;
