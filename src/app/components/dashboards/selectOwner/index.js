import React, { useState } from "react";
import { Select } from "antd";
const { Option } = Select;

const DashboardSelectOwner = () => {
  return (
    <Select
      placeholder="Select Owner"
      dropdownMatchSelectWidth={false}
      style={{
        width: "100%",
        height: "2rem",
      }}
    >
      <Option value="XinyiAi">Xinyi Ai</Option>
    </Select>
  );
};
export default DashboardSelectOwner;
