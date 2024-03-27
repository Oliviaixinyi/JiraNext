import React, { useState } from "react";
import { Dropdown, Menu, Button } from "antd";
import styles from "./setting.module.css";
import {
  SettingOutlined,
  ProfileOutlined,
  NotificationOutlined,
  DesktopOutlined,
  ProjectOutlined,
  IssuesCloseOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

const SettingsMenu = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const settingsMenu = (
    <Menu>
      <Menu.ItemGroup title="PERSONAL SETTINGS">
        <Menu.Item
          key="1"
          icon={<ProfileOutlined style={{ fontSize: "20px" }} />}
        >
          <div>
            Atlassian account settings
            <div className={styles.description}>
              Manage your personal information, and control which information
              other people see and apps may access.
            </div>
          </div>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<NotificationOutlined style={{ fontSize: "20px" }} />}
        >
          <div>
            Personal Jira settings
            <div className={styles.description}>
              Manage your email notifications and other Jira settings.
            </div>
          </div>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="JIRA SETTINGS">
        <Menu.Item
          key="3"
          icon={<DesktopOutlined style={{ fontSize: "20px" }} />}
        >
          <div>
            System
            <div className={styles.description}>
              Manage your general configuration, global permissions, look and
              feel and more.
            </div>
          </div>
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<AppstoreAddOutlined style={{ fontSize: "20px" }} />}
        >
          <div>
            Products
            <div className={styles.description}>
              Manage your Jira products' settings and integrations.
            </div>
          </div>
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<ProjectOutlined style={{ fontSize: "20px" }} />}
        >
          <div>
            Projects
            <div className={styles.description}>
              Manage your project settings, categories, and more.
            </div>
          </div>
        </Menu.Item>
        <Menu.Item
          key="6"
          icon={<IssuesCloseOutlined style={{ fontSize: "20px" }} />}
        >
          <div>
            Issues
            <div className={styles.description}>
              Configure your issue types, workflows, screens, custom fields and
              more.
            </div>
          </div>
        </Menu.Item>
        <Menu.Item
          key="7"
          icon={<SettingOutlined style={{ fontSize: "20px" }} />}
        >
          <div>
            Apps
            <div className={styles.description}>
              Add and manage Jira Marketplace apps.
            </div>
          </div>
        </Menu.Item>
        {/* ... other settings items ... */}
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <Dropdown
      overlay={settingsMenu}
      onVisibleChange={handleVisibleChange}
      visible={visible}
      trigger={["click"]}
      placement="bottomRight"
    >
      <Button shape="circle" icon={<SettingOutlined />} />
    </Dropdown>
  );
};

export default SettingsMenu;
