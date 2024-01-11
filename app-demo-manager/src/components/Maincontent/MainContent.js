import React, { useState } from 'react';
import { Layout, Table, theme, Button } from 'antd';
import './MainContent.scss';
import SiderLayout from '../Layouts/Sidebar/Sidebar';
import HeaderLayout from '../Layouts/Header/Header';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Overlay from '../Layouts/Overlay/Overlay'; 

const { Content } = Layout;

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: () => (
      <span className='action-buttons'>
        <Button  type="primary" ghost><EditOutlined  /></Button>
        <Button   danger>
        <DeleteOutlined />
        </Button>
      </span>
    ),
    colSpan: 2, 
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    action: 'delete',
  },
  {
    key: '2',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    action: 'delete',
  },
  {
    key: '3',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    action: 'delete',
  },
];

const MainContent = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const tableHeader = () => (
    <div className='text-left'>
      <h3>Table test</h3>
    </div>
  );

  return (
    <Layout>
      <SiderLayout collapsed={collapsed} />
      <Layout>
        <HeaderLayout collapsed={collapsed} setCollapsed={setCollapsed} />
        <Overlay showOverlay={!collapsed} onClick={() => setCollapsed(!collapsed)} />
        <Content
          style={{
            margin: '85px 16px 0',
            maxHeight: '100%',
            maxWidth: '100%',
            position: 'relative',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              zIndex: 1,
              
            }}
          >
            <Table
              title={tableHeader}
              columns={columns}
              dataSource={data}
              size="middle"
              scroll={{ x: true }}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainContent;
