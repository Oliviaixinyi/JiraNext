// components/ProjectTable.js
import { Table, Avatar, Dropdown, Menu, Tag, Space } from "antd";
// import { FaRegStar, BsThreeDotsVertical } from "react-icons/all";
import { FaRegStar } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import {
  SettingOutlined,
  DeleteOutlined,
  FileOutlined,
  StarOutlined,
  LockOutlined,
  UnlockOutlined,
  MoreOutlined,
} from "@ant-design/icons";

const renderMoreActions = (text, record) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Copy dashboard</Menu.Item>
      <Menu.Item key="2">Share dashboard</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <BsThreeDots style={{ fontSize: "1.5em" }} />
      </a>
    </Dropdown>
  );
};

const columns = [
  {
    title: "",
    dataIndex: "favorite",
    key: "favorite",
    render: () => <StarOutlined />,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <a>
        <Link href="/detailedDashboard">{text}</Link>
      </a>
    ),
  },
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
  },
  {
    title: "Viewers",
    dataIndex: "viewers",
    key: "viewers",
    render: () => <Tag color="blue">Public</Tag>,
  },
  {
    title: "Editors",
    dataIndex: "editors",
    key: "editors",
    render: () => <Tag color="volcano">Private</Tag>,
  },
  {
    title: "Starred by",
    dataIndex: "starred",
    key: "starred",
  },
  {
    title: "Actions",
    key: "actions",
    render: renderMoreActions,
  },
];

const data = [
  {
    key: "1",
    favorite: true,
    name: "Default dashboard",
    owner: "You",
    viewers: "Public",
    editors: "Private",
    starred: "0 people",
  },
];

const DashboardTable = () => (
  <Table columns={columns} dataSource={data} pagination={false} />
);

export default DashboardTable;
