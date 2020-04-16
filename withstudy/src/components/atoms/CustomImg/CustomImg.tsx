import React from "react";

interface Props {
    children: string;
}

function DefaultImg(props: Props) {
    const { children } = props;
    return <img src={children} alt="" className="DefaultImg" />;
}

export default DefaultImg;
