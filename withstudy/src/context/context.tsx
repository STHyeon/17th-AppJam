import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";
import { Nav } from "../templates";
import LoadingGif from "../assets/img/loading.gif";
import { Notify } from "../components/organisms";

const Context = createContext<any>({});

function CommonContext(props: any) {
    let history = useHistory();
    const [CheckValue, SetCheckValue] = useState<boolean>(false);
    const [ErrorMessage, SetErrorMessage] = useState<string>("");

    const LoadingDiv = () => {
        return (
            <div className="loadingAni">
                <img src={LoadingGif} alt="" />
            </div>
        );
    };

    return (
        <Context.Provider value={{ history, LoadingDiv, SetCheckValue, SetErrorMessage }}>
            <div className="inner">
                {CheckValue ? <Notify>{ErrorMessage.replace("GraphQL error:", "").trim()}</Notify> : null}
                {props.children}
            </div>
            <Nav />
        </Context.Provider>
    );
}

export { CommonContext, Context };
