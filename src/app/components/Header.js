import React from "react";
import Link from "next/link";
import { Button } from "antd";

export default ({ pathname }) => (
  <header>
    <Button type="primary">Primary</Button>
    <Link href="/">
      <a className={pathname === "/" ? "is-active" : ""}>Home</a>
    </Link>{" "}
    <Link href="/about">
      <a className={pathname === "/about" ? "is-active" : ""}>About</a>
    </Link>
  </header>
);
