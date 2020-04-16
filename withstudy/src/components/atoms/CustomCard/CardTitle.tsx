import React from "react";

type Props = {
    children?: String;
};

function CardTitle(props: Props) {
    const { children } = props;
    return <div className="title">{children}</div>;
}

export default CardTitle;
