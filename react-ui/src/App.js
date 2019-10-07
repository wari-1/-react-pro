import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie
} from "recharts";
import Echart from "./component/Echart";

const App = () => {
  const data = [
    { name1: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name1: "Page B", uv: 300, pv: 2400, amt: 2400 },
    { name1: "Page C", uv: 300, pv: 2400, amt: 2400 },
    { name1: "Page D", uv: 200, pv: 2400, amt: 2400 },
    { name1: "Page E", uv: 278, pv: 2400, amt: 2400 },
    { name1: "Page F", uv: 189, pv: 2400, amt: 2400 }
  ];

  const renderLineChart = (
    <LineChart
      width={600}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#ccc" />
      <CartesianGrid stroke="#000" strokeDasharray="5 5" />
      <XAxis dataKey="name1" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );

  return (
    <div>
      <Echart />
    </div>
  );
};
export default App;
