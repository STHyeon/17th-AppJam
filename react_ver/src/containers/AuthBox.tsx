import React, { useState, useEffect, ReactElement } from "react";
import { Auth, FootNav } from "../components";

function AuthBox(): ReactElement {
    let [mode, setMode] = useState<boolean>(true);
    const nowUrl: string = window.location.pathname;

    useEffect(() => {
        if (nowUrl === "/register") {
            setMode(false);
        } else if (nowUrl === "/login") {
            setMode(true);
        }
    }, [nowUrl]);

    return (
        <div>
            <Auth mode={mode} />
            <FootNav />
        </div>
    );
}

export default AuthBox;
