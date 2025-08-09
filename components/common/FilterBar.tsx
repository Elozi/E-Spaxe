// components/common/FilterBar.tsx
import { FC } from 'react';
import { FilterBarProps } from '../../interfaces';
import { FILTER_CATEGORIES } from '../../constants';

const FilterBar: FC<FilterBarProps> = ({ categories, onFilterChange }) => {
  return (
    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-slate-200" role="group" aria-label="Quick category filters">
      <h3 className="text-lg font-bold mb-4 text-slate-800 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
        Quick Category Filter
      </h3>
      <div className="flex flex-wrap gap-3">
        {FILTER_CATEGORIES.map((category) => (
          <label key={category} className="group">
            <input
              type="checkbox"
              value={category}
              checked={categories.includes(category)}
              onChange={(e) => {
                const newCategories = e.target.checked 
                  ? [...categories, category]
                  : categories.filter((c) => c !== category);
                onFilterChange(newCategories);
              }}
              className="sr-only"
              aria-label={`Filter by ${category}`}
            />
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border-2 ${
              categories.includes(category)
                ? 'bg-blue-600 text-white border-blue-600 shadow-lg transform scale-105'
                : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md'
            }`}>
              {category.replace('Women\'s ', '').replace('Men\'s ', '')}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;