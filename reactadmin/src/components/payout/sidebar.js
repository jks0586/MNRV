import React from "react";
import { Nav } from "react-bootstrap";
const Side = (props) => {
  return (
    <>
      <Nav
        className="col-md-3 d-none d-md-block sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link className="text-start" href="/home">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-start" eventKey="link-1">Categories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-start" eventKey="link-2">Posts</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
const Sidebar = Side;
export default Sidebar;
