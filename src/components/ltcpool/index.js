import React, { useEffect, useState } from 'react';
import poolAPI from '../../utils/poolAPI';
import Worker from './worker.js';
import * as dayjs from 'dayjs'

const { ltcPool } = poolAPI;

function LitecoinPool() {
  const [update, setUpdate] = useState('never');

  useEffect(() => {
    const refresh = () => {
      document.getElementById('ltcPool').src += '';
      setUpdate(dayjs().format('M/D/YYYY h:mma'));
    }
    refresh();
    const timer = setInterval(refresh(), 300000);
    return () => clearInterval(timer);
  }, []);

//   const [dash, setDash] = useState({
//    updated: 'never',
//  }); 
  
//  useEffect(() => {
//    const ltc = () => {
//      ltcPool()
//        .then(res => {
//          res.updated = dayjs().format('D/M/YYYY @h:mma');
//          setDash(res);
//        })
//        .catch(err => console.log(err));
//    }
//    ltc();
//    const timer = setInterval(ltc(), 300000);
//    return clearInterval(timer);
//  }, []);

  return (
    <div className="row">
      <div className="col-10 ms-auto me-auto container card">
        <div className="row d-flex flex-row-reverse">
          <div className="col-3 d-flex justify-content-end">
            <p>Last Updated: { update }</p>
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
          <div className="col-12">
            <iframe id="ltcPool" title="LitecoinPool" src="https://litecoinpool.org/account"></iframe>
          </div>
        </div>
        <div className="row">
         {/* JSON.stringify(dash) */}
        </div>
      </div>
     </div>  
  );
}

export default LitecoinPool;
