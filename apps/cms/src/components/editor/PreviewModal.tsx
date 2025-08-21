import { X } from 'lucide-react';

interface PreviewModalProps {
  content: {
    title: string;
    section: string;
    summary: string;
    content: string;
    tags: string[];
    publishDate: string;
  };
  onClose: () => void;
}

export default function PreviewModal({ content, onClose }: PreviewModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />

        {/* Modal panel */}
        <div className="inline-block w-full max-w-4xl transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:align-middle">
          {/* Header */}
          <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Content Preview</h3>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-gray-50 text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-5 max-h-[calc(100vh-200px)] overflow-y-auto">
            {/* Article Header */}
            <div className="mb-8">
              <div className="text-sm text-ncrst-blue mb-2">{content.section}</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {content.title}
              </h1>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <time dateTime={content.publishDate}>
                  {new Date(content.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  {content.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-ncrst-blue bg-opacity-10 text-ncrst-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="prose prose-lg text-gray-500 mb-8">
              {content.summary}
            </div>

            {/* Main Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 