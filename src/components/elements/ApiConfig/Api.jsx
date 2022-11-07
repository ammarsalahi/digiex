import axios from 'axios';
import { BASE_URL } from './Endpoints';

const Api =axios.create({
  baseURL: BASE_URL
});

export default Api;
