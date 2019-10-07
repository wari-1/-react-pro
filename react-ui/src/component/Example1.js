import React, { Component } from "react";
import { PieChart, Pie, Sector, Cell, Tooltip, Legend } from "recharts";
class Example1 extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c9pL8k61/";
  state = {
    activeIndex: 0
  };
  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };
  render() {
    const data = [
      {
        name: "4k-6k",
        value: 3.9
      },
      {
        name: "6k-10k",
        value: 18.8
      },
      {
        name: "8k-10k",
        value: 18.8
      },
      {
        name: "10k-15k",
        value: 41.1
      },
      {
        name: "15k-20k",
        value: 10.9
      },
      {
        name: "20k-30k",
        value: 6.5
      }
    ];
    const COLORS = [
      "#ea5541",
      "#44bdcf",
      "#2f4554",
      "#61a0a8",
      "#91c7ae",
      "#749f83"
    ];
    const RADIAN = Math.PI / 180;
    const renderActiveShape = props => {
      const RADIAN = Math.PI / 180;
      const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,

        fill,

        name
      } = props;
      const sin = Math.sin(-RADIAN * midAngle);
      const cos = Math.cos(-RADIAN * midAngle);
      const sx = cx + (outerRadius + 10) * cos;
      const sy = cy + (outerRadius + 10) * sin;
      const mx = cx + (outerRadius + 30) * cos;
      const my = cy + (outerRadius + 30) * sin;
      const ex = mx + (cos >= 0 ? 1 : -1) * 22;
      const ey = my;
      const textAnchor = cos >= 0 ? "start" : "end";

      return (
        <g>
          <path
            d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
            stroke={fill}
            fill="none"
          />
          <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
          <text
            x={ex + (cos >= 0 ? 1 : -1) * 12}
            y={ey}
            textAnchor={textAnchor}
            fill="#333"
          >{` ${name}`}</text>
        </g>
      );
    };
    return (
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          label={renderActiveShape}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend align="right" layout="vertical" />
      </PieChart>
    );
  }
}

export default Example1;
