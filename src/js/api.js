import axios from 'axios';

export async function fetchReviews() {
  const BASE_URL = 'https://portfolio-js.b.goit.study';
  const END_POINT = '/api';
  const url = `${BASE_URL}${END_POINT}/reviews`;

  const response = await axios.get(url);
  return response.data;
}

export async function sendRequest(email, comment) {
  const BASE_URL = 'https://portfolio-js.b.goit.study';
  const END_POINT = '/api';
  const url = `${BASE_URL}${END_POINT}/requests`;

  const data = {
    email,
    comment,
  };
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const response = await axios.post(url, data, { headers });
  return response.data;
}
