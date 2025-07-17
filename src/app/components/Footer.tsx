
import logo from '../assets/images/logo.png'
import ads_bar from '../assets/images/ads1.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import x from '../assets/images/x.png'
import location from '../assets/images/location.png'
import Image from 'next/image';
import React from 'react';
import { BiSearch } from 'react-icons/bi'

interface NavLink {
  id: string;
  label: string;
  href: string;
}

// --- Placeholder Data ---
const footerNavLinks: { title: string; links: NavLink[] }[] = [
  {
    title: 'Navigation', // Implicit title for the first column
    links: [
      { id: 'home', label: 'Home', href: '#' },
      { id: 'africa', label: 'Africa', href: '#' },
      { id: 'politics', label: 'Politics', href: '#' },
    ],
  },
  {
    title: 'Categories', // Implicit title for the second column
    links: [
      { id: 'business', label: 'Business', href: '#' },
      { id: 'sport', label: 'Sport', href: '#' },
      { id: 'health', label: 'Health', href: '#' },
    ],
  },
  {
    title: 'Content', // Implicit title for the third column
    links: [
      { id: 'tech', label: 'Tech', href: '#' },
      { id: 'opinion', label: 'Opinion', href: '#' },
      { id: 'videos', label: 'Videos', href: '#' },
    ],
  },
  {
    title: 'More', // Implicit title for the fourth column
    links: [
      { id: 'photos', label: 'Photos', href: '#' },
      { id: 'agc-archive', label: 'AGC Archive', href: '#' },
      { id: 'privacy-policy', label: 'Privacy Policy', href: '#' },
    ],
  },
  {
    title: 'Company', // Implicit title for the fifth column
    links: [
      { id: 'about-us', label: 'About Us', href: '#' },
      { id: 'contact-us', label: 'Contact Us', href: '#' },
      { id: 'advert-rate', label: 'Advert Rate', href: '#' },
    ],
  },
];

// --- Footer Component ---
// This can be a Server Component as it primarily displays static content.
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-[1200px]">
     
        <div className="flex flex-col md:justify-between md:items-center mb-8 md:mb-12 space-y-6 md:space-y-0">
  <div className="w-full flex mb-4 justify-between align-middle">  <Image src={logo} alt="AGC Newsnet Logo" className="w-14 h-auto" />
         <div className="flex gap-2">
            <Image     className="w-7 h-7" src={instagram} alt='social medias' />
            <Image     className="w-7 h-7" src={facebook} alt='social medias' />
            <Image     className="w-7 h-7" src={x} alt='social medias' />
            <Image     className="w-7 h-7" src={location} alt='social medias' />
            <Image     className="w-7 h-7" src={linkedin} alt='social medias' />
          </div></div>
       
 
          <div className="relative h-fit w-full m-0 flex">
           <input
              type="text"
              placeholder="Search AGC Newsnet"
              className="w-full bg-white border border-gray-700 rounded-[5px] py-2 px-4 pr-10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
    <BiSearch className='w-9 h-9 absolute text-gray-400 bottom-0 top-0 right-3 pt-2'/>
          </div>
        </div>

        {/* Navigation Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 border-t border-gray-700 pt-8 mt-8">
          {footerNavLinks.map((col, index) => (
            <div key={index}>
              {/* The image doesn't explicitly show titles for these columns, but they're implied */}
              {/* <h4 className="font-semibold text-white mb-4">{col.title}</h4> */}
              <ul>
                {col.links.map((link) => (
                  <li key={link.id} className="mb-2">
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-gray-500 text-sm">
          &copy; {currentYear} AGC Newsnet. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
