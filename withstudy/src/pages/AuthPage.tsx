import React from "react";
import { Auth } from "../templates";
import { CommonContext } from "../context/context";

function AuthPage() {
    return (
        <CommonContext>
            <Auth />
        </CommonContext>
    );
}

export default AuthPage;
