import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormBox } from "../../components/organisms";
import { Input, CustomButton, HeadTitle, Text } from "../../components/atoms";
import { Context } from "../../context/context";

import { useMutation, useLazyQuery } from "@apollo/react-hooks";
import { CREATE_USER, READ_USER } from "../../assets/utils/queries";

function Auth() {
    const [createUser, { loading: c_u_loading, error: c_u_error }] = useMutation(CREATE_USER);
    const [getUser, { loading: loginLoading, data: loginData, error: loginError }] = useLazyQuery(READ_USER);
    const { LoadingDiv, history, SetCheckValue, SetErrorMessage } = useContext(Context);
    const [ID, setID] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordCheck, setPasswordCheck] = useState<string>("");
    const nowUrl: string = window.location.pathname;
    const [Mode, setMode] = useState<boolean>(true);

    useEffect(() => {
        if (nowUrl === "/register") {
            setMode(false);
        } else if (nowUrl === "/login") {
            setMode(true);
        } else if (nowUrl === "/logout") {
            localStorage.removeItem("token");
        }
    }, [nowUrl]);

    function onCREATEObject(): void {
        if (password !== passwordCheck) {
            SetCheckValue(true);
            SetErrorMessage("비밀번호가 일치하지않습니다.");
        } else {
            const write_object: object = {
                username: ID,
                password: password,
            };

            createUser({ variables: { input: write_object } })
                .then(() => history.push("/"))
                .catch(() => {});
        }
    }

    function onLoginObject(): void {
        const write_object: object = {
            username: ID,
            password: password,
        };
        getUser({ variables: { input: write_object } });
    }

    if (loginData) {
        const loginMap = loginData.getUser;
        let loginToken = "";
        loginMap.forEach((element: any) => {
            loginToken = element.token;
        });
        localStorage.setItem("token", loginToken);
        history.push("/");
    }
    if (c_u_loading) return <LoadingDiv />;
    if (loginLoading) return <LoadingDiv />;
    if (c_u_error) {
        SetCheckValue(true);
        SetErrorMessage(c_u_error.message);
    }
    if (loginError) {
        SetCheckValue(true);
        SetErrorMessage(loginError.message);
    }

    return (
        <div className="auth_wrap">
            <FormBox>
                {Mode ? (
                    <div className="Auth">
                        <HeadTitle>로그인</HeadTitle>
                        <Input onGetValue={setID}>아이디</Input>
                        <Input onGetValue={setPassword}>비밀번호</Input>
                        <CustomButton onButtonFunc={onLoginObject} classNames="AuthBtn">
                            로그인
                        </CustomButton>
                        <Link to="/register">
                            <Text>아직회원이 아니신가요?</Text>
                        </Link>
                    </div>
                ) : (
                    <div className="Auth">
                        <HeadTitle>회원가입</HeadTitle>
                        <Input onGetValue={setID}>아이디</Input>
                        <Input onGetValue={setPassword}>비밀번호</Input>
                        <Input onGetValue={setPasswordCheck}>비밀번호 확인</Input>
                        <CustomButton onButtonFunc={onCREATEObject} classNames="AuthBtn">
                            회원가입
                        </CustomButton>
                    </div>
                )}
            </FormBox>
        </div>
    );
}

export default Auth;
