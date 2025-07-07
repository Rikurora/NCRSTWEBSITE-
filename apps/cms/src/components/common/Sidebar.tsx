import React from 'react';
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
  User
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const { user } = useAuth();

  const getMenuItems = () => {
    switch (user?.role) {
      case 'ccm_admin':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { id: 'profile', label: 'Profile', icon: User },
          { id: 'users', label: 'User Management', icon: Users },
          { id: 'departments', label: 'Departments', icon: Building2 },
          { id: 'pending-changes', label: 'Pending Changes', icon: FileCheck },
          { id: 'settings', label: 'Settings', icon: Settings }
        ];
      case 'editor':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { id: 'profile', label: 'Profile', icon: User },
          { id: 'content', label: 'Content Management', icon: Edit },
          { id: 'changes', label: 'My Changes', icon: CheckCircle }
        ];
      case 'checker':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { id: 'profile', label: 'Profile', icon: User },
          { id: 'review', label: 'Review Changes', icon: FileCheck },
          { id: 'all-changes', label: 'All Changes', icon: List }
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className="w-64 bg-gradient-to-b from-[#777675] to-[#5a5958] min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-[#ffd332] to-[#e6be2d] rounded-lg flex items-center justify-center">
            <span className="text-[#777675] font-bold">N</span>
          </div>
          <span className="text-white font-bold text-lg">NCRST Portal</span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                currentView === item.id
                  ? 'bg-gradient-to-r from-[#ffd332] to-[#e6be2d] text-[#777675] font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-[#6a6968]'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-6 left-6 ">
        <div className="bg-[#6a6968] rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#ffd332] to-[#e6be2d] rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-[#777675]" />
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