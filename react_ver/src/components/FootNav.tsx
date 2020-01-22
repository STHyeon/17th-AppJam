import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import HOME from "../lib/img/icon/ICON_HOME.png";
import MY from "../lib/img/icon/ICON_ME.png";
import ClOCK from "../lib/img/icon/ICON_STOPWATCH.png";
import PEN from "../lib/img/icon/document.png";
import CALENDAR from "../lib/img/icon/ICON_CALENDAR.png";

function FootNav(): ReactElement {
    return (
        <nav className="footNav">
            <div className="inner">
                <ul className="clearfix">
                    <li className="left">
                        <Link to="/calendar">
                            <img src={CALENDAR} alt="home" />
                        </Link>
                    </li>
                    <li className="left">
                        <Link to="/write">
                            <img src={PEN} alt="" />
                        </Link>
                    </li>
                    <li className="center">
                        <Link to="">
                            <img src={HOME} alt="" />
                        </Link>
                    </li>
                    <li className="right">
                        <Link to="clock">
                            <img src={ClOCK} alt="clock" />
                        </Link>
                    </li>
                    <li className="right">
                        <Link to="/login">
                            <img src={MY} alt="my" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default FootNav;
