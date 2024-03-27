import React, { useState } from "react";
import { Input } from "antd";

function DashboardSearchBar() {
  return (
    <Input.Search
      placeholder="Search dashboards"
      style={{ width: "100%", height: "2rem" }}
    />
  );
}

export default DashboardSearchBar;
