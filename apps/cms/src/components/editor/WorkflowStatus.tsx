import { useState } from 'react';
import { useWorkflow } from '../../context/WorkflowContext';
import { WorkflowStatus as Status } from '../../types/workflow';
import { AlertCircle, CheckCircle, Clock, Send } from 'lucide-react';

interface WorkflowStatusProps {
  contentId: string;
  status: Status;
  onStatusChange: (newStatus: Status) => void;
}

export default function WorkflowStatus({ contentId, status, onStatusChange }: WorkflowStatusProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [comment, setComment] = useState('');
  const workflow = useWorkflow();

  const handleAction = async (action: 'submit' | 'approve' | 'request_changes' | 'publish') => {
    setIsSubmitting(true);
    try {
      switch (action) {
        case 'submit':
          await workflow.submitForReview(contentId, comment);
          onStatusChange('pending_review');
          break;
        case 'approve':
          await workflow.approve(contentId, comment);
          onStatusChange('approved');
          break;
        case 'request_changes':
          await workflow.requestChanges(contentId, comment);
          onStatusChange('changes_requested');
          break;
        case 'publish':
          await workflow.publish(contentId);
          onStatusChange('published');
          break;
      }
      setComment('');
      setShowCommentModal(false);
    } catch (error) {
      console.error('Error performing workflow action:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'draft':
        return <Clock className="h-5 w-5 text-gray-500" />;
      case 'pending_review':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'changes_requested':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'published':
        return <Send className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Status Badge */}
      <div className="flex items-center space-x-2">
        {getStatusIcon()}
        <span className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${workflow.getStatusColor(status)}`}>
          {workflow.getStatusLabel(status)}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-y-2">
        {workflow.canSubmitForReview(status) && (
          <button
            onClick={() => setShowCommentModal(true)}
            disabled={isSubmitting}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ncrst-blue hover:bg-ncrst-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ncrst-blue"
          >
            <Send className="h-4 w-4 mr-2" />
            Submit for Review
          </button>
        )}

        {workflow.canReview(status) && (
          <div className="flex space-x-2">
            <button
              onClick={() => setShowCommentModal(true)}
              disabled={isSubmitting}
              className="flex-1 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Approve
            </button>
            <button
              onClick={() => setShowCommentModal(true)}
              disabled={isSubmitting}
              className="flex-1 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <AlertCircle className="h-4 w-4 mr-2" />
              Request Changes
            </button>
          </div>
        )}

        {workflow.canPublish(status) && (
          <button
            onClick={() => handleAction('publish')}
            disabled={isSubmitting}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ncrst-green hover:bg-ncrst-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ncrst-green"
          >
            <Send className="h-4 w-4 mr-2" />
            Publish
          </button>
        )}
      </div>

      {/* Comment Modal */}
      {showCommentModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setShowCommentModal(false)}
            />

            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Add Comments
                </h3>
                <textarea
                  rows={4}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-ncrst-blue focus:ring-ncrst-blue sm:text-sm"
                  placeholder="Add any comments or feedback..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => {
                    if (workflow.canSubmitForReview(status)) {
                      handleAction('submit');
                    } else if (workflow.canReview(status)) {
                      handleAction(comment.trim() ? 'request_changes' : 'approve');
                    }
                  }}
                  disabled={isSubmitting}
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-ncrst-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-ncrst-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ncrst-blue sm:ml-3 sm:w-auto sm:text-sm"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowCommentModal(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ncrst-blue sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 