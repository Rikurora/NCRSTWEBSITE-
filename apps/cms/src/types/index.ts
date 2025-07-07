export interface User {
  id: string;
  name: string;
  email: string;
  role: 'ccm_admin' | 'editor' | 'checker';
  department: string;
  status: 'active' | 'inactive';
  createdAt: string;
  lastLogin?: string;
  canChangePassword: boolean;
}

export interface Department {
  id: string;
  name: string;
  code: string;
  description: string;
  manager: string;
  editors: string[];
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
  sections: string[];
}

export interface ContentItem {
  id: string;
  title: string;
  type: 'webpage' | 'blog' | 'news' | 'product';
  section: string;
  content: string;
  author: string;
  department: string;
  status: 'draft' | 'pending_review' | 'reviewed' | 'pending_approval' | 'approved' | 'rejected' | 'published' | 'sent_back';
  createdAt: string;
  updatedAt: string;
  reviewedBy?: string;
  reviewedAt?: string;
  approvedBy?: string;
  approvedAt?: string;
  rejectionReason?: string;
  checkerNotes?: string;
}

export interface Change {
  id: string;
  contentId: string;
  type: 'create' | 'update' | 'delete';
  title: string;
  description: string;
  author: string;
  department: string;
  status: 'pending_review' | 'reviewed' | 'pending_approval' | 'approved' | 'rejected' | 'sent_back';
  createdAt: string;
  reviewedBy?: string;
  reviewedAt?: string;
  approvedBy?: string;
  approvedAt?: string;
  checkerNotes?: string;
  rejectionReason?: string;
  content?: ContentItem;
  previousContent?: ContentItem;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'approval_needed' | 'approved' | 'rejected' | 'sent_back' | 'review_needed';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  relatedId?: string;
}