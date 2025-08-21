import { FileEdit, CheckCircle2, AlertCircle } from 'lucide-react';

interface Activity {
  id: string;
  type: 'edit' | 'publish' | 'review';
  content: string;
  user: string;
  timestamp: string;
  section: string;
}

// Mock data - replace with API call
const activities: Activity[] = [
  {
    id: '1',
    type: 'edit',
    content: 'Updated Research Statistics for 2024',
    user: 'John Smith',
    timestamp: '2 hours ago',
    section: 'Science & Research'
  },
  {
    id: '2',
    type: 'publish',
    content: 'Published new Innovation Hub Program',
    user: 'Sarah Johnson',
    timestamp: '4 hours ago',
    section: 'Innovation'
  },
  {
    id: '3',
    type: 'review',
    content: 'Requested changes to Procurement Notice',
    user: 'Content Checker',
    timestamp: '5 hours ago',
    section: 'Procurement'
  },
  {
    id: '4',
    type: 'edit',
    content: 'Updated Job Vacancy Requirements',
    user: 'John Smith',
    timestamp: '1 day ago',
    section: 'Vacancies'
  },
  {
    id: '5',
    type: 'publish',
    content: 'Published Monthly Newsletter',
    user: 'Sarah Johnson',
    timestamp: '1 day ago',
    section: 'News'
  }
];

export default function ActivityFeed() {
  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'edit':
        return <FileEdit className="h-5 w-5 text-ncrst-blue" />;
      case 'publish':
        return <CheckCircle2 className="h-5 w-5 text-ncrst-green" />;
      case 'review':
        return <AlertCircle className="h-5 w-5 text-ncrst-gold" />;
    }
  };

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {activities.map((activity, idx) => (
          <li key={activity.id}>
            <div className="relative pb-8">
              {idx !== activities.length - 1 ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center ring-8 ring-white">
                    {getActivityIcon(activity.type)}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">
                        {activity.user}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      {activity.timestamp}
                    </p>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    <p>{activity.content}</p>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="inline-flex items-center rounded-full bg-ncrst-blue/10 px-2 py-1 text-xs font-medium text-ncrst-blue">
                      {activity.section}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 