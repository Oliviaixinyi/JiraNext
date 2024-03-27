import React from "react";
import { Menu, Dropdown, Input, Button } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";

const searchMenu = (
  <Menu>
    <Menu.Item key="0">
      <Input placeholder="Search" prefix={<SearchOutlined />} />
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">RECENT PROJECTS</Menu.Item>
    <Menu.Item key="2">
      <div>
        <img
          src="https://illinois-xinyia2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=smalln=" // Replace with your icon path
          alt="Project Icon"
          style={{ width: "10%" }}
        />
        My Kanban Project
      </div>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Show full list</Menu.Item>
  </Menu>
);

const ProjectMenu = () => {
  return (
    <Dropdown overlay={searchMenu} trigger={["click"]}>
      <Button>
        Project <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default ProjectMenu;
