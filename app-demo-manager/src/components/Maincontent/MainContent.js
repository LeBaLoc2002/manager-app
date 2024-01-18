import React, { useEffect, useState } from 'react';
import { Layout, Button, Row, Col, Card, Spin ,Image} from 'antd';
import './MainContent.scss';
import SiderLayout from '../Layouts/Sidebar/Sidebar';
import HeaderLayout from '../Layouts/Header/Header';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Overlay from '../Layouts/Overlay/Overlay';
import { useDispatch, useSelector } from 'react-redux';
import { selectCocktail, setCocktail } from '../../app/features/cocktailSlice';
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import CardSearch from '../Layouts/CardSearch/CardSearch';
import { toast } from 'react-toastify';

const { Content } = Layout;

const MainContent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { searchResults } = useSelector(selectCocktail);

  const { data: cocktailsData, isLoading, isError } = useQuery({
    queryKey: 'cocktails',
    queryFn: async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL_GET_LIST}`);
        dispatch(setCocktail(response.data.drinks));
        return response.data.drinks;
      } catch (error) {
        console.log(error);
        toast.error('Error fetching data', error, {
          autoClose: 500,
        });
      }
    },
  });
  


  useEffect(() => {
    queryClient.invalidateQueries({queryKey: ['cocktails']});
  });


  return (
    <Layout>
      <SiderLayout collapsed={!collapsed} />
      <Layout>
        <HeaderLayout collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '85px 16px 0',
            maxHeight: '100%',
            maxWidth: '100%',
            position: 'relative',
            padding: '10px',
          }}
        > 
        <Overlay showOverlay={collapsed} onClick={() => setCollapsed(collapsed)} />
          {isLoading && <Spin size="large" />}
          {isError && <p>Error fetching cocktails</p>}
           {!isLoading &&!isError && (
          <CardSearch />
          )}
          {!isLoading && !isError && (
            <Row gutter={16}>
            {searchResults.length > 0
              ? searchResults.map((cocktail, index) => (
                  <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6} className='colCard'>
                    <Card className='cardId size-16 '
                      title={`Product ${cocktail.idDrink}`}
                      bordered={false}
                    >
                      <Image className='scale-50 image-card ' sizes='small' src={`${cocktail.strDrinkThumb}`} />
                      <p><strong>Name:</strong> {cocktail.strDrink}</p>
                      <p><strong>Category:</strong> {cocktail.strCategory}</p>
                      <div className='action-buttons'>
                        <Button type="primary" ghost><EditOutlined /></Button>
                        <Button danger><DeleteOutlined /></Button>
                      </div>
                    </Card>
                  </Col>
                ))
              : cocktailsData.map((cocktail, index) => (
                  <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6} className='colCard'>
                    <Card className='cardId size-16 '
                      title={`Product ${cocktail.idDrink}`}
                      bordered={false}
                    >
                      <Image className='scale-50 image-card ' sizes='small' src={`${cocktail.strDrinkThumb}`} />
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
