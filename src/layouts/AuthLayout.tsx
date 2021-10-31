import { Layout } from "antd";
import React from "react";

const { Footer, Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Content>{children}</Content>
      <Footer>Maximov & Ismagulov ©2021</Footer>
    </Layout>
  );
};

export default AuthLayout;
