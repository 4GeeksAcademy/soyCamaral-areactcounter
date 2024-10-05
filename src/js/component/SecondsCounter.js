import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Digit from './Digit'; 

const SecondsCounter = ({ seconds }) => {
    
    const units = Math.floor(seconds % 10);
    const tens = Math.floor((seconds / 10) % 10);
    const hundreds = Math.floor((seconds / 100) % 10);
    const thousands = Math.floor((seconds / 1000) % 10);
    const tenThousands = Math.floor((seconds / 10000) % 10);
    const hundredThousands = Math.floor((seconds / 100000) % 10); 
    
    return (
        <div className="counter">
            <div className="p-2 border rounded digit-icon">
                <FontAwesomeIcon icon={faClock} />
            </div>
            <Digit value={0} /> 
            <Digit value={hundredThousands} />
            <Digit value={tenThousands} />
            <Digit value={thousands} />
            <Digit value={hundreds} />
            <Digit value={tens} />
            <Digit value={units} />
        </div>
    );
};

export default SecondsCounter;

