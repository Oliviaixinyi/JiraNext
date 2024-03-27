"use client";
import React from "react";
import { Button, Layout, Typography, Row, Col, Pagination, Space } from "antd";
import ProjectSearchBar from "../components/projectSearchBar";
import DropdownSelect from "../components/projectDropdown";
import ProjectTable from "../components/projectTable";

const { Header, Content } = Layout;
const { Title, Link, Text } = Typography;

const Projects = () => {
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Content style={{ margin: "1rem", backgroundColor: "white" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "0.3rem" }}
          >
            {" "}
            <Col flex="auto">
              <Title level={2}>Projects</Title>
            </Col>{" "}
            <Col>
              <Space>
                <Button type="primary">Create project</Button>
                <Button>Template</Button>
              </Space>
            </Col>
          </Row>

          <Row align="middle" gutter={16}>
            <Col>
              <ProjectSearchBar />
            </Col>
            <Col>
              <DropdownSelect />
            </Col>
          </Row>
          <br></br>
          <ProjectTable />
        </div>
        <Pagination
          defaultCurrent={1}
          total={1} // Total number of data items you have
        />
      </Content>
    </Layout>
  );
};

export default Projects;
