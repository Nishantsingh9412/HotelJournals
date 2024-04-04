import React, { useState } from "react";



const CircleChart = ({ size, percentage, strokeWidth, strokeColor }) => {
    const [dashOffset, setDashOffset] = useState(0);

    // Calculate the circumference
    const circumference = 2 * Math.PI * (size / 2);

    // Calculate the dash offset based on the percentage
    const calculateDashOffset = (percentage) => {
        return circumference - (percentage / 100) * circumference;
    };

    // Update the dash offset when the percentage changes
    React.useEffect(() => {
        setDashOffset(calculateDashOffset(percentage));
    }, [percentage]);

    return (
        <svg width={size} height={size}>
            <circle
                cx={size / 2}
                cy={size / 2}
                r={size / 2 - strokeWidth / 2}
                fill="none"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
            />
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize={size / 5}
                fill="black"
            >
                {percentage}%
            </text>
        </svg>
    );
};

export default CircleChart;