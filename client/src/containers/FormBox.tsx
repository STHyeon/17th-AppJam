import React, { ReactElement } from "react";
import { Form } from "../components";
import { CommonContext } from "../context/context";
import { CREATE_LIST, LIST_QUERY } from "../lib/api/queries";
import { useMutation } from "@apollo/react-hooks";

function FormBox(): ReactElement {
    const [createQuestion, { loading, error }] = useMutation(CREATE_LIST, {
        update(cache, { data: { createQuestion } }) {
            const { allList }: any = cache.readQuery({ query: LIST_QUERY });
            cache.writeQuery({
                query: LIST_QUERY,
                data: { allList: [...allList, createQuestion] }
            });
        }
    });

    function onCreate(w_title: string, w_content: string): void {
        const w_input: Object = {
            title: w_title,
            content: w_content
        };
        createQuestion({ variables: { input: w_input } });
    }

    return (
        <CommonContext>
            <Form onCreate={onCreate} />
        </CommonContext>
    );
}

export default FormBox;
