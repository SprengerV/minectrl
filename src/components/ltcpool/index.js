import React, { useEffect, useState } from 'react';
import poolAPI from '../../utils/poolAPI';
import Worker from './worker.js';
import * as dayjs from 'dayjs'

const { ltcPool } = poolAPI;

function LitecoinPool() {
   const [dash, setDash] = useState({
    updated: 'never',
  }); 

  useEffect(() => {
    const ltc = () => {
      ltcPool()
        .then(res => {
          res.updated = dayjs().format('D/M/YYYY @h:mma');
          setDash(res);
        })
        .catch(err => console.log(err));
    }
    ltc();
    const timer = setInterval(ltc(), 300000);
    return clearInterval(timer);
  }, []);

  return (
    <div className="row">
      <div className="col-10 ms-auto me-auto container card">
        <div className="row d-flex flex-row-reverse">
          <div className="col-3 d-flex justify-content-end">
            <p>Last Updated: { dash.updated }</p>
          </div>  
        </div>
        <div className="row d-flex">
          <div className="col-3">
            <a href="https://litecoinpool.org/account" target="_blank" rel="noreferrer">
              <h3>litecoinpool.org</h3>
            </a>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
    { /* workers.map */ }
        </div>
        <div className="row">
          dash: { JSON.stringify(dash) }
        </div>
      </div>
     </div>  
  );
}

export default LitecoinPool;
