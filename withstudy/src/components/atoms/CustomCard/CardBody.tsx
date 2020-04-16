import React from "react";

interface Props {
    children: React.ReactNode;
}

function CardBody(props: Props) {
    const { children } = props;
    return <div>{children}</div>;
}

export default CardBody;
