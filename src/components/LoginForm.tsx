import { Form, Input, Button, Checkbox, Card } from "antd";
import React, { FC, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import AuthLayout from "../layouts/AuthLayout";
import { rules } from "../utils/rules";

import styles from "../pages/LoginPage/LoginPage.module.css";

const LoginForm: FC = () => {
  const { isLoading, error } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useActions();
  const submit = () => {
    login(username, password);
  };
  return (
    <div>
      <AuthLayout>
        <div className={styles.root}>
          <Card title="Login" bordered={false} className={styles.card}>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
              onFinish={submit}
            >
              {error && <div style={{ color: "red" }}>{error} </div>}
              <Form.Item
                label="Username"
                name="username"
                rules={[rules.required("Please input your username!")]}
              >
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[rules.required("Please input your password!")]}
              >
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" loading={isLoading}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </AuthLayout>
    </div>
  );
};

export default LoginForm;
