import React, { useEffect, useState } from 'react';
import Product from './ProductInterface';

interface Props {
  products: Product[];
  getSortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  handleTagClick: (e: HTMLDivElement) => void;
}

const SortBar: React.FC<Props> = ({
  products,
  getSortBy,
  setSortBy,
  handleTagClick,
}) => {
  const [getTags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchTags = (): string[] => {
      const tags: string[] = [];
      // eslint-disable-next-line array-callback-return
      products.map((product) => {
        for (let i = 0; i < product.tags.length; i++)
          if (!tags.includes(product.tags[i])) tags.push(product.tags[i]);
      });
      return tags;
    };
    const currentTags = fetchTags();
    setTags(currentTags);
  }, []);

  const toggleTag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget.classList.contains('disabled-tag')) {
      e.currentTarget.classList.remove('disabled-tag');
    } else {
      e.currentTarget.classList.add('disabled-tag');
    }
    handleTagClick(e.currentTarget);
  };

  return (
    <div className='sort-bar-container'>
      <div className='sort-select-container'>
        <label htmlFor='sort-by'>Sort by:</label>
        <select
          id='sort-by'
          className='sort-select'
          defaultValue={getSortBy}
          onChange={(e) => setSortBy(e.currentTarget.value)}
        >
          <option value='name-az'>Name (A-Z)</option>
          <option value='name-za'>Name (Z-A)</option>
          <option value='price-lh'>Price (Low-High)</option>
          <option value='price-hl'>Price (High-Low)</option>
        </select>
      </div>

      <div className='tags-container'>
        {getTags.map((tag) => {
          return (
            <div key={tag} className='tag' onClick={(e) => toggleTag(e)}>
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortBar;
