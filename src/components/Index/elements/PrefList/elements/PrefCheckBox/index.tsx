import { FC, useState } from 'react';
type Prefecture = {
  prefCode: number;
  prefName: string;
};

type PrefCheckBoxProps = {
  pref: Prefecture;
  onChange: (prefCode: String, checked: Boolean) => void;
};

const PrefCheckBox: FC<PrefCheckBoxProps> = ({ pref, onChange }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <input
        type='checkbox'
        id={pref.prefCode}
        onChange={e => {
          setIsClicked(e.target.checked);
          onChange(pref.prefCode, e.target.checked);
        }}
      />
      <label htmlFor={pref.prefCode}>{pref.prefName}</label>
    </div>
  );
};

export default PrefCheckBox;
