import React, { useState } from "react";
import { Select } from "antd";
const { Option } = Select;
import { PiUsersThreeFill } from "react-icons/pi";

const DashboardSelectGroup = () => {
  return (
    <Select
      placeholder="Select Group"
      dropdownMatchSelectWidth={false}
      style={{
        width: "100%",
        height: "2rem",
      }}
    >
      <Option value="project1">
        {" "}
        <PiUsersThreeFill />
        atlassian-addons-admin
      </Option>
      <Option>
        {" "}
        <PiUsersThreeFill />
        jira-admins-illinois-xinyia2
      </Option>
      <Option>
        {" "}
        <PiUsersThreeFill />
        jira-software-user-access-admins-illinois-xinyia2
      </Option>
      <Option>
        {" "}
        <PiUsersThreeFill />
        jira-software-users-illinois-xinyia2
      </Option>
      <Option>
        {" "}
        <PiUsersThreeFill />
        org-admins
      </Option>
    </Select>
  );
};
export default DashboardSelectGroup;
