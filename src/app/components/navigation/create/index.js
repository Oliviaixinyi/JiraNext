import React, { useState } from "react";
import { Modal, Button, Form, Input, Select, Row, Col, Tag } from "antd";
import styles from "./create.module.css";
const { Option } = Select;

import { CheckSquareOutlined, ProjectOutlined } from "@ant-design/icons";

const Create = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create
      </Button>
      <Modal
        title="New Task"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Create
          </Button>,
        ]}
      >
        <div className={styles.tabSeparator} />
        <div style={{ color: "#666", fontSize: "13px" }}>
          Required fields are marked with an asterisk *
        </div>
        <Form layout="vertical" initialValues={{ remember: true }}>
          <Form.Item
            label="Project"
            name="project"
            rules={[{ required: true, message: "Please input your project!" }]}
          >
            <Select placeholder="Select a project">
              <Select.Option value="kanban">
                <img
                  src="https://illinois-xinyia2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=small" // Replace with your icon path
                  alt="Project Icon"
                  style={{ width: "4%" }}
                />
                My Kanban Project (KAN)
              </Select.Option>
            </Select>
          </Form.Item>
          <Row gutter={18}>
            <Col span={9}>
              <Form.Item
                label="Issue Type"
                name="issueType"
                rules={[
                  { required: true, message: "Please select an issue type!" },
                ]}
              >
                <Select
                  placeholder="Select an issue type"
                  defaultActiveFirstOption="task"
                >
                  <Option value="task">
                    <CheckSquareOutlined />
                    Task
                  </Option>
                  <Option value="epic">
                    <ProjectOutlined />
                    Epic
                  </Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                label="Status"
                name="status"
                rules={[{ required: true, message: "Please select a status!" }]}
              >
                <Select
                  placeholder="Select status"
                  defaultActiveFirstOption="toDo"
                >
                  <Option value="toDo">
                    <Tag color="grey">TO DO</Tag>
                  </Option>
                  <Option value="inProgress">
                    <Tag color="blue">IN PROGRESS</Tag>
                  </Option>
                  <Option value="done">
                    {" "}
                    <Tag color="green">DONE</Tag>
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Summary"
            name="summary"
            rules={[{ required: true, message: "Please input the summary!" }]}
          >
            <Input placeholder="Summary" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ message: "Please input the summary!" }]}
          >
            <Input size="large" placeholder="Enter your Description" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Create;
