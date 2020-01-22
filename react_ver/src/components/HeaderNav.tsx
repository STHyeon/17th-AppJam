import React, { ReactElement } from "react";
import Ham from "../lib/img/icon/MENU.png";

function HeaderNav(): ReactElement {
    return (
        <header>
            <div className="inner">
                <div className="box">
                    <img src={Ham} alt="menu" />
                </div>
            </div>
        </header>
    );
}

export default HeaderNav;
