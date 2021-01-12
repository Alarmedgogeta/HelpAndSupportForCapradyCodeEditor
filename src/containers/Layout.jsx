import React from 'react';
import { Layout as AntLayout } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';

const layoutStyle = {
  minHeight: '100vh',
};

const contentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Layout = ({ children }) => (
  <AntLayout className='layout' style={layoutStyle}>
    <Header />
    <AntLayout.Content style={contentStyle}>
      { children }
    </AntLayout.Content>
    <Footer />
  </AntLayout>
);

export default Layout;
