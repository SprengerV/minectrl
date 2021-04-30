import React, { useEffect, useState } from 'react';
import poolAPI from '../../utils/poolAPI';
import Worker from './worker';
import conversion from '../../utils/conversion';
import * as dayjs from 'dayjs';
import dotenv from 'dotenv'
import './ethermine.css';
dotenv.config();

function Ethermine() {
  const { ethermine } = poolAPI;
  const { hToMh, satToEth } = conversion;
  const [dash, setDash] = useState(
    {
      currentStatistics : {
        activeWorkers: null,
        currentHashrate: null,
        unpaid: null
      },
      workers: []
    }
  );
  const [update, setUpdate] = useState('');
  const [count, setCount] = useState(0);
  const ethermineURL = 'https://ethermine.org/miners/' + process.env.REACT_APP_ETH_ADDR.substring(2) + '/dashboard';

  const tick = () => {
    setCount((prevState) => prevState < 2 ? prevState + 1 : 0);
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 150000);
    return () => clearInterval(timer);
  });

  useEffect(() => { 
    if (count === 0) {
      ethermine()
        .then(({ data }) => { 
          setUpdate(dayjs().format('M/D/YYYY @h:mma'));
          setDash(data.data);
        })
        .catch(err => {
          console.log(err)
        });
      console.log('dash2', dash )
    }
  }, [count, dash, ethermine]);

  return (
    <div className="row">
      <div className="col-10 ms-auto me-auto container card">
        <div className="row d-flex flex-row-reverse">
          <div className="col-3 d-flex justify-content-end">
            <p>Last updated: { update }</p>
          </div>  
        </div>
        <div className="row d-flex justify-content-around">
          <div className="col-3">
            <a href={ ethermineURL } target="_blank" rel="noreferrer">
              <h3>Ethermine.org</h3>
            </a>
          </div>
          <div className="col-3">
            <h4>Workers:</h4>
            <p>{ dash.currentStatistics.activeWorkers }</p>
          </div>
          <div className="col-3">
            <h4>Current Hashrate:</h4>
            <p>{ hToMh(dash.currentStatistics.currentHashrate) } Mh/s</p>
          </div>
          <div>
            <h4>Unpaid Balance:</h4>
            <p>{ satToEth(dash.currentStatistics.unpaid) } ETH</p>
          </div>
        </div> 
        <div className="row d-flex justify-content-center">
          { dash.workers.map((worker, index) => <Worker data={ worker } key={index}/>) }
        </div>
      </div> 
    </div>
  );
}

export default Ethermine;
