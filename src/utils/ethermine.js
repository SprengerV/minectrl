import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const baseURL = 'https://api.ethermine.org'
const minerURL = baseURL + '/miner/' + process.env.REACT_APP_ETH_ADDR

const ethermine = () => {
  return axios.get(minerURL + '/dashboard');
};

export { ethermine as ethermine }
