import React, { useState, useEffect } from "react";
import { useStopWatch } from "../../assets/utils/stopwatch";
import { CustomButton, Text, SubText, CustomMap } from "../../components/atoms";

function StopWatch() {
    const { laps, addLap, isRunning, elapsed, startTimer, stopTimer, resetTimer } = useStopWatch();
    const handleOnOff = () => {
        isRunning ? stopTimer() : startTimer();
    };
    const handleReset = () => {
        isRunning ? addLap() : resetTimer();
    };

    return (
        <div className="clock">
            <h1>스톱워치</h1>
            <SubText classNames="description">이만큼 집중했어요!!</SubText>
            <div className="clock_wrap">
                <Text classNames="time">{elapsed}s</Text>
                <CustomButton onButtonFunc={handleOnOff} classNames="stopwatchbtn">
                    {isRunning ? "Stop" : "Start"}
                </CustomButton>
                <CustomButton disabled={elapsed === "0.0"} onButtonFunc={handleReset} classNames="stopwatchbtn">
                    {isRunning ? "+Lap" : "Reset"}
                </CustomButton>
                <CustomMap mapProps={laps} classNames="stopwatchMap" units="s" />
            </div>
        </div>
    );
}

export default StopWatch;
