import React, { useState, Component } from "react";
import "./index.css";
import { Button, Input, Space } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      collapsed: true,

      list: [
        {
          name: "第1名",
        },
        {
          name: "第2名",
        },
        {
          name: "第3名",
        },
        {
          name: "第4名",
        },
        {
          name: "第5名",
        },
      ],
    };
  }
  setCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  valchange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  addVal = () => {
    this.setState({
      list: [...this.state.list, { name: this.state.inputValue }],
      inputValue: "",
    });
  };
  DelItem = (item, index) => {
    this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list,
    });
  };
  toSetItem = (item) => {
    console.log(item);
  };
  showModal = (index) => {};
  handleOk = (index) => {};
  handleCancel = (index) => {};
  render() {
    return (
      <Layout style={{height:'100%'}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
            }}
          >
            {this.state.collapsed ? (
              <MenuUnfoldOutlined
                className="iconClassStyle"
                onClick={() => {
                  this.setCollapsed();
                }}
              ></MenuUnfoldOutlined>
            ) : (
              <MenuFoldOutlined
                className="iconClassStyle"
                onClick={() => {
                  this.setCollapsed();
                }}
              ></MenuFoldOutlined>
            )}
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
      // <div className="allBody">
      //   <div>
      //     <Space.Compact style={{ width: "50%" }}>
      //       <Input placeholder="请输入内容" value={this.state.inputValue} />
      //       <Button type="primary">Submit</Button>
      //     </Space.Compact>
      //     <input onChange={this.valchange}></input>
      //     <span className="addBtnStyle" onClick={this.addVal}>
      //       添加
      //     </span>
      //   </div>
      //   {this.state.list.map((item, index) => {
      //     return (
      //       <div key={index}>
      //         <div className="allBodyItem" key={item.name}>
      //           {item.name}
      //         </div>

      //         <Button
      //           className="addBtnStyle"
      //           size="small"
      //           type="dashed"
      //           onClick={() => {
      //             this.toSetItem(item);
      //           }}
      //         >
      //           修改
      //         </Button>
      //         <Button
      //           className="addBtnStyle"
      //           size="small"
      //           type="dashed"
      //           danger
      //           onClick={() => this.DelItem(item, index)}
      //         >
      //           删除
      //         </Button>
      //       </div>
      //     );
      //   })}
      // </div>
    );
  }
}
