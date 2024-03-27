import React, { useState } from "react";
import { Input } from "antd";
import { FaSearch } from "react-icons/fa";
import styles from "./projectSearchBar.module.css";

function ProjectOutlinedrojectSearchBar() {
  return (
    <Input.Search
      placeholder="Search Projects"
      style={{ width: "100%", height: "2rem", fontSize: "0.5rem" }}
    />
  );
}

export default ProjectOutlinedrojectSearchBar;
