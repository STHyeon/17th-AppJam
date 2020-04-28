import gql from "graphql-tag";

export const LISTQUERY = gql`
    query allList {
        allQuestion {
            _id
            title
            desc
            createdAt
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
            token
            username
            password
        }
    }
`;

export const CREATE_CALENDAR = gql`
    mutation createCalendar($input: CalendarInput) {
        createCalendar(input: $input) {
            _id
            title
            start
            end
            desc
        }
    }
`;

export const READ_CALENDAR = gql`
    query allCalendar {
        allCalendar {
            title
            start
            end
            desc
        }
    }
`;
