import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const ethURL = 'https://api.ethermine.org';
const ethMinerURL = ethURL + '/miner/' + process.env.REACT_APP_ETH_ADDR;
const ltcURL = 'https://litecoinpool.org/api';
const ltcMinerURL = ltcURL + '?api_key=' + process.env.REACT_APP_LTC_API_KEY;
const arrrURL = '';
const arrrMinerURL = arrrURL + '';

const poolAPI = {
  ethermine: function() {
    return axios.get(ethMinerURL + '/dashboard');
  },
  ltcPool: function() {
    return axios.get(ltcMinerURL);
  },
  coolmine: function() {
    return axios.get(arrrMinerURL);
  }  
};

export default poolAPI;
