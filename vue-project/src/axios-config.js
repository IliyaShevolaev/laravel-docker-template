import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8001',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default instance;
