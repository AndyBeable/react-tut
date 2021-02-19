import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID -j-8oX9o9BwflBq3h2ux89rqPBYacpYB0B121EW4cDE',
  },
});
