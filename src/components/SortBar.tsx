import React from 'react';

const SortBar: React.FC = () => {
  return (
    <div className='sort-bar-container'>
      <select className='sort-select' defaultValue='sort-by'>
        <option disabled value='sort-by'>
          Sort By
        </option>
        <option value='name-az'>Name (A-Z)</option>
        <option value='name-za'>Name (Z-A)</option>
        <option value='price-lh'>Price (Low-High)</option>
        <option value='name-hl'>Price (High-Low)</option>
      </select>

      {/* TODO: make these dynamic based on products list */}
      <div className='tags-container'>
        <div className='tag'>budget</div>
        <div className='tag'>electronics</div>
        <div className='tag'>programming</div>
        <div className='tag'>synthesizers</div>
        <div className='tag'>other</div>
        <div className='tag'>books</div>
        <div className='tag'>hockey</div>
        <div className='tag'>clothes</div>
      </div>
    </div>
  );
};

export default SortBar;
