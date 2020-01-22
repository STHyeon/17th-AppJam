import React, { ReactElement } from "react";
import { Form, FootNav } from "../components";

function FormBox(): ReactElement {
    return (
        <div>
            <Form />
            <FootNav />
        </div>
    );
}

export default FormBox;
