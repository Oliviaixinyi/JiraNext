import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="1">Print list</Menu.Item>
    <Menu.Item key="2">Print details</Menu.Item>
    <Menu.Divider />
    <Menu.ItemGroup title="Export issues">
      <Menu.Item key="3">Export XML</Menu.Item>
      <Menu.Item key="4">Export RSS</Menu.Item>
      <Menu.Item key="5">Export RSS (with comments)</Menu.Item>
      <Menu.Item key="6">Export Word</Menu.Item>
      <Menu.Item key="7">Export HTML report (all fields)</Menu.Item>
      <Menu.Item key="8">Export HTML report (my defaults)</Menu.Item>
      <Menu.Item key="9">Export CSV (all fields)</Menu.Item>
      <Menu.Item key="10">Export CSV (my defaults)</Menu.Item>
      <Menu.Item key="11">Export Excel CSV (all fields)</Menu.Item>
      <Menu.Item key="12">Export Excel CSV (my defaults)</Menu.Item>
    </Menu.ItemGroup>
    <Menu.Divider />
    <Menu.Item key="13">Create dashboard gadget</Menu.Item>
  </Menu>
);

const ExportIssues = () => {
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button>
        Export issues <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default ExportIssues;
