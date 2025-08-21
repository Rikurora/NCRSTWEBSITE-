import { useAuth } from '../context/AuthContext';
import { Header } from '../components/common/Header';
import { AdminDashboard } from '../components/admin/AdminDashboard';
import { EditorDashboard } from '../components/editor/EditorDashboard';
import { CheckerDashboard } from '../components/checker/CheckerDashboard';


export function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }


  const renderDashboard = () => {
    switch (user.role) {
      case 'ccm_admin':
        return <AdminDashboard />;
      case 'editor':
        return <EditorDashboard />;
      case 'checker':
        return <CheckerDashboard />;
      default:
        return <div>Invalid role</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {renderDashboard()}
    </div>
  );
}