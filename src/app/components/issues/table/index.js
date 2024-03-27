import React, { useEffect, useState } from "react";
import { Table, Tag, Avatar } from "antd";
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  SyncOutlined,
  UserOutlined,
} from "@ant-design/icons";

const IssuesTable = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const response = await fetch("http://localhost:3001/issues");
      const data = await response.json();
      setIssues(data);
    };

    fetchIssues().catch(console.error);
  }, []);

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: () => <Tag color="blue">Task</Tag>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Summary",
      dataIndex: "description",
      key: "summary",
    },
    {
      title: "Assignee",
      dataIndex: "assignee",
      key: "assignee",
      render: () => <Tag>Unassigned</Tag>, // Replace with dynamic data if needed
    },
    {
      title: "Reporter",
      dataIndex: "created",
      key: "reporter",
      render: (text) => (
        <div>
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
          {text}
        </div>
      ),
    },
    {
      title: "P",
      dataIndex: "priority",
      key: "priority",
      render: () => <SyncOutlined spin />, // Replace with dynamic data if needed
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        let color = status === "Closed" ? "green" : "volcano";
        let icon =
          status === "Closed" ? (
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          ) : (
            <CloseCircleTwoTone twoToneColor="#eb2f96" />
          );
        return (
          <Tag icon={icon} color={color}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Resolution",
      dataIndex: "resolution",
      key: "resolution",
      render: () => <p>Unresolved</p>, // Replace with dynamic data if needed
    },
  ];

  return <Table columns={columns} dataSource={issues} />;
};

export default IssuesTable;
