import React from "react";

interface Props {
    children: React.ReactNode;
    classNames?: string;
}

function Text(props: Props) {
    const { children, classNames } = props;
    return <p className={`Text ${classNames}`}>{children}</p>;
}

export default Text;
