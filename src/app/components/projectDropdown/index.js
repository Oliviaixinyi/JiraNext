import React, { useState } from "react";
import { Select } from "antd";
const { Option } = Select;
import styles from "./projectDropdown.module.css";

const DropdownSelect = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`); // You can handle the selected value here
  };

  return (
    <Select
      defaultValue="jiraService"
      className={styles.customSelect}
      style={{
        width: "100%",
        height: "2rem",
      }}
      onChange={handleChange}
      dropdownMatchSelectWidth={false} // This makes the dropdown width independent of the select input
    >
      <Option value="jiraProduct">Jira Product Discovery</Option>
      <Option value="jiraSoftware">Jira Software</Option>
      <Option value="jiraService">Jira Service Management</Option>
      <Option value="jiraWork">Jira Work Management</Option>
    </Select>
  );
};

export default DropdownSelect;
