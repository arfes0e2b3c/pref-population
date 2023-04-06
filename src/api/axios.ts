import axios from 'axios';

function initializeAxios() {
  return axios.create({
    baseURL: 'https://opendata.resas-portal.go.jp/api/v1',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.RESAS_API_KEY,
    },
  });
}

export class GetAllPrefectures {
  async handler() {
    const prefectureList = await initializeAxios()
      .get('/prefectures')
      .then(response => {
        return response.data.result;
      });
    return prefectureList;
  }
}
