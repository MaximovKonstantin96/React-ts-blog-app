import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/register">Register</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default HomePage;
