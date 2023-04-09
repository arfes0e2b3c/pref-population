import { Prefecture } from '@/types/types';
import { supplyStrokeColor } from '@/utils/colors';
import { FC } from 'react';
import {
  LineChart,
  Line,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  customTooltip,
  populationChart,
  tooltipLabel,
} from './styles/populationChart.css';
type Population = any;
type PopulationChartProps = {
  populationList: Population[];
  prefectureList: Prefecture[];
};
type CustomTooltipProps = {
  active: boolean;
  payload: any[];
  label: number;
};
const CustomTooltip: FC<CustomTooltipProps> = ({ active, payload, label }) => {
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
      <ResponsiveContainer width='100%' height={300}>
        <LineChart margin={{ top: 10, left: 10, right: 20 }}>
          {populationList &&
            populationList.map(population => {
              return (
                <Line
                  data={population['data'][0]['data']}
                  key={population['index']}
                  type='basis'
                  dataKey='value'
                  legendType='plainline'
                  dot={{ stroke: 'gray', strokeWidth: 4 }}
                  activeDot={{ stroke: 'white', r: 5 }}
                  stroke={supplyStrokeColor(population['index'])}
                  strokeWidth={1.5}
                  name={prefectureList[population['index'] - 1].prefName}
                />
              );
            })}
          <Legend
            height={20}
            layout='horizontal'
            align='center'
            verticalAlign='bottom'
          />
          <XAxis
            type='number'
            dataKey='year'
            domain={[1960, 2045]}
            tickCount={8}
            stroke='#ddd'
          />
          <YAxis
            stroke='#ddd'
            tickCount={5}
            tickFormatter={population => population / 10000 + '万'}
          />
          <Tooltip
            content={<CustomTooltip active={false} payload={[]} label={0} />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
