import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation, withRouter } from "react-router-dom";

const { Header } = Layout;

const HeaderComp: React.FC = () => {
  let location = useLocation();
  console.log(location);

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item
            key="1"
            className={
              location.pathname === "/" ? "ant-menu-item-selected a" : ""
            }
          >
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            className={
              location.pathname === "/login" ? "ant-menu-item-selected a" : ""
            }
          >
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item
            key="3"
            className={
              location.pathname === "/register"
                ? "ant-menu-item-selected a"
                : ""
            }
          >
            <Link to="/register">Register</Link>
          </Menu.Item>
          <Menu.Item
            key="4"
            className={
              location.pathname === "/profile" ? "ant-menu-item-selected a" : ""
            }
          >
            <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default withRouter(HeaderComp);

// import React, { useState, useEffect } from "react";
// import { useHistory, useLocation } from "react-router-dom";
// import { Layout, Menu } from "antd";

// const { Sider } = Layout;

// const items = [
//   { key: "1", label: "Home", path: "/" },
//   { key: "2", label: "Login", path: "/login" },
//   {
//     key: "3",
//     label: "Register",
//     path: "/register",
//   },
//   { key: "4", label: "Profile", path: "/profile" },
// ];

// const HeaderComp = () => {
//   const location = useLocation();
//   const history = useHistory();
//   const [selectedKey, setSelectedKey] = useState(
//     items.find((_item) => location.pathname.startsWith(_item.path)).key
//   );

//   const onClickMenu = (item) => {
//     const clicked = items.find((_item) => _item.key === item.key);
//     history.push(clicked.path);
//   };

//   useEffect(() => {
//     setSelectedKey(
//       items.find((_item) => location.pathname.startsWith(_item.path)).key
//     );
//   }, [location]);

//   return (
//     <Sider style={{ backgroundColor: "white" }}>
//       <Menu selectedKeys={[selectedKey]} mode="inline" onClick={onClickMenu}>
//         {items.map((item) => (
//           <Menu.Item key={item.key}>{item.label}</Menu.Item>
//         ))}
//       </Menu>
//     </Sider>
//   );
// };

// export default HeaderComp;
