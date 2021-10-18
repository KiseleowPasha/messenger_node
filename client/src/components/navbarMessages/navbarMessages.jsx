import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbarMessages.css';

export const NavbarMessages = () => {
  const activeLink = useLocation().pathname.slice(1);
  return (
    <ul className='navbar'>
      <li className={activeLink === 'work' ? 'active' : ''}>
        <Link to='/work'>Рабочий чат</Link>
      </li>
      <li className={activeLink === 'flood' ? 'active' : ''}>
        <Link to='/flood'>Флудилка</Link>
      </li>
    </ul>
  );
};
