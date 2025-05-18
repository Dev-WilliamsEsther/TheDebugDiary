import React from 'react'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='w-full bg-[#9B7EBD] px-6 py-12'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
           <h2 className="text-2xl font-bold">The Debug Diary</h2>
           <p className="text-sm mt-2">
             Occasionally, I send love notes, life updates, and dev insights. Wanna be part of the crew?
             Subscribe to our Newsletter 👉
           </p>
           <div className="flex gap-4 mt-4 text-xl">
             <a href="#"><FaInstagram className="hover:text-[#D4BEE4]" /></a>
             <a href="#"><FaLinkedin className="hover:text-[#D4BEE4]" /></a>
             <a href="#"><FaYoutube className="hover:text-[#D4BEE4]" /></a>
             <a href="#"><FaXTwitter className="hover:text-[#D4BEE4]" /></a>
           </div>
         </div>

         <div>
           <h3 className="text-lg font-semibold mb-3">Explore</h3>
           <ul className="space-y-2 text-sm">
             <li><a href="#" className="hover:underline">Home</a></li>
             <li><a href="#" className="hover:underline">About</a></li>
             <li><a href="#" className="hover:underline">Blog</a></li>
             <li><a href="#" className="hover:underline">Contact</a></li>
             <li><a href=""  className="hover:underline">FAQs</a></li>
           </ul>
         </div>

         <div>
           <h3 className="text-lg font-semibold mb-3">Subscribe to Newsletter 💌</h3>
           <p className="text-sm mb-4">No spam. Just stories, tips, and vibes.</p>
           <form className="flex flex-col sm:flex-row gap-3">
             <input
               type="email"
               placeholder="Your email address"
               className="p-2 rounded border-[2px] text-black w-full sm:w-auto"
             />
             <button
               type="submit"
               className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
             >
               Submit
             </button>
           </form>
         </div>
       </div>

       <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm text-black/70">
       ©{new Date().getFullYear()} The Debug Diary. Built with 💻 & ☕️ </div>
    </div>
  )
}

export default Footer

