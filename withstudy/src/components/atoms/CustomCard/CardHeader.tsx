import React from "react";

function CardHeader({ ...props }: any) {
    const { children } = props;
    return <div>{children}</div>;
}

export default CardHeader;
