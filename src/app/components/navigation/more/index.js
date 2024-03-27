import React, { useState } from "react";
import Link from "next/link";
import { Dropdown, Menu } from "antd";
import { PlusOutlined, TeamOutlined, DownOutlined } from "@ant-design/icons";
import { FaSlack } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

const More = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  const menus = (
    <Menu
      defaultSelectedKeys={["1"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      <Menu.SubMenu key="sub1" title="Teams">
        <Menu.Item key="1">
          <PlusOutlined /> Invite people to Jira
        </Menu.Item>
        <Menu.Item key="2">
          <TeamOutlined /> Create a team
        </Menu.Item>
        <Menu.Divider style={{ borderBottom: "2px solid #d9d9d9" }} />
        <Menu.Item key="3"> Searcn people and teams.</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub2" title="Plans">
        <Menu.Item key="4">
          <img
            src="https://jira-frontend-bifrost.prod-east.frontend.public.atl-paas.net/assets/plans-standard-light.fde35b0d.svg"
            style={{ width: "90%" }}
          />
          <div>
            <strong>Unlock advanced planning tools</strong>
            <p>
              Boost agility with capacity planning, <br></br>dependency mapping,
              and more. <br></br>Try Jira Premium's high-level cross-team
              planning tools.
            </p>
          </div>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub3" title="Apps">
        <Menu.ItemGroup>
          <strong style={{ fontSize: "12px" }}>
            RECOMMENDED FOR YOUR TEAM
          </strong>
          <div style={{ color: "#666", fontSize: "13px" }}>
            Ship faster with marketplace apps that integrate your team’s tools
            with Jira
          </div>
          <Menu.Item key="5" icon={<FaSlack style={{ fontSize: "20px" }} />}>
            Slack
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<IoLogoFigma style={{ fontSize: "20px" }} />}
          >
            Figma (Design)
          </Menu.Item>
          <Menu.Divider style={{ borderBottom: "0.1rem solid #d9d9d9" }} />
          <Menu.Item key="7">Explore more apps</Menu.Item>
          <Menu.Item key="8">Manage your apps</Menu.Item>
          <Menu.Item key="9">View app requests</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  );
  return (
    <Dropdown
      overlay={menus}
      onVisibleChange={handleVisibleChange}
      visible={visible}
      trigger={["click"]}
    >
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        More <DownOutlined style={{ fontSize: "11px" }} />
      </a>
    </Dropdown>
  );
};

export default More;
