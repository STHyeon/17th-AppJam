import React, { ReactElement } from "react";
import { useStopwatch } from "./CustomHook";
import Laps from "./Laps";

function Clock(): ReactElement {
    const { laps, addLap, isRunning, elapsedTime, startTimer, stopTimer, resetTimer } = useStopwatch();
    const handleStartStop = () => {
        isRunning ? stopTimer() : startTimer();
    };

    const handleLapOrReset = () => {
        isRunning ? addLap() : resetTimer();
    };

    return (
        <div className="clock">
            <div className="inner clearfix">
                <h1>스톱워치</h1>
                <p className="description">이만큼 집중했어요!!</p>
                <div className="clock_wrap">
                    <div className="clockBox">
                        <p className="time">{elapsedTime}s</p>
                        <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
                        <button disabled={elapsedTime === "0.0"} onClick={handleLapOrReset}>
                            {isRunning ? "+Lap" : "Reset"}
                        </button>
                        <ul>
                            {laps.length > 0 &&
                                laps.map((data: any, index: number) => (
                                    <li key={index}>
                                        <span>Lap {index + 1}</span>
                                        {data.toFixed(1)}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clock;
