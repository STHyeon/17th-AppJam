import gql from "graphql-tag";

export const LISTQUERY = gql`
    query allList {
        allQuestion {
            _id
            title
            contents
        }
    }
`;

export const CREATE_QUESTION = gql`
    mutation createQuestion($input: QuestionInput) {
        createQuestion(input: $input) {
            title
        }
    }
`;

export const CREATE_USER = gql`
    mutation createUser($input: UserInput) {
        createUser(input: $input) {
            username
        }
    }
`;

export const READ_USER = gql`
    query readUser($input: UserInput) {
        getUser(input: $input) {
            _id
            username
            password
        }
    }
`;
