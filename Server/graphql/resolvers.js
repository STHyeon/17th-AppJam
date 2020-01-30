import Question from "../models/Question";

export const resolvers = {
    Query: {
        async allList() {
            return await Question.find();
        }
    }
};
