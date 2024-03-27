import React, { useState } from "react";
import Link from "next/link";
import { Modal, Button, Form, Input, Select, Row, Col } from "antd";

const { Option } = Select;

import {
  DownOutlined,
  ExclamationCircleOutlined,
  CheckSquareOutlined,
  ProjectOutlined,
} from "@ant-design/icons";

const DashboardCreate = () => {
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
        Create dashboard
      </Button>
      <Modal
        title="Create dashboard"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Save
          </Button>,
        ]}
      >
        <div style={{ color: "#666", fontSize: "13px" }}>
          Required fields are marked with an asterisk *
        </div>
        <Form layout="vertical" initialValues={{ remember: true }}>
          <Form.Item label="Name" name="Name" rules={[{ required: true }]}>
            <Input placeholder="Summary" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ message: "Please input the summary!" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Viewers"
            name="Viewers"
            rules={[
              { required: true, message: "Please select an issue type!" },
            ]}
          >
            <Select>
              <Option>Project</Option>
              <Option>Group</Option>
              <Option>My organization</Option>
              <Option>User</Option>
              <Option>Private</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default DashboardCreate;
