import { useEffect, useState } from "react";
import { Card, Col, Row, Typography, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function KanbanBoard() {
  const [issues, setIssues] = useState({
    "To Do": [],
    "In Progress": [],
    Done: [],
  });

  useEffect(() => {
    fetch("https://jira-data.onrender.com/issues")
      .then((response) => response.json())
      .then((data) => {
        const sortedIssues = data.reduce(
          (acc, issue) => {
            if (issue.status === "Open") acc["To Do"].push(issue);
            else if (issue.status === "In Progress")
              acc["In Progress"].push(issue);
            else if (issue.status === "Closed") acc["Done"].push(issue);
            return acc;
          },
          { "To Do": [], "In Progress": [], Done: [] }
        );
        setIssues(sortedIssues);
      });
  }, []);

  const renderCards = (issuesList) => {
    return issuesList.map((issue) => (
      <Card
        key={issue.id}
        style={{
          marginBottom: "16px",
          borderRadius: "2px",
        }}
      >
        <Paragraph>
          <strong>{issue.title}</strong>
        </Paragraph>
        <Paragraph>{issue.description}</Paragraph>
        <Paragraph type="secondary">Created by: {issue.created}</Paragraph>
      </Card>
    ));
  };

  return (
    <div style={{ margin: "20px" }}>
      <Row gutter={16}>
        {Object.entries(issues).map(([status, issuesList], index) => (
          <Col key={status} span={8}>
            <div
              style={{
                backgroundColor: "#f0f2f5",
                padding: "10px",
                borderRadius: "2px",
                marginBottom: "20px",
              }}
            >
              <Title level={4} style={{ textTransform: "uppercase" }}>
                {status}
              </Title>
              {renderCards(issuesList)}
              {status === "To Do" && (
                <Button type="dashed" block icon={<PlusOutlined />}>
                  Create issue
                </Button>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
