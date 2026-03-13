import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RequestForm from './pages/RequestForm';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import RequestDetail from './pages/RequestDetail';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('admin_token');
  return token ? children : <Navigate to="/admin/login" />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RequestForm />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
      <Route path="/admin/request/:id" element={<PrivateRoute><RequestDetail /></PrivateRoute>} />
    </Routes>
  );
}
