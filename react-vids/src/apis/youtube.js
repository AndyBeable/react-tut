import axios from 'axios';

const KEY = 'AIzaSyBDzUxe1iVpOtrnvUls9Fu-O-_61WCBBXE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
