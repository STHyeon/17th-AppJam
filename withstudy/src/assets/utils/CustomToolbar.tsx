import React from "react";
import moment from "moment";
import { CustomButton, CustomLink } from "../../components/atoms";

function CustomToolbar(toolbar: any) {
    const goToBack = () => {
        toolbar.date.setMonth(toolbar.date.getMonth() - 1);
        toolbar.onNavigate("prev");
    };

    const goToNext = () => {
        toolbar.date.setMonth(toolbar.date.getMonth() + 1);
        toolbar.onNavigate("next");
    };

    const goToCurrent = () => {
        const now = new Date();
        toolbar.date.setMonth(now.getMonth());
        toolbar.date.setYear(now.getFullYear());
        toolbar.onNavigate("current");
    };

    const label = () => {
        const date = moment(toolbar.date);
        return (
            <div>
                <b>{date.format("MMMM")}</b>
                <span> {date.format("YYYY")}</span>
            </div>
        );
    };

    const goToMonth = () => {
        toolbar.onView("month");
    };

    const goToDay = () => {
        toolbar.onView("day");
    };

    return (
        <div>
            {label()}

            <div>
                <CustomButton classNames="calendar_tool" onButtonFunc={goToBack}>
                    &#8249;
                </CustomButton>
                <CustomButton classNames="calendar_tool" onButtonFunc={goToCurrent}>
                    today
                </CustomButton>
                <CustomButton classNames="calendar_tool" onButtonFunc={goToNext}>
                    &#8250;
                </CustomButton>
                <CustomButton classNames="calendar_tool" onButtonFunc={goToMonth}>
                    month
                </CustomButton>
                <CustomButton classNames="calendar_tool" onButtonFunc={goToDay}>
                    day
                </CustomButton>
                <CustomLink link="/calendarWrite">일정추가</CustomLink>
            </div>
        </div>
    );
}

export default CustomToolbar;
