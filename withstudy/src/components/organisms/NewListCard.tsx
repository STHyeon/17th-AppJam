import React from "react";
import { ListCardBody, ListCardHeader } from "../molecules";

interface NewListCardProps {
    data?: {
        _id?: string;
        title?: string;
        desc?: string;
        createdAt?: string;
    };
}

function NewListCard(props: NewListCardProps) {
    const { data } = props;
    const avatar = "temporary";

    return (
        <li>
            <div className="Object">
                <ListCardHeader avatar={avatar} title={data && data.title} />
                <ListCardBody />
            </div>
        </li>
    );
}

export default NewListCard;
