import React from "react";

interface Props {
    children: React.ReactNode;
    classNames?: string;
}

function SubText(props: Props) {
    const { children, classNames } = props;
    return <span className={`Text SubText ${classNames}`}>{children}</span>;
}

export default SubText;
