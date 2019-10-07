import React from "react";
import "./index";
import zhCN from "antd/es/locale/zh_CN";
import {
  Button,
  ConfigProvider,
  DatePicker,
  Pagination,
  Skeleton,
  Switch,
  List,
  Avatar,
  Icon
} from "antd";
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}
class App_antd extends React.Component {
  state = {
    loading: true
  };
  onchange = (current1, pageSize) => {
    console.log(current1, pageSize);
  };
  showSizeChange = (current, size) => {
    console.log(current, size);
  };
  onChange = checked => {
    this.setState({ loading: !checked });
  };
  render() {
    const myConfig = {
      autoInsertSpaceInButton: false,
      locale: zhCN
    };
    const { loading } = this.state;
    return (
      <ConfigProvider {...myConfig}>
        <div className="App">
          <h1>React UI</h1>
          <Button type="primary">默认按钮</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
          <div>
            <DatePicker />
          </div>
          <Pagination
            pageSizeOptions={["10", "20", "30", "40"]}
            hideOnSinglePage
            showSizeChanger
            total={100}
            style={{ margin: "10px" }}
            onChange={this.onchange}
            onShowSizeChange={this.showSizeChange}
          />
          <Skeleton
            active
            paragraph={{ rows: 2, width: [200, 300] }}
            avatar
            title={false}
          />
          <div>
            <Switch checked={!loading} onChange={this.onChange} />
            <List
              itemLayout="vertical"
              size="large"
              dataSource={listData}
              renderItem={item => (
                <List.Item
                  key={item.title}
                  actions={
                    !loading && [
                      <IconText type="star-o" text="156" />,
                      <IconText type="like-o" text="156" />,
                      <IconText type="message" text="2" />
                    ]
                  }
                  extra={
                    !loading && (
                      <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                    )
                  }
                >
                  <Skeleton loading={loading} active avatar>
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </Skeleton>
                </List.Item>
              )}
            />
          </div>
        </div>
      </ConfigProvider>
    );
  }
}

export default App_antd;
