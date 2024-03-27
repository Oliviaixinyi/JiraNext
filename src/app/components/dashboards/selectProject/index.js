import React, { useState } from "react";
import { Select } from "antd";
const { Option } = Select;
import { GoProjectSymlink } from "react-icons/go";

const DashboardSelectProject = () => {
  return (
    <Select
      placeholder="Select Owner"
      dropdownMatchSelectWidth={false}
      style={{
        width: "100%",
        height: "2rem",
      }}
    >
      <Option value="project1">
        {" "}
        <GoProjectSymlink />
        My Kanban Project
      </Option>
    </Select>
  );
};
export default DashboardSelectProject;
