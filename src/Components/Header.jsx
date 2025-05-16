import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-20 bg-green-200 flex items-center justify-around'>
      <div className='w-40 h-[60%] flex justify-center items-center'>
        <img src="images/trylogo-removebg-preview.png" alt="" className='w-14' />
        <h3 className='text-[14px] font-medium '>The Debug Diary</h3>
      </div>
      <div className='w-[50%] h-[60%] flex justify-around items-center'>
        <ul className='flex gap-[14px]'>
          <li>HOME</li>
          <li>MUSING</li>
          <li>SELFCARE</li>
          <li>BEAUTY</li>
          <li>CAREER</li>
          <li>RELATIONSHIPS</li>
          <li>FOOD & RECIPES</li>
        </ul>
      </div>
    </div>
  )
}

export default Header