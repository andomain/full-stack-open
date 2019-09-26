import React from 'react';

const Total = ({ parts }) => {
    // Course material states do not use loops
    const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;

    return (
        <p>Number of exercises {total}</p>
    );
}

export default Total;
