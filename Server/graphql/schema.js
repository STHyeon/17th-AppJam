import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Question {
        _id: ID!
        title: String!
        content: String!
    }

    type Query {
        allList: [Question]
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
