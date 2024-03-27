// src/components/layout.js
import React from "react";
import Sidebar from "../sidebar";
import YourWork from "../yourWork";
import Projects from "../projects";
import Filters from "../filters";
import Dashboard from "../dashboard";
import More from "../more";
import Create from "../create";
import SearchBar from "../searchBar";
import NotificationsDropdown from "../notification";
import AccountDropdown from "../userManul";
import SettingsMenu from "../setting";
import { Layout, Menu } from "antd";
import HelpComponent from "../help";
import { FaJira } from "react-icons/fa";

import styles from "./Navbar.module.css";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;

const Navbar = ({ children }) => {
  return (
    <Layout className="layout">
      <Header
        style={{
          backgroundColor: "white",
          borderBottom: "0.1rem solid #e8e8e8",
          boxShadow: "0 2px 8px #f0f1f2",
          width: "100%",
        }}
      >
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          theme="light"
          style={{
            width: "100vw",
            // height: 300,
          }}
        >
          <Menu.Item key="0">
            <Sidebar />
          </Menu.Item>
          <Menu.Item
            key="1"
            icon={
              <FaJira
                style={{ fontSize: "1.5rem", color: "rgb(38, 132, 255)" }}
              />
            }
          >
            <Link href="/yourWork"> Jira Software </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <YourWork />
          </Menu.Item>
          <Menu.Item key="3">
            <Projects />
          </Menu.Item>
          <Menu.Item key="4">
            <Filters />
          </Menu.Item>
          <Menu.Item key="5">
            <Dashboard />
          </Menu.Item>
          <Menu.Item key="6">
            <More />
          </Menu.Item>
          <Menu.Item key="7">
            <Create />
          </Menu.Item>
          <Menu.Item key="8" style={{}}>
            <SearchBar />
          </Menu.Item>
          <Menu.Item key="9">
            <NotificationsDropdown />
          </Menu.Item>
          <Menu.Item key="10">
            <HelpComponent />
          </Menu.Item>
          <Menu.Item key="11">
            <SettingsMenu />
          </Menu.Item>
          <Menu.Item key="12">
            <AccountDropdown />
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ backgroundColor: "white" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
    </Layout>
  );
};

export default Navbar;
