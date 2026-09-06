import { Outlet } from "react-router-dom";

import AdminNavigation from "../components/admin/AdminNavigation";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <main className="w-full">
        <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-4 sm:px-6 sm:pt-6 lg:px-8">
          <AdminNavigation />

          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
