import React, { useState, useContext } from "react";
import { Context } from "../../context/context";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

function CalendarV() {
    const { history, LoadingDiv, SetCheckValue, SetErrorMessage } = useContext(Context);
    const [date, setDate] = useState(new Date());
    const [selectDate, setSelectDate] = useState(new Date());
    const localizer = momentLocalizer(moment);
    return (
        <div className="calendar_box">
            <div className="inner">
                <div className="" style={{ height: 500 }}>
                    <Calendar localizer={localizer} startAccessor="start" endAccessor="end" events={[]} />

                    <ul>
                        <li>
                            <h2>09AM - 11 AM</h2>
                            여기서부터
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CalendarV;
