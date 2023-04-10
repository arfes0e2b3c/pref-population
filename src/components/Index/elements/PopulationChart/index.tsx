import { Prefecture } from '@/types/types';
import { supplyStrokeColor } from '@/utils/colors';
import { FC, useState } from 'react';
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
  strokeColor,
  tooltipItem,
  tooltipLabel,
} from './styles/populationChart.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ModeButtonList } from './elements/ModeButtonList';
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
    payload.sort((a, b) => {
      return a.value < b.value ? 1 : -1;
    });
    return (
      <div className={customTooltip}>
        <p className={tooltipLabel}>{label}</p>
        {payload.map(item => {
          return (
            <p
              className={tooltipItem}
              key={item.name}
              style={assignInlineVars({
                [strokeColor]: item.color,
              })}
            >
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
  const [currentMode, setCurrentMode] = useState<number>(0);
  return (
    <div className={populationChart}>
      <ModeButtonList
        currentMode={currentMode}
        setCurrentMode={setCurrentMode}
      />
      <ResponsiveContainer width='100%' height={300}>
        <LineChart margin={{ top: 10, left: 10, right: 20 }}>
          {populationList &&
            populationList.map(population => {
              return (
                <Line
                  data={population['data'][currentMode]['data']}
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
