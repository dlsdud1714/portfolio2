import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link href="/about">Click here to go home</Link>
    </div>
  );
};

export default PageNotFound;
