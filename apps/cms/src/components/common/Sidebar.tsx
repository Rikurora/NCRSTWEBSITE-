import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  FileCheck, 
  Settings,
  Edit,
  CheckCircle,
  List,
  User,
  Newspaper,
  GraduationCap,
  Lightbulb,
  Building,
  Briefcase,
  LucideIcon
} from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface DividerItem {
  type: 'divider';
  id: string;
}

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const { user } = useAuth();

  // Common content sections for all roles
  const contentSections: MenuItem[] = [
    { id: 'news', label: 'News & Updates', icon: Newspaper },
    { id: 'science', label: 'Science & Research', icon: GraduationCap },
    { id: 'innovation', label: 'Innovation Hub', icon: Lightbulb },
    { id: 'procurement', label: 'Procurement', icon: Building },
    { id: 'vacancies', label: 'Vacancies', icon: Briefcase },
  ];

  const getMenuItems = () => {
    const roleSpecificItems: Record<string, MenuItem[]> = {
      ccm_admin: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'users', label: 'User Management', icon: Users },
        { id: 'departments', label: 'Departments', icon: Building2 },
        { id: 'pending-changes', label: 'Pending Changes', icon: FileCheck },
        { id: 'settings', label: 'Settings', icon: Settings }
      ],
      editor: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'content', label: 'Content Management', icon: Edit },
        { id: 'changes', label: 'My Changes', icon: CheckCircle }
      ],
      checker: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'review', label: 'Review Changes', icon: FileCheck },
        { id: 'all-changes', label: 'All Changes', icon: List }
      ]
    };

    const items = roleSpecificItems[user?.role || ''] || [];
    
    // Add content sections after role-specific items
    if (user?.role === 'editor' || user?.role === 'ccm_admin') {
      return [...items, { type: 'divider', id: 'content-divider' } as DividerItem, ...contentSections];
    }

    return items;
  };

  const menuItems = getMenuItems();

  return (
    <div className="w-64 bg-ncrst-blue min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-ncrst-gold rounded-lg flex items-center justify-center">
            <span className="text-ncrst-blue font-bold">N</span>
          </div>
          <span className="text-white font-bold text-lg">NCRST CMS</span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => 
            'type' in item ? (
              <div 
                key={item.id} 
                className="border-t border-ncrst-blue-light my-4"
              />
            ) : (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  currentView === item.id
                    ? 'bg-ncrst-green text-white'
                    : 'text-gray-300 hover:text-white hover:bg-ncrst-green/20'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            )
          )}
        </nav>
      </div>

      <div className="absolute bottom-6 left-6">
        <div className="bg-ncrst-blue-light rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-ncrst-gold rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-ncrst-blue" />
            </div>
            <div>
              <div className="text-white text-sm font-medium">{user?.name}</div>
              <div className="text-gray-300 text-xs">
                {user?.role === 'ccm_admin' ? 'CCM Administrator' : user?.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}