// components/common/FilterSidebar.tsx
import { FC } from 'react';
import { FilterSidebarProps } from '../../interfaces';
import { UI_TEXT, FILTER_CATEGORIES, FILTER_MATERIALS, FILTER_PRICE_RANGES } from '../../constants';

const FilterSidebar: FC<FilterSidebarProps> = ({ filters, onFilterChange, isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-40 w-80 bg-white shadow-xl transform transition-transform duration-300 lg:relative lg:transform-none ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
      role="complementary"
      aria-label={UI_TEXT.FILTERS}
    >
      <div className="p-6 border-b lg:hidden">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{UI_TEXT.FILTERS}</h2>
          <button onClick={onClose} className="p-2 text-gray-600" aria-label="Close filters">
            ×
          </button>
        </div>
      </div>
      <div className="p-6 space-y-6 overflow-y-auto">
        <div>
          <h3 className="font-medium text-gray-900 mb-3">{UI_TEXT.CATEGORY}</h3>
          <div className="space-y-2">
            {FILTER_CATEGORIES.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={filters.categories.includes(category)}
                  onChange={(e) => {
                    const newCategories = e.target.checked
                      ? [...filters.categories, category]
                      : filters.categories.filter((c) => c !== category);
                    onFilterChange({ ...filters, categories: newCategories });
                  }}
                  aria-label={`Filter by ${category}`}
                />
                <span className="ml-2 text-sm text-gray-700 capitalize">{category.replace('Women\'s ', '').replace('Men\'s ', '')}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-medium text-gray-900 mb-3">{UI_TEXT.MATERIAL}</h3>
          <div className="space-y-2">
            {FILTER_MATERIALS.map((material) => (
              <label key={material} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={filters.materials.includes(material)}
                  onChange={(e) => {
                    const newMaterials = e.target.checked
                      ? [...filters.materials, material]
                      : filters.materials.filter((m) => m !== material);
                    onFilterChange({ ...filters, materials: newMaterials });
                  }}
                  aria-label={`Filter by ${material}`}
                />
                <span className="ml-2 text-sm text-gray-700 capitalize">{material.replace('-', ' ')}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-medium text-gray-900 mb-3">{UI_TEXT.PRICE_RANGE}</h3>
          <div className="space-y-2">
            {FILTER_PRICE_RANGES.map((range, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={filters.priceRange?.min === range.min && filters.priceRange?.max === range.max}
                  onChange={() => onFilterChange({ ...filters, priceRange: range })}
                  aria-label={`Filter by ${range.label}`}
                />
                <span className="ml-2 text-sm text-gray-700">{range.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;