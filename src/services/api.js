import axios from 'axios'
import { APP_URL } from '../helpers/env'

const api = axios.create({
  baseURL: APP_URL
});

export default api;