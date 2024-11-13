// components/SkillBreakdown.tsx

import React from 'react';
// import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { scoresData } from '../../app/dashboard/scoresData';

const breakdownData = [
  { name: 'Docker', score: 72 },
  { name: 'Kubernetes', score: 78 },
  { name: 'Terraform', score: 68 },
  { name: 'Aws', score: 72 },
  { name: 'Git', score: 78 },
  { name: 'shell', score: 68 },
  { name: 'Prometheus', score: 72 },
  { name: 'Grafana', score: 78 },
  { name: 'Python', score: 68 },
  { name: 'Docker', score: 72 },
  { name: 'Azure', score: 78 },
  { name: 'GPC', score: 68 },
];

const SkillBreakdown: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={breakdownData}>
        <XAxis dataKey="name" tick={{ fill: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }} />
        <YAxis tick={{ fill: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }} />
        <Tooltip />
        <Bar dataKey="score" fill="url(#colorGradient)" />
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            {/* <stop offset="0%" /> */}
            {/* <stop offset="100%" /> */}
            <stop offset="0%" stopColor="#3B8FEF" />
            <stop offset="100%" stopColor="#3B8FEF" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SkillBreakdown;
