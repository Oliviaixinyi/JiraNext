// pages/your-work.js
"use client";
import IssuesList from "../components/issueList";
import StarredSection from "../components/starredSection";
import React from "react";
import { Card, Layout, Menu, Typography, Tabs } from "antd";

const { Header, Content } = Layout;
const { Title, Link, Text } = Typography;
const { TabPane } = Tabs;

const data = {
  week: [{ name: "Jira Clone", id: "KAN-2", project: "My Kanban Project" }],
  month: [{ name: "ant design", id: "KAN-1", project: "My Kanban Project" }],
};

const YourWorkPage = () => {
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Content style={{ margin: "1rem", backgroundColor: "white" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          <Title level={2}>Your work</Title>
          <Title level={4}>Recent projects</Title>
          <Card
            style={{
              width: 300,
              marginTop: 16,
              border: "0.15rem solid #d9d9d9",
            }}
            actions={[
              <Menu mode="inline">
                <Menu.SubMenu key="board" title="1 board"></Menu.SubMenu>
              </Menu>,
            ]}
          >
            <img
              src="https://illinois-xinyia2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=small" // Replace with your icon path
              alt="Project Icon"
              style={{ width: "10%" }}
            />
            <Card.Meta
              title={
                <Link href="/detailedProject">
                  <a>My Kanban Project</a>
                </Link>
              }
              description="Team-managed software"
            />
            <div>
              QUICK LINKS
              <br />
              My open issues <Link href="#">0</Link>
              <br />
              Done issues <Link href="#">0</Link>
            </div>
          </Card>
          <Link href="/projects" style={{ marginTop: 10, float: "right" }}>
            View all projects
          </Link>
        </div>
        <Menu style={{ height: "100%", paddingLeft: "1.2rem" }}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Worked on" key="1">
              <div>
                <IssuesList />
              </div>
            </TabPane>
            <TabPane tab="Viewed" key="2">
              <IssuesList />
            </TabPane>
            <TabPane
              tab="Assigned to me"
              key="3"
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img
                src="https://jira-frontend-bifrost.prod-east.frontend.public.atl-paas.net/assets/jira-laptop-done.ad39bf9b.svg"
                style={{
                  width: "20%",
                  height: "auto",
                }}
              />
              <br></br>
              <strong style={{ fontSize: "1.5em", margin: "0.5em 0" }}>
                Find all your open issues in one place
              </strong>
              <div style={{ fontSize: "1em" }}>
                You have no open issues assigned to you
              </div>
            </TabPane>
            <TabPane tab="Starred" key="4">
              <StarredSection />
            </TabPane>
          </Tabs>
        </Menu>
      </Content>
    </Layout>
  );
};

export default YourWorkPage;
