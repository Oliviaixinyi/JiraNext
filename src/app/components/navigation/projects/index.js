import React, { useState } from "react";
import Link from "next/link";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Projects = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  const menus = (
    <Menu>
      <Menu.ItemGroup>
        <strong style={{ fontSize: "12px" }}>RECENT</strong>
        <Menu.Item key="project-1">
          <img
            src="https://illinois-xinyia2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=small" // Replace with your icon path
            alt="Project Icon"
            style={{ width: "5%" }}
          />
          <Link href="/detailedProject">
            <span>My Kanban Project (KAN)</span>
          </Link>
          <div>Software project</div>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider style={{ borderBottom: "0.1rem solid #d9d9d9" }} />
      <Menu.Item key="view-all">
        <Link href="/projects">View all projects</Link>
      </Menu.Item>
      <Menu.Item key="create-new">Create project</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menus} trigger={["click"]}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Projects
        <DownOutlined style={{ fontSize: "0.7rem" }} />
      </a>
    </Dropdown>
  );
};

export default Projects;
