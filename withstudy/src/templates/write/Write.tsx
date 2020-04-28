import React, { useState, useContext, useEffect, useCallback } from "react";
import { Input, TextArea, HeadTitle, CustomButton } from "../../components/atoms";
import { FormBox } from "../../components/organisms";
import { Context } from "../../context/context";

import { useMutation } from "@apollo/react-hooks";
import { CREATE_QUESTION, LISTQUERY, CREATE_CALENDAR, READ_CALENDAR } from "../../assets/utils/queries";

import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";

function Write() {
    // 글추가
    const [createQuestion, { loading: c_q_loading, error: c_q_error }] = useMutation(CREATE_QUESTION, {
        update(cache, { data: { createQuestion } }) {
            const { allQuestion }: any = cache.readQuery({ query: LISTQUERY });
            cache.writeQuery({
                query: LISTQUERY,
                data: { allQuestion: allQuestion.concat([createQuestion]) },
            });
        },
    });

    // 일정추가
    const [createCalendar, { loading: c_c_loading, error: c_c_error }] = useMutation(CREATE_CALENDAR, {
        update(cache, { data: { createCalendar } }) {
            const { allCalendar }: any = cache.readQuery({ query: READ_CALENDAR });
            cache.writeQuery({
                query: READ_CALENDAR,
                data: { allCalendar: allCalendar.concat([createCalendar]) },
            });
        },
    });

    const [Title, setTitle] = useState<string>("");
    const [Content, setContent] = useState<string>("");
    const { history, LoadingDiv, SetCheckValue, SetErrorMessage } = useContext(Context);
    const nowUrl: string = window.location.pathname;
    const [Mode, setMode] = useState<boolean>(false);
    const [CalDate, setCalDate] = useState([new Date(), new Date()]);

    useEffect(() => {
        if (nowUrl === "/write") {
            setMode(false);
        } else if (nowUrl === "/calendarWrite") {
            setMode(true);
        }
    }, [nowUrl]);

    function getTitleValue(value: string): any {
        setTitle(value);
    }

    function getContentsValue(value: string): void {
        setContent(value);
    }

    function onWObject(): void {
        const write_object: object = {
            title: Title,
            desc: Content,
        };

        createQuestion({ variables: { input: write_object } })
            .then((result) => {
                history.push("/");
            })
            .catch((err) => {});
    }

    function onCObject(): void {
        const write_object: object = {
            title: Title,
            desc: Content,
            start: CalDate[0].toString(),
            end: CalDate[1].toString(),
        };
        createCalendar({ variables: { input: write_object } })
            .then((result) => {
                history.push("/calendar");
            })
            .catch((err) => {});
    }

    function onChange(changeDate: any): void {
        setCalDate(changeDate);
    }

    if (c_q_error) {
        SetCheckValue(true);
        SetErrorMessage(c_q_error.message);
    }

    if (c_c_error) {
        SetCheckValue(true);
        SetErrorMessage(c_c_error.message);
    }

    if (c_q_loading) return <LoadingDiv />;
    if (c_c_loading) return <LoadingDiv />;

    return (
        <div className="write_wrap">
            <FormBox>
                <HeadTitle>{Mode ? "일정추가" : "글쓰기"}</HeadTitle>
                {Mode ? <DateTimeRangePicker onChange={onChange} value={CalDate} calendarIcon={null} className="datepick" /> : null}
                <Input onGetValue={getTitleValue}>제목을 입력해주세요.</Input>
                <TextArea onGetValue={getContentsValue}>내용을 입력해주세요.</TextArea>
                <CustomButton onButtonFunc={Mode ? onCObject : onWObject} classNames="WriteBtn">
                    버튼
                </CustomButton>
            </FormBox>
        </div>
    );
}

export default Write;
