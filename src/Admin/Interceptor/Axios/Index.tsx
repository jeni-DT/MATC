import axios from "axios";


export const newAxios=axios.create({
    baseURL: 'http://localhost:5000/',
})


const reqInterceptor = newAxios.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('access_tocken');
        config.headers = {
            'x-access_token': `${token}`,
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
createAxiosResponseInterceptor();
function createAxiosResponseInterceptor() {
    newAxios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (
          error.response.data.message ===
          'Unauthorized! Access Token was expired!'
        ) {
          console.log('test');
  
          newAxios.interceptors.response.eject(reqInterceptor);
  
          return axios
            .post('http://localhost:5000/auth/refresh', undefined, {
              headers: {
                'x-access-token': `${localStorage.getItem('refresh_token')}`,
              },
            })
            .then((response) => {
              console.log('ref res', response);
              console.log('changing token', response.data);
              localStorage.setItem('access_token', response.data.data.token);
              localStorage.setItem(
                'refresh_token',
                response.data.data.refreshToken
              );
              error.response.config.headers['x-access-token'] =
                localStorage.getItem('access_token');
              return axios(error.response.config);
            })
            .catch((error) => {
              console.log('ref error', error);
              if (error.response.data.status === 'Refresh token expired') {
                localStorage.clear();
                window.location.pathname = '/login';
                return error.response.data;
              }
  
              return Promise.reject(error);
            })
            .finally(createAxiosResponseInterceptor);
        }
        return Promise.reject(error);
      }
    );
  }