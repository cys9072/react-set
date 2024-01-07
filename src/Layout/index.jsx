import React from "react";

function Layout({ children, mainClassName }) {
  return (
    <>
      <main className={mainClassName && mainClassName}>{children}</main>
    </>
  );
}

export default Layout;
