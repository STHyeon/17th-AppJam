import User from "../models/user";
import Question from "../models/question";
import Calendar from "../models/calendar";
import { jwtUser, unJwtUser } from "../utils/jwt";

export const resolvers = {
    Query: {
        allUser: async (_, args) => {
            return await User.find();
        },
        getUser: async (_, args) => {
            const { username, password } = args.input;
            if (username.length <= 0 || password.length <= 0) {
                throw Error("빈칸을 채워주세요.");
            }

            const result = await User.find({ $and: [{ username: username }, { password: password }] });

            if (result.length == 0) {
                throw Error("계정이 존재하지 않거나 비밀번호가 틀렸습니다.");
            }

            return result;
        },
        allQuestion: async (_, args) => {
            const result = await Question.find();
            return result;
        },
        allCalendar: async (_, args) => {
            const result = await Calendar.find();
            return result;
        },
    },
    Mutation: {
        createUser: async (_, args) => {
            const { username, password } = args.input;
            if (username.length <= 0 || password.length <= 0) {
                throw Error("빈칸을 채워주세요.");
            }

            const result = await User.findOne({ username: username });
            if (result) {
                throw Error("계정이 이미 존재합니다.");
            }

            const token = jwtUser(username);
            const success = await User.create({ token, username, password });
            return success;
        },

        updateUser: async (_, args) => {
            const { _id, input } = args;
            const { username, password } = input;
            let b = null;

            if (username.length <= 0 || password.length <= 0) {
                throw Error("빈칸을 채워주세요.");
            }

            const result = await User.findOne({ username: username });
            if (result) {
                throw Error("계정이 이미 존재합니다.");
            }

            try {
                b = await new Promise((resolve, reject) => {
                    User.findOneAndUpdate({ _id }, input, { upsert: true, new: true }, (err, res) => {
                        if (err) {
                            // console.log(err);
                            return reject(err);
                        }

                        return resolve(res);
                    });
                });
            } catch (error) {
                // console.log(error);
            }

            if (b == null) {
                return false;
            }
            return true;
        },
        deleteUser: async (_, args) => {
            const { _id } = args;
            await User.findOneAndDelete({ _id });
            return true;
        },
        createQuestion: async (_, args) => {
            const { title, desc } = args.input;

            if (title.length <= 0 || desc.length <= 0) {
                throw new Error("빈칸을 채워주세요.");
            }

            const createdAt = new Date().toString();
            const result = await Question.create({ title, desc, createdAt });

            return result;
        },
        createCalendar: async (_, args) => {
            const { title, desc, start, end } = args.input;
            if (title.length <= 0 || desc.length <= 0) {
                throw new Error("빈칸을 채워주세요.");
            }
            // const start = new Date().toString();
            // const end = new Date().toString();

            const result = await Calendar.create({ title, desc, start, end });

            return result;
        },
    },
};
