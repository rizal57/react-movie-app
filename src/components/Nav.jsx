import { IconHome, IconPlayerPlay, IconSearch } from '@tabler/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="bg-slate-900 md:bg-transparent transition ease-in duration-300 md:h-screen h-16 flex md:flex-col justify-between items-center md:px-1 px-4 fixed left-0 md:top-0 bottom-0 md:w-[70px] w-full md:z-[inherit] z-50 shadow-md">
      <div className="brand md:pt-4">
        <NavLink to="/" className="text-2xl font-bold text-blue-500">
          <IconPlayerPlay className="stroke-blue-50" />
        </NavLink>
      </div>
      <div className="w-full px-8">
        <ul className="flex md:flex-col items-center justify-evenly gap-6">
          <li>
            <NavLink to="/search" className="flex items-center gap-2 hover:text-blue-500 transition ease-in duration-300">
              <IconSearch />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="flex items-center gap-2 hover:text-blue-500 transition ease-in duration-300">
              <IconHome />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="md:pb-8 flex-shrink-0">
        <img src="http://www.gravatar.com/avatar/?d=mp" alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default Nav;
