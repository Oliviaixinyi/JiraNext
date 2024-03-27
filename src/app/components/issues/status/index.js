import React from "react";
import { Menu, Dropdown, Input, Checkbox, Button, Tag } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";

const searchMenu = (
  <Menu>
    <Menu.Item key="0">
      <Input placeholder="Search" prefix={<SearchOutlined />} />
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Checkbox>
        <Tag color="green">DONE</Tag>
      </Checkbox>
    </Menu.Item>
    <Menu.Item key="2">
      <Checkbox>
        <Tag color="blue">IN PROGRESS</Tag>
      </Checkbox>
    </Menu.Item>
    <Menu.Item key="3">
      <Checkbox>
        <Tag color="grey">TO DO</Tag>
      </Checkbox>
    </Menu.Item>
  </Menu>
);

const StatusDropdown = () => {
  return (
    <Dropdown overlay={searchMenu} trigger={["click"]}>
      <Button>
        Status <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default StatusDropdown;
