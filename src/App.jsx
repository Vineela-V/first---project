import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './Components/MainLayout';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}