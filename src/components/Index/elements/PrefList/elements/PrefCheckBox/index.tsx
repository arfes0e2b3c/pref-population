import { FC, useState } from 'react';
import {
  checkbox,
  checkboxLabel,
  checkboxLabelBox,
  clicked,
  disable,
} from './styles/prefCheckBox.css';

type Prefecture = {
  prefCode: string;
  prefName: string;
};

type PrefCheckBoxProps = {
  pref: Prefecture;
  onChange: (prefCode: string, checked: boolean) => void;
};

const PrefCheckBox: FC<PrefCheckBoxProps> = ({ pref, onChange }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={[isClicked ? clicked : '', checkbox].join(' ')}>
      <input
        type='checkbox'
        id={pref.prefCode}
        onChange={e => {
          setIsClicked(e.target.checked);
          onChange(pref.prefCode, e.target.checked);
        }}
        className={disable}
      />
      <div className={checkboxLabelBox}>
        <label className={checkboxLabel} htmlFor={pref.prefCode}>
          {pref.prefName}
        </label>
      </div>
    </div>
  );
};

export default PrefCheckBox;
