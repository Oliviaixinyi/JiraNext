import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import Link from "next/link";
import { DownOutlined } from "@ant-design/icons";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import DashboardCreate from "../../dashboards/createButton";

const Dashboard = () => {
  const menus = (
    <Menu defaultSelectedKeys={["1"]}>
      <Menu.ItemGroup>
        <strong style={{ fontSize: "12px" }}>RECENT</strong>
        <Menu.Item
          key="1"
          icon={<MdOutlineSpaceDashboard style={{ fontSize: "1.5rem" }} />}
        >
          <Link href="/detailedDashboard">Default dashboard</Link>
        </Menu.Item>
        <Menu.Divider style={{ borderBottom: "0.1rem solid #d9d9d9" }} />
        <Menu.Item key="2">
          <Link href="/dashboard">
            <span>View all dashboards</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3"> Create dashboards</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
  return (
    <Dropdown overlay={menus} trigger={["click"]}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Dashboards <DownOutlined style={{ fontSize: "0.7rem" }} />
      </a>
    </Dropdown>
  );
};

export default Dashboard;
