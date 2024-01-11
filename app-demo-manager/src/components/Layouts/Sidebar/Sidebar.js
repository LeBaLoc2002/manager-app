import React from 'react';
import { Menu } from 'antd';
import { Layout } from 'antd';

import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
const { Sider } = Layout;

const items = [
  { key: '1', icon: <UserOutlined />, label: 'Your Label 1' },
  { key: '2', icon: <VideoCameraOutlined />, label: 'Your Label 2' },
  { key: '3', icon: <UploadOutlined />, label: 'Your Label 3' },
  { key: '4', icon: <UserOutlined />, label: 'Your Label 4' },
];

const SiderLayout = ({ collapsed }) => {
  return (
    <Sider className='sidebar' trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
        {items.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SiderLayout;
