import { initializeAxios } from '@/api/axios';
import { useState } from 'react';

type PopulationData = {
  index: string;
  data: Object;
};

const usePopulationList = () => {
  let [populationList, setPopulationList] = useState<PopulationData[]>([]);
  const fetchPopulationList = async (prefectureList: string[]) => {
    let populationDataList = [];
    for (const prefecture of prefectureList) {
      const population = await initializeAxios().get(
        '/population/composition/perYear',
        {
          params: {
            prefCode: prefecture,
          },
        },
      );
      const populationData = {
        index: prefecture,
        data: population.data.result.data,
      };
      populationDataList.push(populationData);
    }
    setPopulationList(populationDataList);

    return populationList;
  };
  return { populationList, fetchPopulationList };
};

export default usePopulationList;
