import React, { useState, ReactElement } from "react";
import Calendars from "react-calendar";

function Calendar(): ReactElement {
    const [date, setDate] = useState(new Date());

    const onChange = (dates: any) => {
        setDate(dates);
        console.log(dates);
    };

    const onSelect = (e: any) => {
        console.log(e);
    };

    return (
        <div className="calendar">
            <div className="inner">
                <div className="calendar_box">
                    <Calendars onChange={onChange} value={date} />
                    <ul>
                        <li>
                            <h1>09AM - 11 AM</h1>
                            여기서부터
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Calendar;
