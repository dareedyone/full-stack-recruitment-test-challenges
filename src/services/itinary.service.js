import axios from 'axios';

const baseUrl = '/itineraries';

const get = () => axios.get(baseUrl).then(res => res.data);

export default { get };
