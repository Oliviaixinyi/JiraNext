import React, { useState } from "react";
import { Card, Button, Typography } from "antd";
import Link from "next/link";
import {
  MinusOutlined,
  FullscreenOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
const { Text } = Typography;
const WelcomeCard = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleRefresh = () => {
    // Refresh functionality here
    console.log("Refreshed");
  };

  return (
    <Card
      title="Introduction"
      style={{
        width: isMaximized ? "100%" : "85%",
        minHeight: isMinimized ? 0 : "30vh",
        border: "1px solid #d9d9d9",
      }}
      extra={
        <div>
          <Button
            type="text"
            icon={<MinusOutlined />}
            onClick={handleMinimize}
          />
          <Button
            type="text"
            icon={<FullscreenOutlined />}
            onClick={handleMaximize}
          />
          <Button
            type="text"
            icon={<ReloadOutlined />}
            onClick={handleRefresh}
          />
        </div>
      }
    >
      {!isMinimized && (
        <>
          <h2>Welcome to Jira</h2>
          <p>
            Not sure where to start? Check out the
            <Link href="https://confluence.atlassian.com/display/JIRASOFTWARECLOUD/Getting+started">
              Jira 101 guide
            </Link>
            and
            <a href="http://www.atlassian.com/training/">
              Atlassian training course
            </a>
            .
          </p>
          <p>
            You can <a href="#">customize this text</a> in the Administration
            section.
          </p>
          <Text type="secondary">2 minutes ago</Text>
        </>
      )}
    </Card>
  );
};

export default WelcomeCard;
