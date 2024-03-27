import React from "react";
import { Input } from "antd";

function ProjectSearchBar() {
  return (
    <Input.Search
      placeholder="Search this board"
      style={{ width: "100%", height: "2rem" }}
    />
  );
}

export default ProjectSearchBar;
