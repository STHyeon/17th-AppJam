import React from "react";

interface Props {
    children: React.ReactNode;
}

function FormBox(props: Props) {
    const { children } = props;
    return <div className="FormBox">{children}</div>;
}

export default FormBox;
