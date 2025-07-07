import { useState } from 'react';
import { Save, Eye, ArrowLeft } from 'lucide-react';
import RichTextEditor from '../../components/editor/RichTextEditor';
import FileUpload from '../../components/editor/FileUpload';
import MetadataForm from '../../components/editor/MetadataForm';
import PreviewModal from '../../components/editor/PreviewModal';
import WorkflowStatus from '../../components/editor/WorkflowStatus';
import { WorkflowStatus as Status } from '../../types/workflow';

interface ContentFormData {
  id?: string;
  title: string;
  section: string;
  summary: string;
  content: string;
  files: File[];
  tags: string[];
  publishDate: string;
  status: Status;
}

export default function Editor() {
  const [formData, setFormData] = useState<ContentFormData>({
    title: '',
    section: '',
    summary: '',
    content: '',
    files: [],
    tags: [],
    publishDate: new Date().toISOString().split('T')[0],
    status: 'draft'
  });

  const [showPreview, setShowPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (asDraft: boolean = true) => {
    setIsSaving(true);
    try {
      // TODO: Implement API call to save content
      await new Promise(resolve => setTimeout(resolve, 1000)); // Mock API call
      console.log('Saving content:', { ...formData, status: asDraft ? 'draft' : 'pending_review' });
    } catch (error) {
      console.error('Error saving content:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleContentChange = (value: string) => {
    setFormData(prev => ({ ...prev, content: value }));
  };

  const handleMetadataChange = (field: keyof ContentFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (files: File[]) => {
    setFormData(prev => ({ ...prev, files: [...prev.files, ...files] }));
  };

  const handleStatusChange = (newStatus: Status) => {
    setFormData(prev => ({ ...prev, status: newStatus }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => window.history.back()}
                className="mr-4 text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-semibold text-gray-900">Create New Content</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setShowPreview(true)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </button>
              <button
                type="button"
                onClick={() => handleSave(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ncrst-blue hover:bg-ncrst-blue-dark"
                disabled={isSaving}
              >
                <Save className="h-4 w-4 mr-2" />
                {isSaving ? 'Saving...' : 'Save Draft'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Content</h2>
              <RichTextEditor
                value={formData.content}
                onChange={handleContentChange}
              />
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Files & Media</h2>
              <FileUpload onUpload={handleFileUpload} files={formData.files} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Status</h2>
              <WorkflowStatus
                contentId={formData.id || 'new'}
                status={formData.status}
                onStatusChange={handleStatusChange}
              />
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Metadata</h2>
              <MetadataForm
                data={formData}
                onChange={handleMetadataChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <PreviewModal
          content={formData}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
} 