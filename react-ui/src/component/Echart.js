import React, { Component } from "react";
import echarts from "echarts";
class Echart extends Component {
  state = {
    data: [
      { value: 335, name: "直接访问" },
      { value: 310, name: "邮件营销" },
      { value: 234, name: "联盟广告" },
      { value: 135, name: "视频广告" },
      { value: 1548, name: "搜索引擎" }
    ]
  };
  componentDidMount() {
    this.myChart = echarts.init(document.getElementById("main"));
    this.updateChart(this.state.data);
  }
  updateChart(data) {
    this.myChart.setOption({
      legend: {
        orient: "vertical",
        left: "left",
        data: data.map(item => item.name)
      },
      tooltip: {},
      yAxis: {},
      series: [
        {
          name: "薪资待遇",
          type: "pie",
          radius: ["40%", "80%"],
          center: ["50%", "60%"],
          data: data.map(item => {
            return {
              value: data.value,
              name: data.name
            };
          }),
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });
  }
  // 绘制图表
  add = () => {
    this.setState({
      data: [...this.state.data, { value: 1548, name: "搜索引擎" }]
    });
  };
  componentDidUpdate(prevProps, prevState) {}
  render() {
    return (
      <div>
        <button onClick={this.add}> 添加一个数据</button>
        <div id="main" style={{ width: 400, height: 400 }} />
      </div>
    );
  }
}

export default Echart;
