import React, { useRef, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { PiTextAlignRight } from 'react-icons/pi';

const Header = () => {
  const menuRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const handleMouseEnter = (e) => {
    const menuRect = menuRef.current.getBoundingClientRect();
    const linkRect = e.target.getBoundingClientRect();
    setUnderlineStyle({
      left: linkRect.left - menuRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const [mobileMenu,setMobileMenu] = useState(false)

  const toggleMenu = () => {
    setMobileMenu( prev => !prev)
  }

  const navItems = ['HOME', 'MUSING', 'SELFCARE', 'BEAUTY', 'CAREER', 'RELATIONSHIPS', 'FOOD & RECIPES'];

  return (
    <div className='w-full h-20 bg-[#9B7EBD] flex items-center justify-around'>
      <div className='w-40 h-[60%] flex justify-center items-center'>
        <img src="images/trylogo-removebg-preview.png" alt="" className='w-14' />
        <h3 className='text-[14px] font-medium'>The Debug Diary</h3>
      </div>

      <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
        {mobileMenu ? <FiX  size={24}/> : <PiTextAlignRight size={24} />}
      </div>

      <div className=' hidden md:flex w-[50%] h-[60%] items-center relative' ref={menuRef}>
        <ul className='flex gap-[14px] ' onMouseLeave={handleMouseLeave}>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='relative cursor-pointer px-1'
              onMouseEnter={handleMouseEnter}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Sliding underline */}
        <div
          className=' absolute bottom-0 h-[2px] bg-black transition-all duration-300 ease-in-out'
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
            opacity: underlineStyle.opacity,
          }}
        />
      </div>
      {mobileMenu && (
        <ul className='absolute top-20 right-4 w-[70vw] h-120 bg-[#D4BEE4] rounded shadow-lg p-4 flex flex-col gap-3 z-50 md:hidden'>
        {navItems.map((item, index) => (
          <li key={index} className='cursor-pointer'>
            {item}
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default Header;
