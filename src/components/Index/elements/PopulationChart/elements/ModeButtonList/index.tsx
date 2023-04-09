import { modes } from '@/utils/modes';
import { FC } from 'react';
import {
  current,
  modeButton,
  modeButtonList,
} from './styles/modeButtonList.css';

type Props = {
  currentMode: number;
  setCurrentMode: (index: number) => void;
};

export const ModeButtonList: FC<Props> = ({ currentMode, setCurrentMode }) => {
  return (
    <div className={modeButtonList}>
      {modes.map(mode => {
        return (
          <button
            key={mode.index}
            onClick={() => setCurrentMode(mode.index)}
            className={[
              modeButton,
              mode.index == currentMode ? current : '',
            ].join(' ')}
          >
            {mode.label}
          </button>
        );
      })}
    </div>
  );
};
