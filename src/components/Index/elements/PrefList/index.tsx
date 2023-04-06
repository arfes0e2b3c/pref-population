import { useState } from 'react';
import PrefCheckBox from './elements/PrefCheckBox';
const PrefList = ({ prefectures }) => {
  const [checkedList, setCheckedList] = useState([]);
  return (
    <>
      {prefectures.map(pref => {
        return (
          <PrefCheckBox key={pref.prefCode} pref={pref} onChange={() => {}} />
        );
      })}
    </>
  );
};

export default PrefList;
