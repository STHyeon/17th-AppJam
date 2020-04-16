import React from "react";
import { SubText, DefaultImg } from "../atoms";
import ICON_ME from "../../assets/img/icon/ICON_ME.png";

interface Props {
    children: string;
}

function Notify(props: Props) {
    const { children } = props;
    return (
        <div className="Notify clearfix">
            <DefaultImg>{ICON_ME}</DefaultImg>
            <SubText>{children}</SubText>
        </div>
    );
}

export default Notify;
