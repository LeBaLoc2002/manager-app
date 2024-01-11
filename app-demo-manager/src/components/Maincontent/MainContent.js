import React, { useState } from 'react';
import { Layout, Table, theme, Button, Row, Col, Card } from 'antd';
import './MainContent.scss';
import SiderLayout from '../Layouts/Sidebar/Sidebar';
import HeaderLayout from '../Layouts/Header/Header';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Overlay from '../Layouts/Overlay/Overlay'; 
const { Content } = Layout;


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
          <Row gutter={16}>
            {data.map((item) => (
              <Col key={item.key} xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card
                  title={item.name}
                  bordered={false}
                  style={{ marginBottom: 16 }}
                >
                  <p><strong>Age:</strong> {item.age}</p>
                  <p><strong>Address:</strong> {item.address}</p>
                  <div className='action-buttons'>
                    <Button type="primary" ghost><EditOutlined /></Button>
                    <Button danger><DeleteOutlined /></Button>
                  </div>
              </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainContent;
