import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Divider, Layout, Menu, Table, theme } from 'antd';
import './MainContent.scss'
import {MenuFoldOutlined,MenuUnfoldOutlined} from '@ant-design/icons';
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
const MainContent = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider className='sidebar'  trigger={null} collapsible collapsed={collapsed} >
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
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
       </Header>

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
export default MainContent;