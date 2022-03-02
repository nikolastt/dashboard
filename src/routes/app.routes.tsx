import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";

interface IAppRoutesProps {
  handleTheme(): void;
}

const MyRoutes: React.FC<IAppRoutesProps> = ({ handleTheme }) => {
  return (
    <BrowserRouter>
      <Layout handleTheme={handleTheme}>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/List/:type" element={<List />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default MyRoutes;
