import React from "react";
import { CardAvatar, CardHeader, CardTitle } from "../../atoms";

interface DataProps {
    title?: string;
    avatar?: string;
}

function ListCardHeader(props: DataProps) {
    const { avatar, title } = props;

    return (
        <CardHeader>
            <CardAvatar>{avatar}</CardAvatar>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
    );
}

export default ListCardHeader;
