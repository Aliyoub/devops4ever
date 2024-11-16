// components/ProgressChart.tsx

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { scoresData } from '../../app/dashboard/scoresData';

// interface ProgressChartProps {
//   theme: string;
// }


interface ProgressChartProps {
    theme: string;
  }
  
  const ProgressChart = ({ theme }: ProgressChartProps) => {

// const ProgressChart: React.FC<ProgressChartProps> = ({ theme }) => {
//   const data = scoresData[theme];
  const data: any = scoresData[Number(theme)];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart style={{colo:'red'}} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tick={{ fill: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }} />
        <YAxis tick={{ fill: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="score"
          stroke="#3B8FEF"
          strokeWidth={2}
          dot={{ fill: '#FCA4F0', r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ProgressChart;
