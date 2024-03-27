import React, { useState } from "react";
import { Card, Button } from "antd";
import {
  MinusOutlined,
  FullscreenOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const ProjectCard = () => {
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);

  const handleRefresh = () => {
    // Add refresh logic here
  };

  const handleMinimize = () => {
    setMinimized(!minimized);
    if (maximized) setMaximized(false);
  };

  const handleMaximize = () => {
    setMaximized(!maximized);
    if (minimized) setMinimized(false);
  };

  // Add conditional rendering or styles based on state
  //   const cardStyle = maximized ? { width: "100%", height: "100vh" } : {};

  return (
    <Card
      style={{
        width: maximized ? "100%" : "60%",
        minHeight: minimized ? 0 : "10vh",
        border: "1px solid #d9d9d9",
      }}
      title="Projects"
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
      {/* The rest of your card content goes here */}
      {!minimized && (
        <div>
          <p>
            <Link href="/detailedProject">My Kanban Project (KAN)</Link>
          </p>
          <p>Lead: Xinyi Ai</p>

          {/* ...other content */}
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;
