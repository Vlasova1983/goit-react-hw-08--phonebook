import axios from 'axios';

export const privateApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set: (data) => {   
    privateApi.defaults.headers.Authorization =`${data.token}` ;
  },

  remove: () => {
    privateApi.defaults.headers.Authorization = null;
  },
};