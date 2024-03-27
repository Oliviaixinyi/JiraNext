import React, { useState } from "react";
import { Card, Button, Typography } from "antd";
import {
  MinusOutlined,
  FullscreenOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const ActivityStreamCard = () => {
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
      title="Activity Streams"
      style={{
        width: isMaximized ? "100%" : "70%",
        minHeight: isMinimized ? 0 : 200,
        border: "1px solid #d9d9d9",
      }}
      extra={
        <>
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
        </>
      }
    >
      {!isMinimized && (
        <>
          {" "}
          <h2>Your Company JIRA</h2>
          <p>No activity was found</p>
          <Text type="secondary">2 minutes ago</Text>
        </>
      )}
    </Card>
  );
};

export default ActivityStreamCard;
