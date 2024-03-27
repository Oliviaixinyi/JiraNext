"use client";
import React from "react";
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
} from "antd";
import { CodeOutlined } from "@ant-design/icons";
import DashboardSearchBar from "../components/dashboards/searchBar";
import DashboardSelectOwner from "../components/dashboards/selectOwner";
import DashboardSelectProject from "../components/dashboards/selectProject";
import DashboardSelectGroup from "../components/dashboards/selectGroup";
import DashboardTable from "../components/dashboards/dashboardTables";
import DashboardCreate from "../components/dashboards/createButton";
const { Header, Content } = Layout;
const { Title, Link, Text } = Typography;

export default function Page() {
  return (
    <Layout>
      <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
        <Row
          justify="space-between"
          align="middle"
          style={{ paddingTop: "0.3rem" }}
        >
          <Col flex="auto">
            <Title level={2}>Dashboards</Title>
          </Col>
          <Col>
            <DashboardCreate />
          </Col>
        </Row>
        <Row align="middle" gutter={16} style={{ paddingTop: "0.3rem" }}>
          <Col>
            <DashboardSearchBar />
          </Col>
          <Col>
            <DashboardSelectOwner />
          </Col>
          <Col>
            <DashboardSelectProject />
          </Col>
          <Col>
            <DashboardSelectGroup />
          </Col>
        </Row>
        <DashboardTable />
      </div>
    </Layout>
  );
}
