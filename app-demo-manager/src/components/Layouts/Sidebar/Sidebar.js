import React from 'react';
import { Menu } from 'antd';
import { Layout} from 'antd';

import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
const { Sider} = Layout;

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);

const SiderLayout = ({collapsed}) => {
  return (
    <Sider className='sidebar' trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} items={items} />
    </Sider>
  );
};

export default SiderLayout;