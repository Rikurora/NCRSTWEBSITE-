import { useAuth } from '../../context/AuthContext';
import { 
  FilePlus, 
  FileEdit, 
  UserPlus, 
  FileCheck,
  Building,
  FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QuickAction {
  name: string;
  description: string;
  icon: any;
  action: () => void;
  roles: string[];
}

export default function QuickActions() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const actions: QuickAction[] = [
    {
      name: 'Create Content',
      description: 'Add new content to any section',
      icon: FilePlus,
      action: () => navigate('/content/new'),
      roles: ['ccm_admin', 'editor']
    },
    {
      name: 'Review Content',
      description: 'Review pending content changes',
      icon: FileCheck,
      action: () => navigate('/review'),
      roles: ['ccm_admin', 'checker']
    },
    {
      name: 'Manage Users',
      description: 'Add or modify user accounts',
      icon: UserPlus,
      action: () => navigate('/users'),
      roles: ['ccm_admin']
    },
    {
      name: 'Department Settings',
      description: 'Manage department configurations',
      icon: Building,
      action: () => navigate('/departments'),
      roles: ['ccm_admin']
    },
    {
      name: 'Draft Content',
      description: 'Continue working on drafts',
      icon: FileEdit,
      action: () => navigate('/content/drafts'),
      roles: ['ccm_admin', 'editor']
    },
    {
      name: 'View Reports',
      description: 'Access content analytics',
      icon: FileText,
      action: () => navigate('/reports'),
      roles: ['ccm_admin', 'checker']
    }
  ];

  const userActions = actions.filter(action => action.roles.includes(user?.role || ''));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {userActions.map((action) => (
        <button
          key={action.name}
          onClick={action.action}
          className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 hover:border-ncrst-blue hover:shadow-md transition-all"
        >
          <div className="p-2 bg-ncrst-blue bg-opacity-10 rounded-lg">
            <action.icon className="h-6 w-6 text-ncrst-blue" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-medium text-gray-900">{action.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{action.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
} 