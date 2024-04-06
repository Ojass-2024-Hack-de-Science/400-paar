import React, { useState, useEffect } from 'react';

const Timer = ({ duration }) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (time > 0) {
                setTime(time - 1000);
            }
        }, 1000);

        return () => clearTimeout(timerId);
    }, [time]);

    const getFormattedTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${formatDigit(hours)}:${formatDigit(minutes)}:${formatDigit(seconds)}`;
    };

    const formatDigit = (value) => {
        return value < 10 ? `0${value}` : value;
    };

    return (
        <div>{getFormattedTime(time)}</div>
    );
};

export default Timer;
