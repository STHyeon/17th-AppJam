import Question from "../models/Question";

export const resolvers = {
    Query: {
        async allList() {
            return await Question.find();
        }
    },
    Mutation: {
        async createQuestion(root, { input }) {
            return await Question.create(input);
        }
    }
};
