import axios from 'axios';
const baseUrl = 'http://localhost:3001/legs';

const get = () => axios.get(baseUrl).then(res => res.data);

export default { get };
