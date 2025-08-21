import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, NewspaperIcon, AcademicCapIcon, 
  LightBulbIcon, BuildingLibraryIcon, BriefcaseIcon 
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'News & Updates', href: '/news', icon: NewspaperIcon },
  { name: 'Science & Research', href: '/science', icon: AcademicCapIcon },
  { name: 'Innovation Hub', href: '/innovation', icon: LightBulbIcon },
  { name: 'Procurement', href: '/procurement', icon: BuildingLibraryIcon },
  { name: 'Vacancies', href: '/vacancies', icon: BriefcaseIcon },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-ncrst-blue">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                src="/logo.png"
                alt="NCRST Logo"
              />
              <span className="ml-2 text-xl font-bold text-white">NCRST CMS</span>
            </div>
            <nav className="mt-8 flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      group flex items-center px-2 py-2 text-sm font-medium rounded-md
                      ${isActive 
                        ? 'bg-ncrst-green text-white' 
                        : 'text-gray-300 hover:bg-ncrst-green/20 hover:text-white'
                      }
                    `}
                  >
                    <item.icon
                      className={`
                        mr-3 flex-shrink-0 h-6 w-6
                        ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}
                      `}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
} 