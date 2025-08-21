import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, File, Image as ImageIcon } from 'lucide-react';

interface FileUploadProps {
  onUpload: (files: File[]) => void;
  files: File[];
}

export default function FileUpload({ onUpload, files }: FileUploadProps) {
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setUploading(true);
    try {
      // TODO: Implement actual file upload to server
      await new Promise(resolve => setTimeout(resolve, 1000)); // Mock upload delay
      onUpload(acceptedFiles);
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setUploading(false);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    }
  });

  const removeFile = (fileToRemove: File) => {
    onUpload(files.filter(file => file !== fileToRemove));
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <ImageIcon className="h-5 w-5 text-ncrst-blue" />;
    }
    return <File className="h-5 w-5 text-ncrst-blue" />;
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-ncrst-blue bg-ncrst-blue/5'
            : 'border-gray-300 hover:border-ncrst-blue'
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center">
          <Upload
            className={`h-10 w-10 mb-4 ${
              isDragActive ? 'text-ncrst-blue' : 'text-gray-400'
            }`}
          />
          {uploading ? (
            <p className="text-sm text-gray-500">Uploading files...</p>
          ) : isDragActive ? (
            <p className="text-sm text-gray-500">Drop the files here...</p>
          ) : (
            <div>
              <p className="text-sm text-gray-500">
                Drag & drop files here, or click to select files
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Supported formats: PNG, JPG, GIF, PDF, DOC, DOCX
              </p>
            </div>
          )}
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            Uploaded Files ({files.length})
          </h3>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  {getFileIcon(file)}
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file)}
                  className="text-gray-400 hover:text-red-500"
                  title="Remove file"
                >
                  <X className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 