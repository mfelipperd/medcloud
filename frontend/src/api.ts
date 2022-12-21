import axios from 'axios';

const api = axios.create({
	// eslint-disable-next-line @typescript-eslint/naming-convention
	baseURL: 'http://18.228.26.120:3333',
});

export default api;
