"use client";
import React from "react";
import { BsThreeDots, BsPeopleFill, BsGraphUpArrow } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { MdEdit, MdAutoMode, MdOpenInFull } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { RiPagesLine } from "react-icons/ri";
import { SiShortcut } from "react-icons/si";
import { PiComputerTower } from "react-icons/pi";
import {
  Button,
  Breadcrumb,
  Dropdown,
  Layout,
  Menu,
  Typography,
  Row,
  Col,
  Pagination,
  Space,
} from "antd";
import {
  AreaChartOutlined,
  AppstoreAddOutlined,
  SettingOutlined,
  BookOutlined,
  // other icons you need
} from "@ant-design/icons";
import ProjectSearchBar from "../components/projects/searchBar";
import KanbanBoard from "../components/projects/issuesInterface";
const { Header, Content, Sider } = Layout;
const { Title, Link, Text } = Typography;

const renderMoreActions = (text, record) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Manage workflow</Menu.Item>
      <Menu.Item key="2">Manage custom filters</Menu.Item>
      <Menu.Item key="3">Configure board</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button onClick={(e) => e.preventDefault()}>
        <BsThreeDots style={{ fontSize: "1.5em" }} />
      </Button>
    </Dropdown>
  );
};

const DetailedProject = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (
    <Layout style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Sider
        style={{
          backgroundColor: "white",
          margin: "0.1rem",
          borderRight: " 0.04rem solid #d9d9d9",
        }}
      >
        <Menu defaultSelectedKeys={["1"]} mode="inline">
          <Menu.ItemGroup>
            <strong style={{ fontSize: "0.7rem" }}>Planning</strong>
            <Menu.Item key="1" icon={<AreaChartOutlined />}>
              Timeline
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
              Board
            </Menu.Item>
            <Menu.Item key="3" icon={<GoGoal />}>
              Goals
            </Menu.Item>
            <Menu.Item key="4" icon={<PiComputerTower />}>
              <Link href="/issues">Issues</Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup>
            <strong style={{ fontSize: "0.7rem" }}>Development </strong>
            <Menu.Item key="5" icon={<FaCode />}>
              Code
            </Menu.Item>{" "}
          </Menu.ItemGroup>
          <Menu.Divider />
          <Menu.Item key="6" icon={<RiPagesLine />}>
            Project pages
          </Menu.Item>{" "}
          <Menu.Item key="7" icon={<SiShortcut />}>
            Add shortcut
          </Menu.Item>{" "}
          <Menu.Item key="8" icon={<SettingOutlined />}>
            Project settings
          </Menu.Item>{" "}
          {/* ... other items */}
        </Menu>
      </Sider>
      <Layout style={{ backgroundColor: "white", margin: "1rem" }}>
        <Breadcrumb style={{ margin: "1rem", backgroundColor: "white" }}>
          <Breadcrumb.Item>Projects</Breadcrumb.Item>
          <Breadcrumb.Item>My Kanban Project</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: "#fff", minHeight: 280 }}>
          <Row justify="space-between" align="middle">
            <Col flex="auto">
              <Title level={2}>KAN board</Title>
            </Col>
            <Col>
              <Space>
                <CiStar style={{ fontSize: "1.5rem" }} />
                <MdAutoMode style={{ fontSize: "1.5rem" }} />
                <IoShareSocialOutline style={{ fontSize: "1.5rem" }} />
                <MdOpenInFull style={{ fontSize: "1.5rem" }} />

                {renderMoreActions()}
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
                <ProjectSearchBar />
                <BsPeopleFill style={{ fontSize: "2rem" }} />
              </Space>
            </Col>
            <Col>
              <Space>
                Group by <Button>None</Button>
                <Button>
                  <BsGraphUpArrow style={{ fontSize: "0.7rem" }} />
                  Insights
                </Button>
                <Button>
                  <LuSettings2 style={{ fontSize: "0.7rem" }} />
                  View settings
                </Button>
              </Space>
            </Col>
          </Row>
          <KanbanBoard />
        </div>
      </Layout>
    </Layout>
  );
};

export default DetailedProject;
