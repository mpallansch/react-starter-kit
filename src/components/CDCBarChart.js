import 'react-app-polyfill/ie11';
import React, { useContext } from 'react';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';
import Context from '../context';

export default function CDCBarChart() {
  const { pageContext } = useContext(Context);

  return (
    <BarChart width={730} height={250} data={pageContext.data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
}
