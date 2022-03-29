import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";

const MyRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/List/:type" element={<List />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default MyRoutes;
