import React, { useEffect, useState } from "react";
import { List } from "antd";

const IssuesList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch("https://jira-data.onrender.com/issues");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setIssues(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchIssues();
  }, []);

  return (
    <List
      itemLayout="horizontal"
      dataSource={issues}
      renderItem={(issue) => (
        <List.Item>
          <List.Item.Meta
            title={issue.title}
            description={`Status: ${issue.status}`}
          />
          <div style={{ fontSize: "0.8rem" }}>Created by {issue.created}</div>
        </List.Item>
      )}
    />
  );
};

export default IssuesList;
