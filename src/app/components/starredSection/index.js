// components/StarredSection.js or in pages/index.js

import { Button, Space } from "antd";
import Image from "next/image";
import Link from "next/link";

const StarredSection = () => {
  const items = ["Project", "Board", "Filter", "Dashboard", "Plan"];
  const link =
    "https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts";

  return (
    <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
      {/* Adjust styling as needed */}
      <Image
        src="https://jira-frontend-bifrost.prod-east.frontend.public.atl-paas.net/assets/starred-empty-state.16663f51.svg"
        alt="Star your work for quick access"
        width={610} // Set the image size to fit your layout
        height={420}
      />
      <h2>Star your work for quick access</h2>
      <p>Get started by finding your</p>
      <Space>
        {items.map((item) => (
          <Link href={link} key={item}>
            <Button type="primary">{item}</Button>
          </Link>
        ))}
      </Space>
    </div>
  );
};

export default StarredSection;
