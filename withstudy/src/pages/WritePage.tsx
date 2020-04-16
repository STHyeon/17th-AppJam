import React from "react";
import { Write } from "../templates";
import { CommonContext } from "../context/context";

function WritePage() {
    return (
        <CommonContext>
            <Write />
        </CommonContext>
    );
}

export default WritePage;
