import { useState } from 'react';
import { X } from 'lucide-react';

interface MetadataFormProps {
  data: {
    title: string;
    section: string;
    summary: string;
    tags: string[];
    publishDate: string;
  };
  onChange: (field: 'title' | 'section' | 'summary' | 'tags' | 'publishDate', value: string | string[]) => void;
}

const SECTIONS = [
  'News & Updates',
  'Science & Research',
  'Innovation Hub',
  'Procurement',
  'Vacancies',
];

export default function MetadataForm({ data, onChange }: MetadataFormProps) {
  const [newTag, setNewTag] = useState('');

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newTag.trim()) {
      e.preventDefault();
      if (!data.tags.includes(newTag.trim())) {
        onChange('tags', [...data.tags, newTag.trim()]);
      }
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    onChange('tags', data.tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={data.title}
          onChange={(e) => onChange('title', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ncrst-blue focus:ring-ncrst-blue sm:text-sm"
          placeholder="Enter content title"
        />
      </div>

      {/* Section */}
      <div>
        <label htmlFor="section" className="block text-sm font-medium text-gray-700">
          Section
        </label>
        <select
          id="section"
          value={data.section}
          onChange={(e) => onChange('section', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ncrst-blue focus:ring-ncrst-blue sm:text-sm"
        >
          <option value="">Select a section</option>
          {SECTIONS.map((section) => (
            <option key={section} value={section}>
              {section}
            </option>
          ))}
        </select>
      </div>

      {/* Summary */}
      <div>
        <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
          Summary
        </label>
        <textarea
          id="summary"
          rows={3}
          value={data.summary}
          onChange={(e) => onChange('summary', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ncrst-blue focus:ring-ncrst-blue sm:text-sm"
          placeholder="Enter a brief summary"
        />
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
          Tags
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="tags"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyDown={handleTagKeyDown}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-ncrst-blue focus:ring-ncrst-blue sm:text-sm"
            placeholder="Add tags (press Enter)"
          />
        </div>
        {data.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-ncrst-blue text-white"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="ml-1 inline-flex items-center p-0.5 hover:bg-ncrst-blue-dark rounded-full"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Publish Date */}
      <div>
        <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700">
          Publish Date
        </label>
        <input
          type="date"
          id="publishDate"
          value={data.publishDate}
          onChange={(e) => onChange('publishDate', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ncrst-blue focus:ring-ncrst-blue sm:text-sm"
        />
      </div>
    </div>
  );
} 