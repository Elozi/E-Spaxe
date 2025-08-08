// components/common/CategoryGrid.tsx
import { FC } from 'react';
import CategoryCard from './CategoryCard';
import { CATEGORIES } from '../../constants';

const CategoryGrid: FC = () => {
  return (
    <section className="py-16 bg-white" role="region" aria-label="Product Categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {CATEGORIES.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;