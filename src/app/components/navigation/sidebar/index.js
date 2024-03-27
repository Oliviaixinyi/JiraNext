import React, { useState } from "react";
import { Dropdown, Menu, Button } from "antd";
import { PiDotsNineBold } from "react-icons/pi";
import { SiJirasoftware, SiSaltproject } from "react-icons/si";
import { MdManageAccounts, MdFindReplace } from "react-icons/md";
import { FaSlack, FaCompass } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const menu = (
  <Menu
    // mode="inline"
    defaultSelectedKeys={["1"]}
    defaultOpenKeys={["sub1"]}
    // style={{ height: "100%", borderRight: "0", borderLeft: "0",width:"100%" }}
  >
    <Menu.ItemGroup>
      <strong style={{ fontSize: "12px" }}>YOUR APPS</strong>

      <Menu.Item
        key="1"
        icon={<AppstoreOutlined style={{ fontSize: "20px" }} />}
      >
        Atlassian Start
      </Menu.Item>
      <Menu.Item key="2" icon={<SiJirasoftware style={{ fontSize: "20px" }} />}>
        Jira Software
      </Menu.Item>
      <Menu.Item
        key="3"
        icon={<SettingOutlined style={{ fontSize: "20px" }} />}
      >
        Jira Work Management
        <div style={{ color: "#666", fontSize: "13px" }}>
          Manage business projects, free with Jira Software
        </div>
      </Menu.Item>
      <Menu.Item key="4" icon={<SiSaltproject style={{ fontSize: "20px" }} />}>
        Administration
      </Menu.Item>
    </Menu.ItemGroup>
    <Menu.ItemGroup>
      <strong style={{ fontSize: "12px" }}>RECOMMENDED FOR YOUR TEAM</strong>
      <Menu.Item
        key="5"
        icon={<MdManageAccounts style={{ fontSize: "20px" }} />}
      >
        Collaborative IT service management
        <div style={{ color: "#666", fontSize: "13px" }}>
          Manage business projects, free with Jira Software
        </div>
      </Menu.Item>
      <Menu.Item key="6" icon={<MdFindReplace style={{ fontSize: "20px" }} />}>
        Jira Product Discovery
        <div style={{ color: "#666", fontSize: "13px" }}>
          Prioritize, collaborate, and deliver new ideas
        </div>
      </Menu.Item>
      <Menu.Item key="7" icon={<GrUserManager style={{ fontSize: "20px" }} />}>
        Opsgenie
        <div style={{ color: "#666", fontSize: "13px" }}>
          Modern incident management
        </div>
      </Menu.Item>
      <Menu.Item key="8" icon={<FaSlack style={{ fontSize: "20px" }} />}>
        Slack
        <div style={{ color: "#666", fontSize: "13px" }}>
          Integrate Slack with your Atlassian products
        </div>
      </Menu.Item>
      <Menu.Item key="9" icon={<FaCompass style={{ fontSize: "20px" }} />}>
        <strong>More Atlassian products</strong>
      </Menu.Item>
    </Menu.ItemGroup>
  </Menu>
);

const Sidebar = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  return (
    <Dropdown
      overlay={menu}
      onVisibleChange={handleVisibleChange}
      visible={visible}
      trigger={["click"]}
    >
      {/* <Button icon={<PiDotsNineBold style={{ fontSize: "30px" }} />} /> */}
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <PiDotsNineBold style={{ fontSize: "38px", paddingTop: "1rem" }} />
      </a>
    </Dropdown>
  );
};

export default Sidebar;
