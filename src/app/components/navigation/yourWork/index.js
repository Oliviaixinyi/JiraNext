import React, { useState } from "react";
import { Dropdown, Menu, Tabs } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./yourWork.module.css";
import Link from "next/link";
import IssuesList from "../../issueList";

const { TabPane } = Tabs;

const DropdownMenu = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const menus = (
    <Menu style={{ height: "100%", borderRight: 0 }}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Assigned to me" key="1">
          You have no open issues assigned to you
        </TabPane>
        <TabPane tab="Recent" key="2">
          <IssuesList />
        </TabPane>
        <TabPane tab="Boards" key="3">
          0
        </TabPane>
      </Tabs>
      <div className={styles.tabSeparator} /> {/* Add the separator here */}
      <Menu.Item key="4">
        <Link href="/yourWork">
          <span>Go to your work</span>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menus}
      onVisibleChange={handleVisibleChange}
      visible={visible}
      placement="bottomLeft"
      trigger={["click"]}
    >
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Your work <DownOutlined style={{ fontSize: "0.7rem" }} />
      </a>
    </Dropdown>
  );
};

export default DropdownMenu;
