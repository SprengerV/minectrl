import React, { useEffect, useState } from 'react';
import poolAPI from '../../utils/poolAPI';
import Worker from './worker.js';
import * as dayjs from 'dayjs'

function LitecoinPool() {
  const { ltcPool } = poolAPI;
  const [dash, setDash] = useState({});
  const [count, setCount] = useState(0);
  const [update, setUpdate] = useState('never');
  
  const tick = () => {
    setCount(prevState => prevState < 2 ? prevState + 1 : 0);
  }

  useEffect(() => {
    const timer = setInterval(tick, 150000);
    return clearInterval(timer);
  });

  useEffect(() => {
    if (count === 0) {
      ltcPool()
        .then(res => {
          setUpdate(dayjs().format('d/m/YYYY @h:mma'));
          setDash(res);
        })
        .catch(err => console.log(err));
    }
  }, [count, ltcPool]);

  return (
    <div className="row">
      <div className="col-10 ms-auto me-auto container card">
        <div className="row d-flex flex-row-reverse">
          <div className="col-3 d-flex justify-content-end">
            <p>Last Updated: { update }</p>
          </div>  
        </div>
        <div className="row d-flex justify-content-around">
          <div className="col-3">
            <a href="https://litecoinpool.org/account" target="_blank" rel="noreferrer">
              <h3>litecoinpool.org</h3>
            </a>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
    { /* workers.map */ }
        </div>  
      </div>
      dash: { dash } 
    </div>  
  );
}

export default LitecoinPool;
