import { FC } from 'react';
import { FilterBarProps } from '../../interfaces';

const FilterBar: FC<FilterBarProps> = ({ categories, onFilterChange }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Filter by Category</h3>
      <div className="flex gap-2">
        {categories.map((category) => (
          <label key={category} className="flex items-center">
            <input
              type="checkbox"
              value={category}
              onChange={(e) => {
                // Placeholder for filter logic
                onFilterChange([e.target.value]);
              }}
              className="mr-2"
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;