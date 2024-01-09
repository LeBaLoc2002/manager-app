import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Divider, Layout, Menu, Table, theme } from 'antd';
import './MainContent.scss'
const { Header, Content, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);
const columns = [
  {
    title: 'name' ,
    dataIndex:'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }
]
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider className='sidebar' breakpoint="lg"
        collapsedWidth="0">
        <div className="demo-logo-vertical" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header 
          style={{
            padding: 0,
            background: colorBgContainer,
            position: 'fixed',
            top:0,
            zIndex: 1,
            width: '100%',
            display:'flex',
            alignItems:'center',
          }}
        />
        <Content
          style={{
            margin: '85px 16px 0',
            maxHeight:'100%',
            maxWidth:'100%'
          }}
        >

          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
           <Divider>Middle size table</Divider>
            <Table columns={columns} dataSource={data} size="middle" />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;