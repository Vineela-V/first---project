import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Settings from '../Pages/Settings';
import Reports from '../Pages/Reports';

export default function MainLayout() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}
