import React, { useState, useContext } from "react";
import { Input, TextArea, HeadTitle, CustomButton } from "../../components/atoms";
import { FormBox } from "../../components/organisms";
import { Context } from "../../context/context";

import { useMutation } from "@apollo/react-hooks";
import { CREATE_QUESTION, LISTQUERY } from "../../assets/utils/queries";

function Write() {
    const [createQuestion, { loading: c_q_loading, error: c_q_error }] = useMutation(CREATE_QUESTION, {
        update(cache, { data: { createQuestion } }) {
            const { allQuestion }: any = cache.readQuery({ query: LISTQUERY });
            cache.writeQuery({
                query: LISTQUERY,
                data: { allQuestion: allQuestion.concat([createQuestion]) },
            });
        },
    });
    const [Title, setTitle] = useState<string>("");
    const [Content, setContent] = useState<string>("");
    const { history, LoadingDiv, SetCheckValue, SetErrorMessage } = useContext(Context);

    function getTitleValue(value: string): any {
        setTitle(value);
    }

    function getContentsValue(value: string): void {
        setContent(value);
    }

    function onObject(): void {
        const write_object: object = {
            title: Title,
            contents: Content,
        };

        createQuestion({ variables: { input: write_object } })
            .then((result) => {
                history.push("/");
            })
            .catch((err) => {});
    }

    if (c_q_error) {
        SetCheckValue(true);
        SetErrorMessage(c_q_error.message);
    }

    if (c_q_loading) return <LoadingDiv />;

    return (
        <div className="write_wrap">
            <FormBox>
                <HeadTitle>a</HeadTitle>
                <Input onGetValue={getTitleValue}>제목을 입력해주세요.</Input>
                <TextArea onGetValue={getContentsValue}>내용을 입력해주세요.</TextArea>
                <CustomButton onButtonFunc={onObject} classNames="WriteBtn">
                    버튼
                </CustomButton>
            </FormBox>
        </div>
    );
}

export default Write;
