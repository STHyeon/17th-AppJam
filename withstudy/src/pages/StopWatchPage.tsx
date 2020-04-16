import React from "react";
import { StopWatch } from "../templates";
import { CommonContext } from "../context/context";

function StopWatchPage() {
    return (
        <CommonContext>
            <StopWatch />
        </CommonContext>
    );
}

export default StopWatchPage;
