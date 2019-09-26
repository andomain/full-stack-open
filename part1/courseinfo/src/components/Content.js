import React from 'react';

import Part from './Part';

// Material states to not use a loop
const Content = ({ parts }) => (
    <>
        <Part part={parts[0]} />
        <Part part={parts[1]} />
        <Part part={parts[2]} />
    </>
);

export default Content;
