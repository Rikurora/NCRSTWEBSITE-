import { AuthProvider } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';
import { WorkflowProvider } from './context/WorkflowContext';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ContentProvider>
          <WorkflowProvider>
            <AppRoutes />
          </WorkflowProvider>
        </ContentProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;