import React, { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";
import { Nav } from "../templates";
import LoadingGif from "../assets/img/loading.gif";
import { Notify } from "../components/organisms";

const Context = createContext<any>({});

function CommonContext(props: any) {
    let history = useHistory();
    const [CheckValue, SetCheckValue] = useState<boolean>(false);
    const [ErrorMessage, SetErrorMessage] = useState<string>("");
    const [isLogin, setIsLogin] = useState<string | null | undefined>("");
    const [loginMode, setLoginMode] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLogin(token);

        if (localStorage.getItem("token") === "null" || localStorage.getItem("token") === "undefined" || localStorage.getItem("token") == null) {
            setLoginMode(false);
        } else {
            setLoginMode(true);
        }
    }, []);

    const LoadingDiv = () => {
        return (
            <div className="loadingAni">
                <img src={LoadingGif} alt="" />
            </div>
        );
    };

    // console.log(isLogin);
    // console.log(loginMode);

    return (
        <Context.Provider value={{ history, LoadingDiv, SetCheckValue, SetErrorMessage, isLogin }}>
            <div className="inner">
                {CheckValue ? <Notify>{ErrorMessage.replace("GraphQL error:", "").trim()}</Notify> : null}
                {props.children}
            </div>
            <Nav checkLogin={loginMode} />
        </Context.Provider>
    );
}

export { CommonContext, Context };
