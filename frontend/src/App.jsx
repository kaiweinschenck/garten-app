import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RequestForm from './pages/RequestForm';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import RequestDetail from './pages/RequestDetail';
import GCLayout from './pages/greencalc/GCLayout';
import GCDashboard from './pages/greencalc/GCDashboard';
import GCRechner from './pages/greencalc/GCRechner';
import GCAngebot from './pages/greencalc/GCAngebot';
import GCFotos from './pages/greencalc/GCFotos';
import GCProjekte from './pages/greencalc/GCProjekte';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('admin_token');
  return token ? children : <Navigate to="/admin/login" />;
}

export default function App() {
  return (
    <Routes>
      {/* Bestehende Routes */}
      <Route path="/" element={<RequestForm />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
      <Route path="/admin/request/:id" element={<PrivateRoute><RequestDetail /></PrivateRoute>} />

      {/* GreenCalc PWA */}
      <Route path="/calc" element={<GCLayout />}>
        <Route index element={<GCDashboard />} />
        <Route path="rechner" element={<GCRechner />} />
        <Route path="angebot" element={<GCAngebot />} />
        <Route path="fotos" element={<GCFotos />} />
        <Route path="projekte" element={<GCProjekte />} />
      </Route>
    </Routes>
  );
}
