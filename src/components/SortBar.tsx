import React, { useEffect, useState } from 'react';
import Product from './ProductInterface';

interface Props {
  products: Product[];
}

const SortBar: React.FC<Props> = ({ products }) => {
  const [getTags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchTags = (): string[] => {
      const tags: string[] = [];
      products.map((product) => {
        for (let i = 0; i < product.tags.length; i++) {
          if (!tags.includes(product.tags[i])) tags.push(product.tags[i]);
        }
      });
      return tags;
    };

    setTags(fetchTags());
  }, []);

  return (
    <div className='sort-bar-container'>
      <div className='sort-select-container'>
        <label htmlFor='sort-by'>Sort by:</label>
        <select id='sort-by' className='sort-select' defaultValue='name-az'>
          <option value='name-az'>Name (A-Z)</option>
          <option value='name-za'>Name (Z-A)</option>
          <option value='price-lh'>Price (Low-High)</option>
          <option value='name-hl'>Price (High-Low)</option>
        </select>
      </div>

      <div className='tags-container'>
        {getTags.map((tag) => {
          return (
            <div key={tag} className='tag'>
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortBar;
