import React from "react";
import { ListCardBody, ListCardHeader } from "../molecules";

function NewListCard(props: any) {
    const { data } = props;
    const avatar = "temporary";

    return (
        <li>
            <div className="Object">
                <ListCardHeader avatar={avatar} title={data.title} />
                <ListCardBody />
            </div>
        </li>
    );
}

export default NewListCard;
