import React, { useEffect, useState } from 'react';

function Timer(props) {
  const [count, setCount] = useState(0);

  const tick = (timeOut) => {
    setCount((prevCount) => prevCount <  timeOut ? prevCount + 1 : 0 );
  }

//  useEffect(() => {
//    if (count === 0) props.apiCall();
//  }, [count, props.apiCall]);

//  useEffect((prevProps) => {
//    let timer;  
//    if (props.timer.timer) {
//      timer = setInterval(() => tick(props.timer.timeOut), 1000);
//    }
//    return () => clearInterval(timer);
//  }, [props.timer, props.timeOut]);
  
   
}

export default Timer;
