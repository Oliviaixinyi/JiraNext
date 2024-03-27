import React from "react";
import { Menu, Dropdown, Input, Checkbox, Avatar, Button } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";

const assigneeMenu = (
  <Menu>
    <Menu.Item key="0">
      <Input placeholder="Search" prefix={<SearchOutlined />} />
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Checkbox>Current User</Checkbox>
    </Menu.Item>
    <Menu.Item key="2">
      <Checkbox>Unassigned</Checkbox>
    </Menu.Item>
    <Menu.Divider />
    <Menu.ItemGroup title="SUGGESTED GROUPS">
      <Menu.Item key="3">
        <Checkbox>jira-software-users-illinois-xinyia2</Checkbox>
      </Menu.Item>
      <Menu.Item key="4">
        <Checkbox>org-admins</Checkbox>
      </Menu.Item>
    </Menu.ItemGroup>
  </Menu>
);

const AssignDropdown = () => {
  return (
    <Dropdown overlay={assigneeMenu} trigger={["click"]}>
      <Button>
        Assignee <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default AssignDropdown;
