"use client";
import React from "react";
import { Layout, Typography } from "antd";
import Image from "next/image";

const { Header, Content } = Layout;
const { Title, Link, Text } = Typography;

const Filters = () => {
  return (
    <Layout style={{ background: "#fff" }}>
      <div style={{ background: "#fff", margin: "1rem" }}>
        {" "}
        <Title level={2}>Filters</Title>
      </div>
      <div
        style={{
          background: "#fff",
          padding: 24,
          minHeight: 280,
          textAlign: "center",
        }}
      >
        <Image
          src="https://jira-frontend-bifrost.prod-east.frontend.public.atl-paas.net/assets/empty.368985dc.svg"
          alt="You don't have any filters"
          width={160} // Set the image size to fit your layout
          height={160}
        />
        <h2>You don't have any filters</h2>
        <p>
          You can create a filter by searching. Select View all issues option
          from <br />
          the Filters top bar item and enter your search criteria. Then, select
          Save <br /> filter to create a filter
        </p>
      </div>
    </Layout>
  );
};

export default Filters;
