import React, { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import * as dayjs from 'dayjs';
import './coolmine.css'
dotenv.config();

function CoolMine() {
  //const [dash, setDash] = useState({});
  //const [count, setCount] = useState(0);
  const [update, setUpdate] = useState('never')
  const coolmineURL = 'https://coolmine.top/miner.php?coin=1&wallet=' + process.env.REACT_APP_ARRR_ADDR;
  const zanziURL = 'http://' + process.env.REACT_APP_ZANZI_IP + '/';

  const reload = () => {
    document.getElementById('coolmine').src += '';
    setUpdate(dayjs().format('M/D/YYYY @h:mma'));
  };
  useEffect(() => {
    const timer = setInterval(() => reload(), 120000);
    return () => clearInterval(timer);
  });

  return (<>
    
    <div className="row">
      <div className="col-10 ms-auto me-auto container card">
        <div className="row d-flex flex-row-reverse">
          <div className="col-3 d-flex justify-content-end">
            <p>Last Updated: { update }</p>
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-3">
            <a href={ coolmineURL } target="_blank" rel="noreferrer">
              <h3>CoolMine.top (ARRR)</h3>
            </a>
          </div>
          <div className="col-3">
            <a href={ zanziURL } target="_blank" rel="noreferrer">
              <h3>Zanzi</h3>
            </a>
          </div>
          <div className="col-1">
            <button className="btn btn-secondary" id="cmReload" onClick={ () => reload() }>Refresh</button>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <iframe title="CoolMine" id="coolmine" src={ coolmineURL }></iframe>
        </div>
      </div>
    </div>
  </>); 
}

export default CoolMine;
