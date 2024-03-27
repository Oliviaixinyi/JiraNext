import React, { useState } from "react";
import { Input } from "antd";

function IssuesSearchBar() {
  return (
    <Input.Search
      placeholder="Search issues"
      style={{ width: "100%", height: "2rem" }}
    />
  );
}

export default IssuesSearchBar;
