import React, { Component } from "react";
import echarts from "echarts";
class EchartsDemo extends Component {
  state = {};
  componentDidMount() {
    var myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    myChart.setOption({
      tooltip: {},
      legend: {
        orient: "vertical",
        left: "right",
        data: ["4k-6k", "6k-8k", "8k-10k", "10k-15k", "15k-20k", "20k-30k"]
      },
      series: [
        {
          name: "薪资待遇",
          type: "pie",
          radius: ["40%", "80%"],
          center: ["50%", "60%"],
          data: [
            { value: 3.9, name: "4k-6k" },
            { value: 18.8, name: "6k-8k" },
            { value: 18.8, name: "8k-10k" },
            { value: 41.1, name: "10k-15k" },
            { value: 10.9, name: "15k-20k" },
            { value: 6.5, name: "20k-30k" }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },
          color: [
            "#ea5541",
            "#44bdcf",
            "#2f4554",
            "#61a0a8",
            "#91c7ae",
            "#749f83"
          ]
        }
      ]
    });
  }
  render() {
    return <div id="main" style={{ width: 600, height: 500 }} />;
  }
}

export default EchartsDemo;
