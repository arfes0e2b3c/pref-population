import { Prefecture } from '@/types/types';
import { supplyStrokeColor } from '@/utils/colors';
import { FC } from 'react';
import { LineChart, Line, Legend, XAxis, YAxis, Tooltip } from 'recharts';
import { populationChart } from './styles/populationChart.css';
type Population = any;
type PopulationChartProps = {
  populationList: Population[];
  prefectureList: Prefecture[];
};
export const PopulationChart: FC<PopulationChartProps> = ({
  populationList,
  prefectureList,
}) => {
  return (
    <div className={populationChart}>
      <LineChart width={800} height={400} margin={{ top: 50, right: 50 }}>
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
        <Tooltip label={'year'} />
      </LineChart>
    </div>
  );
};
