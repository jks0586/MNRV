import React from "react";
// import { Nav } from "react-bootstrap";
import AdminDashboard from "../AdminDashboard";
import UsersList from "../users/UsersList";
class RightSidebar extends React.Component {
    render() {
      return (
       <>
       <AdminDashboard />
       <UsersList />
       </>
      );
    }
  }
  
  export default RightSidebar;