// components/common/FilterSidebar.tsx
import { FC } from 'react';
import { FilterSidebarProps,CategoryKey } from '../../interfaces';
import { UI_TEXT, FILTER_CATEGORIES, FILTER_MATERIALS, FILTER_PRICE_RANGES,CATEGORY_SUBCATEGORIES,CATEGORY_MATERIALS } from '../../constants';


const FilterSidebar: FC<FilterSidebarProps> = ({ filters, onFilterChange, isOpen, onClose }) => {
  // Get the first selected category to determine subcategories and materials
  const primaryCategory = filters.categories[0] as CategoryKey | undefined;
  const availableSubcategories = primaryCategory ? CATEGORY_SUBCATEGORIES[primaryCategory] || [] : [];
  const availableMaterials = primaryCategory ? CATEGORY_MATERIALS[primaryCategory] || FILTER_MATERIALS : FILTER_MATERIALS;

  return (
    <div
      className={`fixed inset-y-0 left-0 z-40 w-80 bg-gradient-to-b from-slate-50 to-white shadow-2xl transform transition-all duration-300 ease-in-out lg:relative lg:transform-none ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
      role="complementary"
      aria-label={UI_TEXT.FILTERS}
    >
      {/* Header */}
      <div className="p-6 border-b border-slate-200 bg-white lg:hidden">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            {UI_TEXT.FILTERS}
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors duration-200" 
            aria-label="Close filters"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Filter Bar integrated at top */}
      <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50">
        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5m14 14H5" />
          </svg>
          {UI_TEXT.CATEGORY}
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {FILTER_CATEGORIES.map((category) => (
            <label key={category} className="group flex items-center p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-white transition-all duration-200 cursor-pointer">
              <input
                type="checkbox"
                className="rounded-md border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 focus:ring-2 transition-all duration-200"
                checked={filters.categories.includes(category)}
                onChange={(e) => {
                  const newCategories = e.target.checked
                    ? [...filters.categories, category]
                    : filters.categories.filter((c) => c !== category);
                  onFilterChange({ ...filters, categories: newCategories });
                }}
                aria-label={`Filter by ${category}`}
              />
              <span className="ml-3 text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                {category.replace('Women\'s ', '').replace('Men\'s ', '')}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Dynamic content based on selected categories */}
      <div className="p-6 space-y-8 overflow-y-auto flex-1 bg-white">
        
        {/* Subcategories Section - Only show if a category is selected and has subcategories */}
        {primaryCategory && availableSubcategories.length > 0 && (
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-5 border border-slate-200">
            <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Subcategories
            </h3>
            <div className="space-y-3">
              {availableSubcategories.map((subcategory) => (
                <label key={subcategory} className="group flex items-center p-2 rounded-lg hover:bg-white/70 transition-all duration-200 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-slate-300 text-purple-600 focus:ring-purple-500 focus:ring-offset-0 focus:ring-2 transition-all duration-200"
                    checked={filters.subcategories?.includes(subcategory) || false}
                    onChange={(e) => {
                      const currentSubcategories = filters.subcategories || [];
                      const newSubcategories = e.target.checked
                        ? [...currentSubcategories, subcategory]
                        : currentSubcategories.filter((s) => s !== subcategory);
                      onFilterChange({ ...filters, subcategories: newSubcategories });
                    }}
                    aria-label={`Filter by ${subcategory}`}
                  />
                  <span className="ml-3 text-sm text-slate-600 group-hover:text-slate-800 transition-colors duration-200">
                    {subcategory}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Materials Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            {UI_TEXT.MATERIAL}
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {availableMaterials.map((material) => (
              <label key={material} className="group flex items-center p-2 rounded-lg hover:bg-white/70 transition-all duration-200 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-slate-300 text-green-600 focus:ring-green-500 focus:ring-offset-0 focus:ring-2 transition-all duration-200"
                  checked={filters.materials.includes(material)}
                  onChange={(e) => {
                    const newMaterials = e.target.checked
                      ? [...filters.materials, material]
                      : filters.materials.filter((m) => m !== material);
                    onFilterChange({ ...filters, materials: newMaterials });
                  }}
                  aria-label={`Filter by ${material}`}
                />
                <span className="ml-3 text-sm text-slate-600 group-hover:text-slate-800 transition-colors duration-200 capitalize">
                  {material.replace('-', ' ')}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            {UI_TEXT.PRICE_RANGE}
          </h3>
          <div className="space-y-3">
            {FILTER_PRICE_RANGES.map((range, index) => (
              <label key={index} className="group flex items-center p-3 rounded-lg border border-amber-200 hover:border-amber-300 hover:bg-white/70 transition-all duration-200 cursor-pointer">
                <input
                  type="radio"
                  name="priceRange"
                  className="border-slate-300 text-amber-600 focus:ring-amber-500 focus:ring-offset-0 focus:ring-2 transition-all duration-200"
                  checked={filters.priceRange?.min === range.min && filters.priceRange?.max === range.max}
                  onChange={() => onFilterChange({ ...filters, priceRange: range })}
                  aria-label={`Filter by ${range.label}`}
                />
                <span className="ml-3 text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters Button */}
        <div className="pt-4 border-t border-slate-200">
          <button
            onClick={() => onFilterChange({ categories: [], materials: [], subcategories: [], priceRange: null })}
            className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;