import React from "react";

type Props = {
    children?: String;
};

function CardAvatar(props: Props) {
    const { children } = props;
    return <div className="avatar">{children}</div>;
}

export default CardAvatar;
