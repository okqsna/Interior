import React from 'react';
import './HeaderNav.scss';

const HeaderNav = () => {
  return (
    <div className='headerNav'>
      <button className="headerNav__button active">desk</button>
      <button className="headerNav__button">bedroom</button>
      <button className="headerNav__button">lighting</button>
      <button className="headerNav__button">accessories</button>
    </div>
  );
}

export default HeaderNav;