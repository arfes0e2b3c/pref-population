import { initializeAxios } from '@/api/axios';

type Prefecture = {
  prefCode: string;
  prefName: string;
};

export const usePrefectureList = async (): Promise<Prefecture[]> => {
  const prefectureList = await initializeAxios()
    .get('/prefectures')
    .then(response => {
      return response.data.result;
    });

  return prefectureList;
};
