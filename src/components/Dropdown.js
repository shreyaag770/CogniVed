import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <React.Fragment>
    <div
      className={
        
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-blue-300 text-white pt-16'
          : 'hidden'
      }
      onClick={toggle}
      
    >
      <Link to='/' className='p-4'>
          Home
        </Link>
        <Link to='/about' className='p-4'>
          About Us
        </Link>
        <Link to='/whatWeDo' className='p-4'>
          What we do
        </Link>
        <Link to='/team' className='p-4'>
          Our team
        </Link>
        <Link to='/career' className='p-4'>
          Career
        </Link>
       
        <Link to='/contact' className='p-4'>
          Contact Us
        </Link>
        <Link to='/contact' className='p-4'>
          <button>
            Log In
          </button>
        </Link>
    </div>
     </React.Fragment>
  );
};

export default Dropdown;