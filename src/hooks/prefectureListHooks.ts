import { initializeAxios } from '@/api/axios';
import { Prefecture } from '@/types/types';

export const fetchPrefectureList = async (): Promise<Prefecture[]> => {
  const prefectureList = await initializeAxios()
    .get('/prefectures')
    .then(response => {
      return response.data.result;
    });

  return prefectureList;
};
