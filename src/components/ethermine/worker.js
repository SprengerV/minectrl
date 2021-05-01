import React, { useEffect, useState } from 'react';
import conv from '../../utils/conversion';

function Worker(props) {
  const { hToMh } = conv;
  const [worker, setWorker] = useState({});

  useEffect((prevProps) => {
    if (prevProps === props) return
    setWorker(props.data);
  }, [props]);

  return (
    <div className="col-3 container d-flex flex-column">
      <h5 className="text-center">{ worker.worker }</h5>
      <p>Current Hashrate: { hToMh(worker.currentHashrate) } Mh/s</p>
      <p>
        Valid Shares: <span className="valid">{ worker.validShares }</span>
      </p>
      <p>
        Invalid Shares: <span className="invalid">{ worker.invalidShares }</span>
      </p>
      <p>
        Stale Shares: { worker.staleShares }
      </p>
    </div>  
  )  
}

export default Worker;
