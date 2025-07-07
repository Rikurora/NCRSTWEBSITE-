import { Clock, CheckCircle, XCircle } from 'lucide-react';

interface PendingItem {
  id: string;
  title: string;
  author: string;
  type: string;
  submitted: string;
}

// Mock data - replace with API call
const pendingItems: PendingItem[] = [
  {
    id: '1',
    title: 'New Research Grant Announcement',
    author: 'John Smith',
    type: 'News',
    submitted: '1 hour ago'
  },
  {
    id: '2',
    title: 'Innovation Hub Success Story',
    author: 'Sarah Johnson',
    type: 'Innovation',
    submitted: '2 hours ago'
  },
  {
    id: '3',
    title: 'Tender Notice Update',
    author: 'Mike Brown',
    type: 'Procurement',
    submitted: '3 hours ago'
  }
];

export default function PendingApprovals() {
  return (
    <div className="space-y-4">
      {pendingItems.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                <Clock className="h-5 w-5 text-ncrst-gold" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                <div className="mt-1">
                  <span className="text-xs text-gray-500">By {item.author}</span>
                  <span className="mx-1 text-gray-300">•</span>
                  <span className="text-xs text-gray-500">{item.submitted}</span>
                </div>
                <span className="mt-1 inline-flex items-center rounded-full bg-ncrst-blue/10 px-2 py-1 text-xs font-medium text-ncrst-blue">
                  {item.type}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                className="p-1 text-green-600 hover:text-green-700"
                title="Approve"
              >
                <CheckCircle className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="p-1 text-red-600 hover:text-red-700"
                title="Reject"
              >
                <XCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 