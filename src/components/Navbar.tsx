import { Layout, Menu, Row } from "antd";
import React, { FC } from "react";
import { useHistory } from "react-router";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";

const Navbar: FC = () => {
  const router = useHistory();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <Layout.Header>
      <Row justify="space-between">
        {isAuth ? (
          <>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                onClick={() => router.push(RouteNames.HOME_PAGE)}
                key={1}
              >
                Home
              </Menu.Item>
              <Menu.Item
                onClick={() => router.push(RouteNames.PROFILE_PAGE)}
                key={2}
              >
                Profile
              </Menu.Item>
            </Menu>
            <Row justify="end">
              <Menu theme="dark" mode="horizontal">
                <Menu.Item key={1}>
                  <div style={{ color: "white" }}>{user.username}</div>
                </Menu.Item>
              </Menu>
              <Row justify="end">
                <Menu theme="dark" mode="horizontal">
                  <Menu.Item onClick={logout} key={5}>
                    Exit
                  </Menu.Item>
                </Menu>
              </Row>
            </Row>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal">
            <Menu.Item
              onClick={() => router.push(RouteNames.HOME_PAGE)}
              key={1}
            >
              Home
            </Menu.Item>
            <Menu.Item
              onClick={() => router.push(RouteNames.LOGIN_PAGE)}
              key={2}
            >
              Login
            </Menu.Item>
            <Menu.Item
              onClick={() => router.push(RouteNames.REGISTER_PAGE)}
              key={3}
            >
              Register
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
