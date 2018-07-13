import axios from 'axios';
import query from 'querystring';

if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = '/api';
}

/* 拦截器 -- 请求拦截 */
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

/* 拦截器 -- 响应拦截 */
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

const $axios = function (method, url, data) {
	if (method == 'get') {
		return axios.get(url, {
      params: data
    }) 
	}else if (method == 'post') {
		return axios.post(url, query.stringify(data));
	}
}

export default $axios;