import { FC, useEffect, useState } from 'react';
import PrefCheckBox from './elements/PrefCheckBox';
import { prefList } from './styles/prefList.css';

type Prefecture = {
  prefCode: string;
  prefName: string;
};
type Props = {
  prefectureList: Prefecture[];
  onChange: (checkedList: string[]) => void;
};

const PrefList: FC<Props> = ({ prefectureList, onChange }) => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  useEffect(() => {
    onChange(checkedList);
  }, [checkedList]);
  return (
    <div className={prefList}>
      {prefectureList.map(pref => {
        return (
          <PrefCheckBox
            key={pref.prefCode}
            pref={pref}
            onChange={(prefCode, checked) => {
              if (checked) {
                setCheckedList([...checkedList, prefCode]);
              } else {
                setCheckedList(checkedList.filter(check => check !== prefCode));
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default PrefList;
