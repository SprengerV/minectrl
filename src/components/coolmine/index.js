import React, { useEffect, useState } from 'react';

function coolmine() {
  const [dash, setDash] = useState({});
  const [count, setCount] = useState(0);
  const [update, setUpdate] = useState('never')

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
            <a href="#!" target="_blank" rel="noreferrer">
              <h3>CoolMine ARRR</h3>
            </a>
          </div>
          <div className="col-3">
            <h4>Workers:</h4>
            <p>num</p>
          </div>
          <div className="col-3">
            <h4>Current Hashrate:</h4>
            <p>num</p>
          </div>
          <div className="col-3">
            <h4>Unpaid Balance:</h4>
            <p>num</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">

        </div>  
      </div>  
    </div>  
  )  
}
