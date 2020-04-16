import React from "react";

interface Props {
    children: String;
}

function HeadTitle(props: Props) {
    const { children } = props;
    return <h2 className="HeadTitle">{children}</h2>;
}

export default HeadTitle;
