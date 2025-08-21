import React, { createContext, useContext, useCallback } from 'react';
import { useAuth } from './AuthContext';

import { WorkflowStatus } from '../types/workflow';

interface WorkflowContextType {
  canSubmitForReview: (currentStatus: WorkflowStatus) => boolean;
  canReview: (currentStatus: WorkflowStatus) => boolean;
  canPublish: (currentStatus: WorkflowStatus) => boolean;
  canEdit: (currentStatus: WorkflowStatus) => boolean;
  submitForReview: (contentId: string, comments?: string) => Promise<void>;
  requestChanges: (contentId: string, comments: string) => Promise<void>;
  approve: (contentId: string, comments?: string) => Promise<void>;
  publish: (contentId: string) => Promise<void>;
  getStatusLabel: (status: WorkflowStatus) => string;
  getStatusColor: (status: WorkflowStatus) => string;
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined);

export function WorkflowProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  const canSubmitForReview = useCallback((currentStatus: WorkflowStatus): boolean => {
    if (!user) return false;
    return (
      ['editor', 'ccm_admin'].includes(user.role) &&
      ['draft', 'changes_requested'].includes(currentStatus)
    );
  }, [user]);

  const canReview = useCallback((currentStatus: WorkflowStatus): boolean => {
    if (!user) return false;
    return (
      ['checker', 'ccm_admin'].includes(user.role) &&
      ['pending_review'].includes(currentStatus)
    );
  }, [user]);

  const canPublish = useCallback((currentStatus: WorkflowStatus): boolean => {
    if (!user) return false;
    return (
      user.role === 'ccm_admin' &&
      ['approved'].includes(currentStatus)
    );
  }, [user]);

  const canEdit = useCallback((currentStatus: WorkflowStatus): boolean => {
    if (!user) return false;
    return (
      ['editor', 'ccm_admin'].includes(user.role) &&
      ['draft', 'changes_requested'].includes(currentStatus)
    );
  }, [user]);

  const submitForReview = useCallback(async (_contentId: string, _comments?: string) => {
    // TODO: Implement API call
  }, []);

  const requestChanges = useCallback(async (_contentId: string, _comments: string) => {
    // TODO: Implement API call
  }, []);

  const approve = useCallback(async (_contentId: string, _comments?: string) => {
    // TODO: Implement API call
  }, []);

  const publish = useCallback(async (_contentId: string) => {
    // TODO: Implement API call
  }, []);

  const getStatusLabel = (status: WorkflowStatus): string => {
    const labels: Record<WorkflowStatus, string> = {
      draft: 'Draft',
      pending_review: 'Pending Review',
      changes_requested: 'Changes Requested',
      approved: 'Approved',
      published: 'Published'
    };
    return labels[status];
  };

  const getStatusColor = (status: WorkflowStatus): string => {
    const colors: Record<WorkflowStatus, string> = {
      draft: 'bg-gray-100 text-gray-800',
      pending_review: 'bg-yellow-100 text-yellow-800',
      changes_requested: 'bg-red-100 text-red-800',
      approved: 'bg-green-100 text-green-800',
      published: 'bg-blue-100 text-blue-800'
    };
    return colors[status];
  };

  const value = {
    canSubmitForReview,
    canReview,
    canPublish,
    canEdit,
    submitForReview,
    requestChanges,
    approve,
    publish,
    getStatusLabel,
    getStatusColor
  };

  return (
    <WorkflowContext.Provider value={value}>
      {children}
    </WorkflowContext.Provider>
  );
}

export function useWorkflow() {
  const context = useContext(WorkflowContext);
  if (context === undefined) {
    throw new Error('useWorkflow must be used within a WorkflowProvider');
  }
  return context;
} 