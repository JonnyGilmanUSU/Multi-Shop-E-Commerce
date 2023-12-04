import axios from 'axios';


const axiosInstance = axios.create({
	// Configuration
	baseURL: 'https://gilman-multi-shop-default-rtdb.firebaseio.com',
	headers: {
		'Content-Type': 'application/json'
	}
});

export default axiosInstance;

