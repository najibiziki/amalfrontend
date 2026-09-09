import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import ProjectDetail from "./pages/projectDetail/ProjectDetail";

import AdminLogin from "./pages/Admin/AdminLogin";
import AdminProjects from "./pages/Admin/AdminProjects";
import AdminStats from "./pages/Admin/AdminStats";
import AdminPayment from "./pages/Admin/AdminPayment";
import ScrollToTop from "./components/common/ScrollToTop";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import AdminRegister from "./pages/Admin/AdminRegister";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projets/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route
                index
                element={<Navigate to="/admin/projects" replace />}
              />
              <Route path="projects" element={<AdminProjects />} />
              <Route path="stats" element={<AdminStats />} />
              <Route path="payment" element={<AdminPayment />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
