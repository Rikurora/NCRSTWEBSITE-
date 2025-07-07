import { Modal } from './Modal';
import { Change } from '../../types';

interface PreviewModalProps {
  content: Change;
  isOpen: boolean;
  onClose: () => void;
}

export default function PreviewModal({ content, isOpen, onClose }: PreviewModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Content Preview" maxWidth="max-w-4xl">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#ffd332]/20 to-[#e6be2d]/20 border border-[#ffd332] rounded-lg p-4">
          <h4 className="text-lg font-bold text-gray-900 mb-2">{content.title}</h4>
          <p className="text-gray-700 mb-4">{content.description}</p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600 font-medium">Author:</span>
              <span className="ml-2">{content.author}</span>
            </div>
            <div>
              <span className="text-gray-600 font-medium">Department:</span>
              <span className="ml-2">{content.department}</span>
            </div>
            <div>
              <span className="text-gray-600 font-medium">Type:</span>
              <span className="ml-2 capitalize">{content.type}</span>
            </div>
            <div>
              <span className="text-gray-600 font-medium">Created:</span>
              <span className="ml-2">{new Date(content.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        
        <div className="prose max-w-none">
          {/* Render content based on type */}
          {content.content?.content || ''}
        </div>
      </div>
    </Modal>
  );
} 