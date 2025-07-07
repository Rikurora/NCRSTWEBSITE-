import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import Editor from '../pages/content/Editor';
import ProtectedRoute from '../components/auth/ProtectedRoute';

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={
        user ? <Navigate to="/dashboard" /> : <Login />
      } />
      
      <Route path="/" element={
        <ProtectedRoute>
          <Navigate to="/dashboard" />
        </ProtectedRoute>
      } />

      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />

      <Route path="/editor" element={
        <ProtectedRoute>
          <Editor />
        </ProtectedRoute>
      } />

      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes; 