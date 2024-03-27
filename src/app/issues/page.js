"use client";
import React from "react";

import { Button, Layout, Menu, Typography, Row, Col, Space } from "antd";

import IssueSave from "../components/issues/save";
import ExportIssues from "../components/issues/exportIssues";
import IssuesSearchBar from "../components/issues/searchBar";
import ProjectMenu from "../components/issues/project";
import TypeDropdown from "../components/issues/type";
import StatusDropdown from "../components/issues/status";
import AssignDropdown from "../components/issues/assign";
import IssuesTable from "../components/issues/table";
const { Header, Content, Sider } = Layout;
const { Title, Link, Text } = Typography;

const Issues = () => {
  return (
    <Layout style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Sider
        style={{
          backgroundColor: "white",
          margin: "0.13rem",
          borderRight: " 0.04rem solid #d9d9d9",
        }}
      >
        <Menu defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">New search</Menu.Item>
          <Menu.Divider />
          <Menu.ItemGroup>
            {" "}
            <strong style={{ fontSize: "0.7rem" }}>DEFAULT FILTERS </strong>
          </Menu.ItemGroup>
          <Menu.Item key="2">My open issues</Menu.Item>
          <Menu.Item key="3">Reported by me</Menu.Item>
          <Menu.Item key="4">
            <Link href="/issues">All issues</Link>
          </Menu.Item>
          <Menu.Item key="5">Open issues</Menu.Item>
          <Menu.Item key="6">Done issues</Menu.Item>
          <Menu.Item key="7">Viewed recently</Menu.Item>
          <Menu.Item key="8">Created recently</Menu.Item>
          <Menu.Item key="9">Updated recently</Menu.Item>
          <Menu.Divider />
          <Menu.Item key="10">View all filters</Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ backgroundColor: "white", margin: "1rem" }}>
        {" "}
        <div style={{ background: "#fff", minHeight: 280 }}>
          {" "}
          <Row justify="space-between" align="middle">
            <Col flex="auto">
              <Title level={2}>Issues</Title>
            </Col>
            <Col>
              <Space>
                <IssueSave />
                <ExportIssues />
                <Button> Go to all issues</Button>

                {/* {renderMoreActions()} */}
              </Space>
            </Col>
          </Row>
          <Row
            align="middle"
            justify="space-between"
            style={{ paddingTop: "0.3rem" }}
          >
            <Col>
              <Space>
                <IssuesSearchBar />
                <ProjectMenu />
                <TypeDropdown />
                <StatusDropdown />
                <AssignDropdown />
                <Button>More</Button>
              </Space>
            </Col>
          </Row>
          <br></br>
          <IssuesTable />
        </div>
      </Layout>
    </Layout>
  );
};

export default Issues;
