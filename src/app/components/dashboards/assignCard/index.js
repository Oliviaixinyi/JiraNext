import React, { useState } from "react";
import { Card, Button, Typography } from "antd";
import {
  MinusOutlined,
  FullscreenOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

import Link from "next/link";

const AssignCard = () => {
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
      title="Assigned to Me"
      style={{
        width: isMaximized ? "100%" : "70%",
        minHeight: isMinimized ? 0 : "10vh",
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
          <p>
            You currently have no <a href="/issues">issues</a> assigned to you.
            Enjoy your day!
          </p>
          <Text type="secondary">2 minutes ago</Text>
        </>
      )}
    </Card>
  );
};

export default AssignCard;
