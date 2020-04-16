import React from "react";
import { Link } from "react-router-dom";

import HOME from "../../assets/img/icon/ICON_HOME.png";
import MY from "../../assets/img/icon/ICON_ME.png";
import ClOCK from "../../assets/img/icon/ICON_STOPWATCH.png";
import PEN from "../../assets/img/icon/document.png";
import CALENDAR from "../../assets/img/icon/ICON_CALENDAR.png";

function Nav() {
    return (
        <nav className="footNav">
            <div className="inner">
                <ul className="clearfix footNav_list">
                    <li className="left">
                        <Link to="/calendar">
                            <img src={CALENDAR} alt="" />
                        </Link>
                    </li>
                    <li className="left">
                        <Link to="/write">
                            <img src={PEN} alt="" />
                        </Link>
                    </li>
                    <li className="center">
                        <Link to="/">
                            <img src={HOME} alt="" />
                        </Link>
                    </li>
                    <li className="right">
                        <Link to="/stopwatch">
                            <img src={ClOCK} alt="" />
                        </Link>
                    </li>
                    <li className="right">
                        <Link to="/login">
                            <img src={MY} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
