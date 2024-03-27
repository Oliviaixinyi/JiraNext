// components/ProjectTable.js
import { Table, Avatar, Dropdown, Menu, Tag } from "antd";
// import { FaRegStar, BsThreeDotsVertical } from "react-icons/all";
import { FaRegStar } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import {
  SettingOutlined,
  DeleteOutlined,
  FileOutlined,
} from "@ant-design/icons";

const renderMoreActions = (text, record) => {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<SettingOutlined />}>
        Project settings
      </Menu.Item>
      <Menu.Item key="2" icon={<DeleteOutlined />}>
        Move to trash
      </Menu.Item>
      <Menu.Item key="3" icon={<FileOutlined />}>
        Archive <Tag color="blue">PREMIUM</Tag>
      </Menu.Item>
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
    title: "Favorite",
    dataIndex: "favorite",
    key: "favorite",
    render: () => <FaRegStar />, // Use the appropriate star icon from Ant Design
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <a>
        <img
          src="https://illinois-xinyia2.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=small" // Replace with your icon path
          alt="Project Icon"
          style={{ width: "3%" }}
        />
        <Link href="/detailedProject">{text}</Link>
      </a>
    ),
  },
  {
    title: "Key",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Lead",
    dataIndex: "lead",
    key: "lead",
    render: (lead) => (
      <>
        <Avatar
          style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
          size="small"
        >
          {lead[0]}
        </Avatar>
        {lead}
      </>
    ),
  },
  {
    title: "More actions",
    key: "actions",
    render: renderMoreActions,
  },
];

const data = [
  {
    key: "1",
    favorite: true,
    name: "My Kanban Project",
    key: "KAN",
    type: "Team-managed software",
    lead: "Xinyi Ai",
  },
  // ... more data
];

const ProjectTable = () => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default ProjectTable;
