import { Layout } from "antd";
import React from "react";

const { Footer, Content, Header } = Layout;

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Maximov & Ismagulov ©2021</Footer>
    </Layout>
  );
};

export default MainLayout;
