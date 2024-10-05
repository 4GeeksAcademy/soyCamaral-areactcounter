import React, { useEffect, useState } from 'react';
import SecondsCounter from './SecondsCounter'; 

const Home = () => {
    const [seconds, setSeconds] = useState(0); 

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log(seconds);
            setSeconds((prevSeconds) => prevSeconds + 1); 
        }, 1000);

        return () => clearInterval(intervalId);
    }, [seconds]); 

    return (
        <div>
            
            <SecondsCounter seconds={seconds} />
        </div>
    );
};

export default Home;
