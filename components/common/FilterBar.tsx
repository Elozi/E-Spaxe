// components/common/FilterBar.tsx
import { FC } from 'react';
import { FilterBarProps } from '../../interfaces';
import { NAV_ITEMS } from '../../constants';

const FilterBar: FC<FilterBarProps> = ({ categories, onFilterChange }) => {
  const defaultCategories = NAV_ITEMS.find((item) => item.label === 'Collections')?.dropdownContent?.[0].links || [];

  return (
    <div className="mb-4" role="group" aria-label="Filter products by category">
      <h3 className="text-lg font-semibold mb-2 text-gray-900">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        {defaultCategories.map((category) => (
          <label key={category} className="flex items-center">
            <input
              type="checkbox"
              value={category}
              onChange={(e) => {
                const selected = e.target.checked ? [e.target.value] : [];
                onFilterChange(selected);
              }}
              className="mr-2"
              aria-label={`Filter by ${category}`}
            />
            <span className="text-gray-600">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;