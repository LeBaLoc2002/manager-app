import React, { useEffect, useState } from 'react';
import { Layout, Button, Row, Col, Card, Spin } from 'antd';
import './MainContent.scss';
import SiderLayout from '../Layouts/Sidebar/Sidebar';
import HeaderLayout from '../Layouts/Header/Header';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Overlay from '../Layouts/Overlay/Overlay';
import { useDispatch, useSelector } from 'react-redux';
import { setCocktail, selectCocktail } from '../../app/features/cocktailSlice';
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const { Content } = Layout;

const MainContent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const cocktails = useSelector(selectCocktail);
  const queryClient = useQueryClient();

  const { data: cocktailsData, isLoading, isError } = useQuery({
    queryKey:'cocktail',
    queryFn: async () => {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b');
      dispatch(setCocktail(response.data.drinks));
      return response.data.drinks;
      },
    }
  );

  useEffect(() => {
    queryClient.invalidateQueries('cocktails');
  }, [cocktails, queryClient]);

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
          {isLoading && <Spin size="large" />}
          {isError && <p>Error fetching cocktails</p>}
          {!isLoading && !isError && (
            <Row gutter={16}>
              {cocktailsData.map((cocktail, index) => (
                <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
                  <Card
                    title={`Cocktail ${index + 1}`}
                    bordered={false}
                    style={{ marginBottom: 16 }}
                  >
                    <p><strong>Name:</strong> {cocktail.strDrink}</p>
                    <p><strong>Category:</strong> {cocktail.strCategory}</p>
                    <div className='action-buttons'>
                      <Button type="primary" ghost><EditOutlined /></Button>
                      <Button danger><DeleteOutlined /></Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainContent;
