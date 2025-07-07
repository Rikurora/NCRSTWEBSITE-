import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

function AppContent() {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return <Dashboard />;
}

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <AppContent />
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;