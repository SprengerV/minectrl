import react, { useEffect, useState } from 'react';

function Worker(props) {
  const [data, setData] = useState(props.data);

  useEffect((prevProps) => {
    if (prevProps !== props) {
      setData(props.data);
    }
  }, [props]);

  return (<>
    <div className="col-3">
      <h4>Worker:</h4>
      <p>none</p>
    </div>
    <div className="col-3">
      <h4>Current Hashrate:</h4>
      <p>0</p>
    </div>
    <div className="col-3">
      <h4>Unpaid Balance</h4>
    </div>
  </>);
}

export default Worker;
