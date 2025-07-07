import { ReactNode, useState } from 'react';
import { Sidebar } from '../common/Sidebar';
import Topbar from './Topbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 