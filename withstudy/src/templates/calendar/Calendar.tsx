import React, { useContext } from "react";
import { Context } from "../../context/context";
import { Calendar, momentLocalizer } from "react-big-calendar";
import CustomToolbar from "../../assets/utils/CustomToolbar";
import events from "../../assets/utils/event";
import { useQuery } from "@apollo/react-hooks";
import { READ_CALENDAR } from "../../assets/utils/queries";

import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

function CalendarV() {
    const { LoadingDiv } = useContext(Context);
    const { loading: calendarLoading, data: calendarData, error: calendarError } = useQuery(READ_CALENDAR);
    const localizer = momentLocalizer(moment);

    if (calendarLoading) return <LoadingDiv />;
    if (calendarError) return <p>서버 에러</p>;

    console.log(calendarData.allCalendar);
    console.log(events);

    return (
        <div className="calendar_box">
            <div className="inner">
                <div className="" style={{ height: 500 }}>
                    <Calendar localizer={localizer} startAccessor="start" endAccessor="end" events={calendarData.allCalendar} components={{ toolbar: CustomToolbar }} />
                </div>
                <ul>
                    {events
                        .filter((data1) => {
                            const createdAt = data1.start;
                            const now = new Date();
                            const first = createdAt.getFullYear() + " " + createdAt.getMonth() + " " + createdAt.getDate();
                            const second = now.getFullYear() + " " + now.getMonth() + " " + now.getDate();

                            return first === second;
                        })
                        .map((data2, index) => {
                            return <li key={index}>{data2.title}</li>;
                        })}
                </ul>
            </div>
        </div>
    );
}

export default CalendarV;
