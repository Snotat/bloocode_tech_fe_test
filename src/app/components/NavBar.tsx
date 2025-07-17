
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


import logo from '../assets/images/logo.png';
import ads_bar from '../assets/images/ads1.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
import location from '../assets/images/location.png'; 
import { BiSearch } from 'react-icons/bi';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'; 

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full text-white bg-gray-900 flex flex-col max-md:flex-col-reverse">
      <div className="bg-pink-700 text-sm px-4 py-2 flex flex-row justify-between items-center max-md:hidden">
        <div className="hidden md:flex gap-4">
          <Link href="#" className="hover:underline">About Us</Link>
          <Link href="#" className="hover:underline">Contact Us</Link>
          <Link href="#" className="hover:underline">AGC Archive</Link>
          <Link href="#" className="hover:underline">Advert Rate</Link>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">AGC VIP</Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
          <span className="text-xs sm:text-sm mb-1 sm:mb-0">Sunday, July 7, 2025</span>
          <div className="flex gap-2">
            <Image className="w-5 h-5" src={instagram} alt='Instagram' />
            <Image className="w-5 h-5" src={facebook} alt='Facebook' />
            <Image className="w-5 h-5" src={twitter} alt='Twitter' />
            <Image className="w-5 h-5" src={location} alt='Location' /> 
            <Image className="w-5 h-5" src={linkedin} alt='LinkedIn' />
          </div>
        </div>
      </div>

      <div className="bg-black max-md:bg-white px-4 py-4 md:py-7 flex justify-center">
        <Image
          src={ads_bar}
          alt="Ad Banner"
          className="w-full max-w-3xl h-auto object-contain" 
        />
      </div>

      <div className="bg-black px-4 py-3 md:py-2 flex items-center justify-between text-white border-t border-gray-700 relative">
        <button className="md:hidden text-white text-2xl" onClick={toggleMobileMenu} aria-label="Toggle navigation">
          {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 md:ml-0 mx-auto md:mx-0">
          <Image src={logo} alt="logo" className="w-16 h-auto md:w-20" />
        </div>
        <nav className="hidden md:flex flex-wrap gap-3 text-sm justify-center flex-grow px-3">
          {[
            "Home", "Africa", "Politics", "Business", "Sport", "Health", "Tech",
            "Opinion", "Photos", "Videos", "Audio",
          ].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:underline whitespace-nowrap">
              {item}
            </Link>
          ))}
        </nav>
        <nav className="hidden md:flex w-fit flex-nowrap gap-3 text-sm border-l-[1px] border-gray-700 pl-5 ml-5">
          {[
            "Photos", "Videos", "Audio",
          ].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:underline whitespace-nowrap">
              {item}
            </Link>
          ))}
        </nav>

        <BiSearch className='hidden md:block w-6 mx-3 text-white cursor-pointer' />

        <div className="hidden md:flex w-fit text-sm flex-nowrap align-middle gap-3 ml-3">
          <Link href="/login" className='hover:underline whitespace-nowrap'>Log in</Link>
          <span>/</span>
          <Link href="/signup" className='hover:underline whitespace-nowrap'>Sign up</Link>
        </div>

        <div className="flex md:hidden items-center gap-4 ml-auto">
          <BiSearch className='w-6 text-white cursor-pointer' />
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center p-4 overflow-y-auto">
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={toggleMobileMenu} aria-label="Close menu">
            <HiOutlineX />
          </button>
          <nav className="flex flex-col text-xl space-y-4">
            {[
              "Home", "Africa", "Politics", "Business", "Sport", "Health", "Tech",
              "Opinion", "Photos", "Videos", "Audio",
            ].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-white hover:text-pink-500 transition-colors" onClick={toggleMobileMenu}>
                {item}
              </Link>
            ))}
            <div className="border-t border-gray-700 pt-4 mt-4 flex flex-col space-y-2">
              <Link href="/login" className='text-white hover:text-pink-500 transition-colors' onClick={toggleMobileMenu}>Log in</Link>
              <Link href="/signup" className='text-white hover:text-pink-500 transition-colors' onClick={toggleMobileMenu}>Sign up</Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default NavBar;
