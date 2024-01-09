import React from 'react';
import { Layout, theme } from 'antd';
import './MainContent.scss'


const HeaderLayout = () => {
  const { Header  } = Layout;

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return(
    <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: 'fixed',
            top:0,
            zIndex: 1,
            width: '100%',
            display:'flex',
            alignItems:'center'
          }}
        />
  )
}
export default HeaderLayout;