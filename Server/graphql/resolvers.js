import Question from "../models/Question";
import User from "../models/User";

export const resolvers = {
    Query: {
        async allList() {
            return await Question.find();
        },
        async getUser(root, { username }) {
            return await User.findOne({ username });
        },
        Login: async (_, args) => {
            const { username, password } = args.input;
            const result = await User.findOne({ username: username });
            if (!result) {
                throw Error("계정이 존재하지 않습니다.");
            }
            if (result.password !== password) {
                throw Error("비밀번호 오류");
            }
            return result;
        }
    },
    Mutation: {
        createQuestion: async (_, args) => {
            const { title, content } = args.input;
            await Question.create({ title, content });
            return true;
        },
        createUser: async (_, args) => {
            const { username, password } = args.input;
            const result = await User.findOne({ username: username });
            if (result) {
                throw Error("아이디 중복!");
            }
            await User.create({ username, password });
            return true;
        }
    }
};
