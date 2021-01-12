import React from 'react';
import { Layout, Divider } from 'antd';

const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
};

const Footer = () => (
  <Layout.Footer style={footerStyle}>
    <p>Alan Diaz Yañez</p>
    <Divider type='vertical' />
    <p>
      Github:
      <a href='https://github.com/Alarmedgogeta'>@Alarmedgogeta</a>
    </p>
  </Layout.Footer>
);

export default Footer;
