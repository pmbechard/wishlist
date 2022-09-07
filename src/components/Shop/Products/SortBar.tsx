import React from 'react';
import Product from './ProductInterface';

interface Props {
  products: Product[];
  getSortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  getAllTags: string[];
  getActiveTags: string[];
  toggleTag: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  setShopFade: React.Dispatch<React.SetStateAction<boolean>>;
}

const SortBar: React.FC<Props> = ({
  products,
  getSortBy,
  setSortBy,
  getAllTags,
  getActiveTags,
  toggleTag,
  setShopFade,
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
          onClick={() => setShopFade(false)}
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
            <div
              key={tag}
              className={`tag ${getActiveTags.includes(tag) || 'disabled-tag'}`}
              onClick={(e) => {
                toggleTag(e);
                setShopFade(false);
              }}
            >
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortBar;
