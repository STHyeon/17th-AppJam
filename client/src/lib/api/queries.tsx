import gql from "graphql-tag";

export const LIST_QUERY = gql`
    query getList {
        allList {
            _id
            title
            content
        }
    }
`;

export const CREATE_LIST = gql`
    mutation List($input: QuestionInput) {
        createQuestion(input: $input) {
            _id
            title
            content
        }
    }
`;
