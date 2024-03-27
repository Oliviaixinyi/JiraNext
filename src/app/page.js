// pages/login.js
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Form, Input, Button, Layout, Menu } from "antd";
import { FaJira } from "react-icons/fa";

const { Header, Content, Footer, Sider } = Layout;

const LoginPage = () => {
  const router = useRouter();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    // Here you might want to verify the user

    // Redirect to the homepage
    router.push("/yourWork");
  };

  return (
    <Layout className="layout">
      <Header
        style={{
          backgroundColor: "white",
          borderBottom: "0.1rem solid #e8e8e8", // Adds a bottom border to the header
          boxShadow: "0 2px 8px #f0f1f2",
        }}
      >
        <div>
          <FaJira style={{ fontSize: "1.5rem", color: "rgb(38, 132, 255)" }} />
          <strong>Jira Software</strong>
        </div>
      </Header>
      <Content style={{ padding: "0 5rem", backgroundColor: "white" }}>
        <div style={{ maxWidth: "20vw", margin: "auto", paddingTop: "10rem" }}>
          <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default LoginPage;
