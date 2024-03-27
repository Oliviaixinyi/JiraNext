import React from "react";
import { Menu, Dropdown, Input, Checkbox, Button } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Input placeholder="Search" prefix={<SearchOutlined />} />
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Checkbox>All standard issue types</Checkbox>
    </Menu.Item>
    <Menu.Item key="2">
      <Checkbox>All sub-task issue types</Checkbox>
    </Menu.Item>
    <Menu.Divider />
    <Menu.ItemGroup title="STANDARD ISSUE TYPES">
      <Menu.Item key="3">
        <Checkbox>Epic</Checkbox>
      </Menu.Item>
      <Menu.Item key="4">
        <Checkbox>Task</Checkbox>
      </Menu.Item>
    </Menu.ItemGroup>
    <Menu.ItemGroup title="SUB-TASK ISSUE TYPES">
      <Menu.Item key="5">
        <Checkbox>Subtask</Checkbox>
      </Menu.Item>
    </Menu.ItemGroup>
    <Menu.Divider />
    <Menu.Item key="6">Show full list</Menu.Item>
  </Menu>
);

const TypeDropdown = () => {
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button>
        Type <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default TypeDropdown;
