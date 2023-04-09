import { FC } from 'react';
import PrefList from './elements/PrefList';
import usePopulationList from './hooks/populationListHooks';
import { PopulationChart } from './elements/PopulationChart';
import { Prefecture } from '@/types/types';

type Props = {
  prefectureList: Prefecture[];
};

export const Index: FC<Props> = ({ prefectureList }) => {
  let { populationList, fetchPopulationList } = usePopulationList();
  return (
    <>
      <PrefList
        prefectureList={prefectureList}
        onChange={checkedList => fetchPopulationList(checkedList)}
      />
      <PopulationChart
        populationList={populationList}
        prefectureList={prefectureList}
      />
    </div>
  );
};
