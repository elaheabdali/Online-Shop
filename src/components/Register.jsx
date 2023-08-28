import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Body = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  margin: 20px 0 50px;
`;

const Register = () => {
  const navigate = useNavigate();
  return (
    <Body>
      <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
        <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
          <div className='md:w-1/2 px-8 md:px-16'>
            <h2 className='font-bold text-2xl text-[#002D74]'>Register</h2>
            <p className='text-xs mt-4 text-[#002D74]'>
              Create your account. It’s free and only take a minute
            </p>

            <form action='' className='flex flex-col gap-4'>
              <input
                className='p-2 mt-8 rounded-xl border outline-none'
                type='text'
                placeholder='Full name'
                name='fullName'
              />
              <input
                className='p-2 mt-2 rounded-xl border outline-none'
                type='email'
                name='email'
                placeholder='Email'
              />
              <div className='relative'>
                <input
                  className='p-2 rounded-xl border w-full outline-none'
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='gray'
                  className='bi bi-eye absolute top-1/2 right-3 -translate-y-1/2'
                  viewBox='0 0 16 16'
                >
                  <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z' />
                  <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z' />
                </svg>
              </div>
              <div className='relative'>
                <input
                  type='password'
                  placeholder='Confirm Password'
                  class='border border-gray-400 py-1 px-2 w-full outline-none'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='gray'
                  className='bi bi-eye absolute top-1/2 right-3 -translate-y-1/2'
                  viewBox='0 0 16 16'
                >
                  <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z' />
                  <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z' />
                </svg>
              </div>

              <div class='relative'>
                <input type='checkbox' class='border border-gray-400'></input>
                <span className='text-xs m-1'>
                  I accept the
                  <a href='#' className='text-purple-500 font-semibold'>
                    Terms of Use
                  </a>
                  &
                  <a href='#' className='text-purple-500 font-semibold'>
                    Privacy Policy
                  </a>
                </span>
              </div>

              <button className='bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300'>
                Join Now
              </button>
            </form>

            <div className='mt-6 grid grid-cols-3 items-center text-gray-400'>
              <hr className='border-gray-400' />
              <p className='text-center text-sm'>OR</p>
              <hr className='border-gray-400' />
            </div>

            <div className='mt-3 text-xs flex justify-between items-center text-[#002D74]'>
              <p>You have an account?</p>
              <button
                onClick={() => navigate('/login')}
                className='py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300'
              >
                Login
              </button>
            </div>
          </div>

          <div className='md:block hidden w-1/2'>
            <img
              className='rounded-2xl'
              src='https://images.unsplash.com/photo-1544489305-d60f2a2c34e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBob25lJTIwJTI2JTIwbGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
              alt='...'
            />
          </div>
        </div>
      </section>
    </Body>
  );
};

export default Register;
