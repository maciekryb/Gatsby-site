import React from "react";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2023 Maciej Rybak</p>
      </footer>
    </div>
  );
};

export default Layout;
