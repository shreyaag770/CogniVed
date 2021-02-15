import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  return (
    <React.Fragment>
    <nav
      className='flex justify-between items-center h-16 bg-white text-black fixed w-screen shadow-xl font-mono'
      role='navigation'
    >
      <Link to='/' className='pl-8'>
        <div className="flex">
          {/* <div className="text-blue-300 font-md">Cogni</div><div className="text-green-700 font-md">Ved</div> */}
          <img src="./logo.png" alt="logo" className="h-12 w-auto p-2"/>
        </div>
      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block  hidden'>
        <Link to='/' className='p-6 focus:bg-blue-100'>
          Home
        </Link>
        <Link to='/about' className='p-6 focus:bg-blue-100'>
          About Us
        </Link>
        <Link to='/' className='p-6 focus:bg-blue-100'>
          What we do
        </Link>
        <Link to='/team' className='p-6 focus:bg-blue-100'>
          Our team
        </Link>
        <Link to='/' className='p-6 focus:bg-blue-100'>
          Career
        </Link>
       
        <Link to='/' className='p-6 focus:bg-blue-100'>
          Contact Us
        </Link>
        <Link to='/' className='p-4 focus:bg-blue-100' >
          <button className="text-sm bg-blue-300 rounded-2xl text-white px-4 py-2">
            Log in
          </button>
        </Link>
      </div>
    </nav>
   </React.Fragment>
  );
};

export default Navbar;