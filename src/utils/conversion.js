const conversion = {
  hToMh: (hs) => {
    const Mhs = hs/1000000;
    return Mhs.toFixed(1);
  },
  satToEth: (sat) => {
    const eth = sat/Math.pow(10, 18);
    return eth.toFixed(5);
  }
}

export default conversion;
