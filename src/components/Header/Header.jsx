import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navigate = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Products',
      path: '/products',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];
  return (
    <header className='text-gray-600 body-font shadow-lg'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link
          to={'/'}
          className='flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-10 h-10 text-white p-2 bg-blue-500 rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span className='ml-3 text-xl'>OnlineShop</span>
        </Link>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
          {navigate.map((nav) => {
            return (
              <Link to={nav.path} className='mr-5 hover:text-gray-900'>
                {nav.name}
              </Link>
            );
          })}
        </nav>
        <Link
          to={'/register'}
          className='inline-flex items-center text-dark py-2 px-4 focus:outline-none text-base mt-4 md:mt-0'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            fill='currentColor'
            class='bi bi-person-add'
            viewBox='0 0 16 16'
          >
            <path d='M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z' />
            <path d='M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z' />
          </svg>
          Sign in
        </Link>
        <Link
          to={'/cart'}
          className='inline-flex items-center text-dark ml-1 py-2 px-4 text-base mt-4 md:mt-0'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='35'
            height='35'
            fill='currentColor'
            class='bi bi-cart'
            viewBox='0 0 16 16'
          >
            <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
          </svg>
          Go To Cart
        </Link>
      </div>
    </header>
  );
};

export default Header;
