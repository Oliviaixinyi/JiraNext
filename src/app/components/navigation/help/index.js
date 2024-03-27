import React, { useState } from "react";
import { Dropdown, Menu, Button } from "antd";
import {
  QuestionCircleOutlined,
  BookOutlined,
  BulbOutlined,
  TeamOutlined,
  PhoneOutlined,
  MessageOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { RiComputerLine } from "react-icons/ri";

const menus = (
  <Menu mode="vertical">
    <Menu.Item key="1" icon={<QuestionCircleOutlined />}>
      <a
        href="https://confluence.atlassian.com/cloud/blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        Find out what's changed in Jira
      </a>
    </Menu.Item>
    <Menu.Item key="2" icon={<BookOutlined />}>
      <a
        href="https://confluence.atlassian.com/alldoc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Browse complete documentation
      </a>
    </Menu.Item>
    <Menu.Item key="3" icon={<BulbOutlined />}>
      <a
        href="https://university.atlassian.com/student/catalog?utm_source=jira-help&utm_medium=inapp&utm_campaign=P:uni-training*O:university*H:fy23q4*I:in-app-help*"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn with Atlassian University
      </a>
    </Menu.Item>
    <Menu.Item key="4" icon={<TeamOutlined />}>
      <a
        href="https://community.atlassian.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ask our community forum
      </a>
    </Menu.Item>
    <Menu.Item key="5" icon={<PhoneOutlined />}>
      <a
        href="https://support.atlassian.com/contact/?postauth=true#/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact support
      </a>
    </Menu.Item>
    <Menu.Item key="6" icon={<MessageOutlined />}>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        Give feedback about Jira
      </a>
    </Menu.Item>
    <Menu.Item key="7" icon={<RiComputerLine />}>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        Keyboard shortcuts
      </a>
    </Menu.Item>
    <Menu.Item key="8" icon={<MobileOutlined />}>
      <a
        href="https://www.atlassian.com/software/jira/mobile-app?source=jira-help"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Jira Mobile
      </a>
    </Menu.Item>
  </Menu>
);

// The HelpComponent with a Dropdown
const HelpComponent = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  return (
    <Dropdown
      overlay={menus}
      onVisibleChange={handleVisibleChange}
      visible={visible}
      trigger={["click"]}
    >
      <Button shape="circle" icon={<QuestionCircleOutlined />} />
    </Dropdown>
  );
};

export default HelpComponent;
