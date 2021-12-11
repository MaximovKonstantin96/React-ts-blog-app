import { Layout } from "antd";
import React, { FC } from "react";
import AppRouter from "./components/AppRouter";

import "./App.css";

const App: FC = () => {
  return (
    <div>
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
};

export default App;
