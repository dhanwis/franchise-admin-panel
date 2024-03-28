import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Contextshare from "views/examples/ContextShare";
import Error from "404";
import { isAuthenticated } from "utils/auth";
import { AuthProvider } from "contexts/authContext";

// Custom route component to protect routes that require authentication
const ProtectedRoute = ({ element, path }) => {
  return isAuthenticated() ? element : <Navigate to="/auth/login" replace />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <Contextshare>
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin/*"
            element={<ProtectedRoute element={<AdminLayout />} />}
          />
          {/* <Route path="/admin/*" element={<AdminLayout />} /> */}
          <Route path="/auth/*" element={<AuthLayout />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </BrowserRouter>
    </Contextshare>
  </AuthProvider>
);
