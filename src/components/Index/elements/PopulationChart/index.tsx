import { Prefecture } from '@/types/types';
import { supplyStrokeColor } from '@/utils/colors';
import { FC } from 'react';
  customTooltip,
type Population = any;
type PopulationChartProps = {
  populationList: Population[];
  prefectureList: Prefecture[];
};
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={customTooltip}>
        <p className={tooltipLabel}>{label}</p>
        {payload.map(item => {
          return (
            <p key={item.name} style={{ color: supplyStrokeColor(item.color) }}>
              {item.name}
              {item.name.length !== 4 ? '　' : ''}：{item.value}
            </p>
          );
        })}
      </div>
    );
  }

  return null;
};
export const PopulationChart: FC<PopulationChartProps> = ({
  populationList,
  prefectureList,
}) => {
  return (
    <div className={populationChart}>
          <Tooltip content={<CustomTooltip />} />
    </div>
  );
};
