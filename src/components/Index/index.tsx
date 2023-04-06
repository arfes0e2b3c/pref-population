import { VFC } from 'react';
import PrefList from './elements/PrefList';

type Prefecture = {
  prefCode: number;
  prefName: string;
};
type Props = {
  prefectures: Prefecture[];
};
export const Index: VFC<Props> = ({ prefectures }) => {
  return (
    <>
      <PrefList prefectures={prefectures} />
    </>
  );
};
