import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import logo from '../assets/static/logo.jpg';
import '../assets/styles/components/Header.css';

const Header = () => (
  <Layout.Header>
    <div className='logo'>
      <Link to='/'><img src={logo} alt='Logo' /></Link>
    </div>
    <Menu theme='dark' mode='horizontal'>
      <Menu.Item key='1'>
        <Link to='/GetStarted'>Para comenzar</Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link to='/Tutorials'>Tutoriales</Link>
      </Menu.Item>
      <Menu.Item key='3'>
        <Link to='/LanguajesReferences'>Referencias de otros lenguajes</Link>
      </Menu.Item>
      <Menu.Item key='4'>
        <Link to='/About'>Acerca de</Link>
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

export default Header;
