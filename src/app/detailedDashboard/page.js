"use client";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { HiRefresh } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import {
  Breadcrumb,
  Card,
  Layout,
  Menu,
  Typography,
  Divider,
  List,
  Tabs,
  Row,
  Col,
  Pagination,
  Space,
  Button,
  Dropdown,
} from "antd";

import WelcomeCard from "../components/dashboards/welcomeCard";
import ProjectCard from "../components/dashboards/projectCard";
import AssignCard from "../components/dashboards/assignCard";
import ActivityStreamCard from "../components/dashboards/activityCard";

const { Header, Content } = Layout;
const { Title, Link, Text } = Typography;

const renderMoreActions = (text, record) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Share dashboard</Menu.Item>
      <Menu.Item key="2">Copy</Menu.Item>
      <Menu.Item key="3">Configure automatic refresh</Menu.Item>
      <Menu.Item key="4">View as wallboard</Menu.Item>
      <Menu.Item key="5">View wallboard slide show</Menu.Item>
      <Menu.Item key="6">Configure wallboard slide show</Menu.Item>
      <Menu.Item key="7">Create a dashboard</Menu.Item>
      <Menu.Item key="8">View all dashboards</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <BsThreeDots style={{ fontSize: "1.5em" }} />
      </a>
    </Dropdown>
  );
};

const DetailedProjectDashboard = () => {
  return (
    <Layout>
      <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
        <Row
          justify="space-between"
          align="middle"
          style={{ paddingTop: "0.3rem" }}
        >
          <Col flex="auto">
            <Title level={2}>Default dashboard</Title>
          </Col>
          <Col>
            <Space>
              <CiStar style={{ fontSize: "1.5rem" }} />
              <Button>
                refresh <HiRefresh />
              </Button>
              <Button>
                Edit <MdEdit />
              </Button>
              {renderMoreActions()}
            </Space>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          {/* Add space between cards */}
          <Col xs={24} lg={12}>
            <WelcomeCard />
          </Col>
          <Col xs={24} lg={12}>
            <AssignCard />
          </Col>
        </Row>
        <br></br>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <ProjectCard />
          </Col>
          <Col xs={24} lg={12}>
            <ActivityStreamCard />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default DetailedProjectDashboard;
