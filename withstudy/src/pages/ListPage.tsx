import React from "react";
import { List } from "../templates";
import { CommonContext } from "../context/context";

function ListPage() {
    return (
        <CommonContext>
            <List />
        </CommonContext>
    );
}

export default ListPage;
