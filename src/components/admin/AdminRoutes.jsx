import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import Project from "./project/Project";
import Services from "../Client/services/Services";

function AdminRoutes() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="uploadProjects" element={<Project />} />
        <Route path="uploadServies" element={<Services />} />
      </Routes>
    </AdminLayout>
  );
}

export default AdminRoutes;
