import React, { ReactElement } from "react";
import { Calendar, FootNav } from "../components";

function CalendarBox(): ReactElement {
    return (
        <div>
            <Calendar />
            <FootNav />
        </div>
    );
}

export default CalendarBox;
