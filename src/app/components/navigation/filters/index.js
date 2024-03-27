import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import Link from "next/link";
import { DownOutlined } from "@ant-design/icons";
import { MdKeyboardArrowDown } from "react-icons/md";

const Filters = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  const menus = (
    <Menu
      defaultSelectedKeys={["1"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      <Menu.Item key="1">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://jira-frontend-bifrost.prod-east.frontend.public.atl-paas.net/assets/filter-empty.4c92f05b.svg" // Replace with your image path
            alt="Your Alt Text"
            style={{ width: "180px", height: "180px", marginRight: "80px" }} // Adjust size as needed
          />
        </div>
        <div>
          Search for issues across all projects and save them as filters.
        </div>
      </Menu.Item>
      <Menu.Item key="2">
        <a
          href="https://support.atlassian.com/jira-software-cloud/docs/search-for-issues-in-jira/#Searchingforissues-SearchallofJira"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </Menu.Item>
      <Menu.Divider style={{ borderBottom: "0.1rem solid #d9d9d9" }} />
      <Menu.Item key="3">
        <Link href="/filters">
          <span>View all filters</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link href="/issues">
          <span>View all issues</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    // <Link href="/filters">
    //   <span>
    //     Filters
    //     <DownOutlined />
    //   </span>
    // </Link>
    <Dropdown
      overlay={menus}
      onVisibleChange={handleVisibleChange}
      visible={visible}
      trigger={["click"]}
    >
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Filters
        <DownOutlined style={{ fontSize: "0.7rem" }} />
      </a>
    </Dropdown>
  );
};

export default Filters;
