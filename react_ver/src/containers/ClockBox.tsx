import React, { ReactElement } from "react";
import { Clock, FootNav } from "../components";

function ClockBox(): ReactElement {
    return (
        <div>
            <Clock />
            <FootNav />
        </div>
    );
}

export default ClockBox;
