import React, { useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  DatePicker,
  message,
  Alert,
  Input,
  Select,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import {Increment, Decrement} from './actions/index'


const { Header, Content, Sider } = Layout;

const { Option } = Select;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const App = () => {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };
  const initialState = useSelector((state)=>state.handleNumber)
  const dispatch = useDispatch()
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {/* <div style={{ width: 400, margin: "100px auto" }}>
              <DatePicker onChange={handleChange} />
              <div style={{ marginTop: 16 }}>
                <Alert
                  message="Selected Date"
                  description={date ? date.format("YYYY-MM-DD") : "None"}
                />
              </div>
            </div> */}
            <div
              style={{ width: 400, margin: "100px auto", textAlign: "center" }}
            >
              <a onClick={()=>dispatch(Increment())}>
                <PlusCircleOutlined
                  style={{ fontSize: "40px", padding: "10px" }}
                />
              </a>
              <Input status="error" placeholder="Error" name="total" value={initialState} />
              <a onClick={()=>dispatch(Decrement())}>
                <MinusCircleOutlined
                  style={{ fontSize: "40px", padding: "10px" }}
                />
              </a>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
