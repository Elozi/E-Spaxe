// components/common/CategoryGrid.tsx
import { FC,useState,useEffect } from 'react';
import axios from 'axios';
import CategoryCard from './CategoryCard';
import { Category } from '../../interfaces';
import { CATEGORIES, CATEGORIES_META } from '../../constants';

const CategoryGrid: FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
      useEffect(() => {
    const fetchCategoryImages = async () => {
      const updatedCategories = await Promise.all(
        CATEGORIES_META.map(async (cat) => {
          try {
            const res = await axios.get(`https://dummyjson.com/products/category/${cat.slug}?limit=1`);
            const product = res.data.products[0];
            return {
              ...cat,
              image: product?.thumbnail || '', // fallback in case no image
            };
          } catch (error) {
            console.error(`Failed to fetch image for ${cat.slug}`, error);
            return {
              ...cat,
              image: '', // fallback empty
            };
          }
        })
      );
      setCategories(updatedCategories);
    };

    fetchCategoryImages();
  }, []);

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