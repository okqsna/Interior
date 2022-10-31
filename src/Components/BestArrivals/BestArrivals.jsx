import React from 'react';
import BestGoods from './BestGoods/BestGoods.jsx';
import GoodsHeader from './GoodsHeader/GoodsHeader';

const BestArrivals = () => {
  return (
    <div className='bestArrivals'>
      <GoodsHeader />
      <BestGoods />
    </div>
  );
}

export default BestArrivals;