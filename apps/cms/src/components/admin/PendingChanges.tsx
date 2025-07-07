import { useState } from 'react';
import { CheckCircle, XCircle, Clock, FileCheck, Eye, X } from 'lucide-react';
import { Card } from '../common/Card';
import PreviewModal from '../common/PreviewModal';
import { Modal } from '../common/Modal';
import { useContent } from '../../context/ContentContext';
import { useAuth } from '../../context/AuthContext';
import { Change } from '../../types';

interface ApprovalModalProps {
  change: Change | null;
  isOpen: boolean;
  onClose: () => void;
  onApprove: (changeId: string, approved: boolean, reason: string, approvedBy: string) => void;
}

function ApprovalModal({ change, isOpen, onClose, onApprove }: ApprovalModalProps) {
  const { user } = useAuth();
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectForm, setShowRejectForm] = useState(false);

  const handleApprove = () => {
    if (change && user) {
      onApprove(change.id, true, '', user.name);
      onClose();
    }
  };

  const handleReject = () => {
    if (change && user && rejectionReason.trim()) {
      onApprove(change.id, false, rejectionReason, user.name);
      setRejectionReason('');
      setShowRejectForm(false);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Review Change" maxWidth="max-w-2xl">
      {change && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-[#ffd332]/20 to-[#e6be2d]/20 border border-[#ffd332] rounded-lg p-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">{change.title}</h4>
            <p className="text-gray-700 mb-4">{change.description}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600 font-medium">Author:</span>
                <span className="ml-2">{change.author}</span>
              </div>
              <div>
                <span className="text-gray-600 font-medium">Department:</span>
                <span className="ml-2">{change.department}</span>
              </div>
              <div>
                <span className="text-gray-600 font-medium">Type:</span>
                <span className="ml-2 capitalize">{change.type}</span>
              </div>
              <div>
                <span className="text-gray-600 font-medium">Created:</span>
                <span className="ml-2">{new Date(change.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            {change.checkerNotes && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                <div className="font-medium text-blue-900 text-sm">Checker Notes:</div>
                <div className="text-blue-800 text-sm mt-1">{change.checkerNotes}</div>
              </div>
            )}
          </div>
          
          {!showRejectForm ? (
            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowRejectForm(true)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                <XCircle className="h-4 w-4" />
                <span>Send Back for Amendment</span>
              </button>
              <button
                onClick={handleApprove}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-[#777675] bg-gradient-to-r from-[#ffd332] to-[#e6be2d] rounded-md hover:from-[#e6be2d] hover:to-[#d4a829]"
              >
                <CheckCircle className="h-4 w-4" />
                <span>Approve</span>
              </button>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h5 className="text-sm font-medium text-red-800 mb-3">Reason for Amendment</h5>
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="Please provide specific feedback for the editor to make amendments..."
                rows={4}
                className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <div className="flex justify-end space-x-3 mt-3">
                <button
                  onClick={() => {
                    setShowRejectForm(false);
                    setRejectionReason('');
                  }}
                  className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReject}
                  disabled={!rejectionReason.trim()}
                  className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 disabled:bg-red-300"
                >
                  Send Back for Amendment
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}

export default function PendingChanges() {
  const { changes, approveChange } = useContent();
  const [selectedChange, setSelectedChange] = useState<Change | null>(null);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredChanges = changes.filter(change => 
    statusFilter === 'all' || change.status === statusFilter
  );

  const stats = {
    pending_review: changes.filter(c => c.status === 'pending_review').length,
    pending_approval: changes.filter(c => c.status === 'pending_approval').length,
    approved: changes.filter(c => c.status === 'approved').length,
    sent_back: changes.filter(c => c.status === 'sent_back').length
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#777675] mb-2">Pending Changes</h2>
        <p className="text-gray-600">Review and approve content changes</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {Object.entries(stats).map(([status, count]) => (
          <Card
            key={status}
            title={status.replace('_', ' ').toUpperCase()}
            description={count.toString()}
            icon={
              status === 'pending_review' ? FileCheck :
              status === 'pending_approval' ? Clock :
              status === 'approved' ? CheckCircle :
              X
            }
            variant={
              status === 'pending_review' ? 'default' :
              status === 'pending_approval' ? 'gold' :
              status === 'approved' ? 'default' :
              'grey'
            }
            onClick={() => setStatusFilter(status === statusFilter ? 'all' : status)}
          />
        ))}
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {filteredChanges.map((change) => (
            <li key={change.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{change.title}</h3>
                  <div className="mt-1 text-sm text-gray-500">
                    <span>Type: {change.type}</span>
                    <span className="mx-2">•</span>
                    <span>Department: {change.department}</span>
                    <span className="mx-2">•</span>
                    <span>Author: {change.author}</span>
                    <span className="mx-2">•</span>
                    <span>Created: {new Date(change.createdAt).toLocaleDateString()}</span>
                  </div>
                  {change.checkerNotes && (
                    <div className="mt-2">
                      <span className="text-sm font-medium text-blue-800">Checker Notes:</span>
                      <div className="text-blue-800 text-sm mt-1">{change.checkerNotes}</div>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      setSelectedChange(change);
                      setIsActionModalOpen(true);
                    }}
                    className="p-2 text-gray-400 hover:text-gray-500"
                    title="Preview"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                  {change.status === 'pending_approval' && (
                    <button
                      onClick={() => {
                        setSelectedChange(change);
                        setIsApprovalModalOpen(true);
                      }}
                      className="p-2 text-green-600 hover:text-green-700"
                      title="Approve/Reject"
                    >
                      <CheckCircle className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedChange && (
        <>
          <PreviewModal
            content={selectedChange}
            isOpen={isActionModalOpen}
            onClose={() => {
              setIsActionModalOpen(false);
              setSelectedChange(null);
            }}
          />
          <ApprovalModal
            change={selectedChange}
            isOpen={isApprovalModalOpen}
            onClose={() => {
              setIsApprovalModalOpen(false);
              setSelectedChange(null);
            }}
            onApprove={approveChange}
          />
        </>
      )}
    </div>
  );
}