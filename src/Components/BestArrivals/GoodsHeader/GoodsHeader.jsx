import React from 'react';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import HeaderNav from './HeaderNav/HeaderNav';
import './GoodsHeader.scss';

const GoodsHeader = () => {
  return (
    <div className='goodsHeader container'>
      <HeaderInfo />
      <HeaderNav />
    </div>
  );
}

export default GoodsHeader;