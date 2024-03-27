import React, { useState } from "react";
import Link from "next/link";
import { Modal, Button, Form, Input, Select, Row, Col } from "antd";

import { DownOutlined } from "@ant-design/icons";

const IssueSave = () => {
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
      <Button onClick={showModal}>
        Share
        <DownOutlined />
      </Button>
      <Modal
        title="Share search criteria"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Share
          </Button>,
        ]}
      >
        <div style={{ color: "#666", fontSize: "13px" }}>
          Required fields are marked with an asterisk *
        </div>
        <Form layout="vertical" initialValues={{ remember: true }}>
          <Form.Item
            label="Names or teams"
            name="Names or teams"
            rules={[{ required: true, message: "e.g.Maria, Team Orange" }]}
          >
            <Input placeholder="e.g.Maria, Team Orange" />
          </Form.Item>
          <Form.Item
            label="Message (optional)"
            name="Message (optional)"
            rules={[{ message: "Anything they should know?" }]}
          >
            <Input size="large" placeholder="Anything they should know?" />
          </Form.Item>
          {/* Add other fields here */}
        </Form>
      </Modal>
    </>
  );
};

export default IssueSave;
