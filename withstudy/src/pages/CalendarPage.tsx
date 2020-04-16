import React from "react";
import { CalendarV } from "../templates";
import { CommonContext } from "../context/context";

function CalendarPage() {
    return (
        <CommonContext>
            <CalendarV />
        </CommonContext>
    );
}

export default CalendarPage;
