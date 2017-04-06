import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = () => {
  console.log('in actions-----s\n');
  axios({
    headers: {'Content-Type': 'application/json'},
    url: `https://93rv7lowc0.execute-api.us-west-2.amazonaws.com/dev/app/login`,
    data: {
      app: 'facilities',
      userid: 'xenio-demo',
      password: 'xenio1234',
    },
  })
    .catch((err) => {
      throw err;
    })
    .then((err, data) => {
      if (err) {
        throw err;
      }
      if (data) {
        console.log('------\n', data);
      }
    });
  return 'haha';
}

/*
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  console.log('haha---\n');
  const lol = axios.get(`http://localhost:8000/haha`);
  console.log('lol---\n', lol);
  axios.get(`http://localhost:8000/haha`)
    .then((data) => {
      console.log('data----\n', data);
    });
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POSTS,
    payload: request,
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request,
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request,
  }
}
*/
