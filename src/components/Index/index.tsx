import { FC } from 'react';
import PrefList from './elements/PrefList';
import usePopulationList from './hooks/populationListHooks';

type Prefecture = {
  prefCode: number;
  prefName: string;
};
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
    </>
  );
};
