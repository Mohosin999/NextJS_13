import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>This is our Home Page</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">About Team</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
