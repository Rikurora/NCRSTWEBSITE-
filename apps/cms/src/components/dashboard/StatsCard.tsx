import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  trend: 'up' | 'down';
}

export default function StatsCard({ title, value, icon: Icon, change, trend }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className="p-2 bg-ncrst-blue bg-opacity-10 rounded-lg">
          <Icon className="h-6 w-6 text-ncrst-blue" />
        </div>
        <h3 className="ml-3 text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <div className="mt-4">
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
        <div className="flex items-center mt-2">
          {trend === 'up' ? (
            <TrendingUp className="h-4 w-4 text-green-500" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500" />
          )}
          <span className={`ml-2 text-sm ${
            trend === 'up' ? 'text-green-500' : 'text-red-500'
          }`}>
            {change}
          </span>
        </div>
      </div>
    </div>
  );
} 