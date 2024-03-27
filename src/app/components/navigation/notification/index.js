import React, { useState } from "react";
import { Badge, Dropdown, Menu, Button, Empty, Tabs } from "antd";
import { BellOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const NotificationsDropdown = () => {
  const [visible, setVisible] = useState(false);

  // Dummy notifications data
  const notifications = [];

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  // Dropdown menu content
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Direct" key="1">
            {notifications.length === 0 && (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="You have no notifications from the last 30 days."
              >
                <span>
                  Pro tip: press ↓ ↑ to move through notifications.{" "}
                  <a href="#/">See all shortcuts</a>
                </span>
              </Empty>
            )}
          </TabPane>
          <TabPane tab="Watching" key="2">
            {notifications.length === 0 && (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="You have no notifications from the last 30 days."
              >
                <span>
                  Pro tip: press ↓ ↑ to move through notifications.{" "}
                  <a href="#/">See all shortcuts</a>
                </span>
              </Empty>
            )}
          </TabPane>
        </Tabs>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      onVisibleChange={handleVisibleChange}
      visible={visible}
      placement="bottomRight"
      trigger={["click"]}
    >
      <Badge count={notifications.length}>
        <Button shape="circle" icon={<BellOutlined />} />
      </Badge>
    </Dropdown>
  );
};

export default NotificationsDropdown;
