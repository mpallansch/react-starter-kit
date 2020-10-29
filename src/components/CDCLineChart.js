import 'react-app-polyfill/ie11';
import React, { useContext } from 'react';
import {
  LineChart,
  Line
} from 'recharts';
import Context from '../context';

export default function CDCLineChart() {
  const { pageContext } = useContext(Context);

  return (
    <LineChart width={400} height={400} data={pageContext.data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
}
