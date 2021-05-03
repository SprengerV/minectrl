import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const ethURL = 'https://api.ethermine.org';
const ethMinerURL = ethURL + '/miner/' + process.env.REACT_APP_ETH_ADDR;
const ltcURL = 'https://litecoinpool.org/api';
const ltcMinerURL = ltcURL + '?api_key=' + process.env.REACT_APP_LTC_API_KEY;

const poolAPI = {
  ethermine: () => {
    return axios.get(ethMinerURL + '/dashboard');
  },
  ltcPool: () => {
    return axios.get(ltcMinerURL);
  } 
};

export default poolAPI;
