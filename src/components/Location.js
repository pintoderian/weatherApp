import React from 'react';

const Location = ({ city }) => (  //destructuring
    //const { city } = props; //destructuring
    <div>
        <h1>{city}</h1>
    </div>
);

export default Location;