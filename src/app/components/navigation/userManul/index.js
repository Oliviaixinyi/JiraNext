"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar, Menu, Dropdown } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  BellOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const AccountDropdown = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === "logout") {
      // Handle logout logic here
      router.push("/");
      console.log("Logging out...");
    }
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.ItemGroup>
        <strong style={{ fontSize: "12px" }}>ACCOUNT</strong>
        <Menu.Divider style={{ borderBottom: "0.1rem solid #d9d9d9" }} />
        <Menu.Item key="profile">
          <UserOutlined /> Profile
        </Menu.Item>
        <Menu.Item key="settings">
          <SettingOutlined /> Personal settings
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup>
        <strong style={{ fontSize: "12px" }}>UPGRADE</strong>
        <Menu.Divider style={{ borderBottom: "0.1rem solid #d9d9d9" }} />
        <Menu.Item key="upgrade">
          <BellOutlined /> Notifications
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup>
        <strong style={{ fontSize: "12px" }}>JIRA</strong>
        <Menu.Divider style={{ borderBottom: "0.1rem solid #d9d9d9" }} />
        <Menu.Item key="theme">
          <SettingOutlined /> Theme
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined /> Log out
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      onVisibleChange={handleVisibleChange}
      visible={visible}
      placement="bottomLeft"
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Avatar icon={<UserOutlined />} /> Xinyi Ai
      </a>
    </Dropdown>
  );
};

export default AccountDropdown;
