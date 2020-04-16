import { useState, useEffect } from "react";

export function useTimer() {
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
        let interval: any;
        if (isRunning) {
            interval = setInterval(() => setElapsed((prevElapsedTime) => prevElapsedTime + 0.1), 100);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isRunning]);

    return {
        isRunning,
        setIsRunning,
        elapsed,
        setElapsed,
    };
}

export const useStopWatch = () => {
    const [laps, setLaps] = useState<string[]>([]);
    const { isRunning, setIsRunning, elapsed, setElapsed } = useTimer();

    const handleReset = () => {
        setIsRunning(false);
        setElapsed(0);
        setLaps([]);
    };

    const handleAddLaps = () => {
        const currentLap: string = elapsed.toFixed(1);
        isRunning && setLaps([...laps, currentLap]);
    };

    return {
        elapsed: elapsed.toFixed(1),
        laps,
        addLap: () => handleAddLaps(),
        resetTimer: () => handleReset(),
        startTimer: () => setIsRunning(true),
        stopTimer: () => setIsRunning(false),
        isRunning,
    };
};
