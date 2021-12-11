import { Layout } from "antd";
import { Header } from "antd/lib/layout/layout";

import React from "react";
import Navbar from "../components/Navbar";

const { Footer, Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content>{children}</Content>
      <Footer>Maximov & Ismagulov ©2021</Footer>
    </Layout>
  );
};

export default AuthLayout;
