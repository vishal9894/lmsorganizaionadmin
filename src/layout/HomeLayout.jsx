import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

const HomeLayout = () => {
  const { loading, user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="h-screen flex bg-gradient-to-br from-gray-50 to-gray-100">

      {/* Sidebar (Left) - Full Height */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content Area - Full Height */}
      <div className="flex-1 flex flex-col">

        {/* Header (Top) */}
        <Header onMenuToggle={toggleSidebar} />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="min-h-full p-4 md:p-6 lg:p-8 animate-fade-in">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
};

export default HomeLayout;