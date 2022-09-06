import React from 'react';
import Product from './ProductInterface';

interface Props {
  products: Product[];
  getSortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  getAllTags: string[];
  toggleTag: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SortBar: React.FC<Props> = ({
  products,
  getSortBy,
  setSortBy,
  getAllTags,
  toggleTag,
}) => {
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
        {getAllTags.map((tag) => {
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
