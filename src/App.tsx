/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import DataAnalytics from "./pages/DataAnalytics";
import DataScience from "./pages/DataScience";
import AiDevelopment from "./pages/AiDevelopment";
import DevOps from "./pages/DevOps";
import IndustriesPage from "./pages/IndustriesPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services/data-analytics" element={<DataAnalytics />} />
          <Route path="services/data-science" element={<DataScience />} />
          <Route path="services/ai-development" element={<AiDevelopment />} />
          <Route path="services/devops" element={<DevOps />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
