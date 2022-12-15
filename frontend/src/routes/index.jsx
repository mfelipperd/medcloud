import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Admin from '../pages/admin/Admin';
import Main from '../pages/main/Main';

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default RoutesComponent;
