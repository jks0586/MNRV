import React from "react";
import {  Routes, Route } from "react-router-dom";
import AdminDashboard from "../components/AdminDashboard";
import UsersList from "../components/users/UsersList";
class LetscmsRoutes extends React.Component {
    render() {
        return (
          
            <Routes>
              <Route path="" element={<AdminDashboard />}/>   
              <Route path="/dashboard" element={<AdminDashboard />}/>   
              <Route path="/users" element={<UsersList />}/>   
              {/* <Route path="/admin/dashboard" element={<AdminDashboard />}/>
              <Route path="/admin/users" element={<AdminUsers />}/>
              <Route path="/admin/category" element={<AdminCategory />} />
              <Route path="/admin/category/create" element={<AdminCategoryAdd/>}/>
              <Route path="/admin/category/edit/:_id" element={<AdminCategoryEdit/>}/>
              <Route path="/admin/product/create" element={<AdminProductAdd/>}/>
              <Route path="/admin/product" element={<AdminProduct/>}/>
              <Route path="/admin/product/edit/:_id" element={<AdminProductEdit/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />}/> */}
            </Routes>
          
        );
      }
}

export default LetscmsRoutes;