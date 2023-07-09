'use client'
import Image from 'next/image'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
      cursor.style.top = e.pageY + 'px';
      cursor.style.left = e.pageX + 'px';
    });
  }, []);
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
        <video className="absolute inset-0 min-w-full min-h-full object-cover" autoPlay muted loop>
          <source src="/videos/energy-radiating-720p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-white text-3xl lg:text-6xl font-bold font-vandiana text-center">INTERSTELLAR BLEND</h1>
          <h2 className="text-white text-lxl lg:text-2xl font-bold font-vandiana text-center">BECOME LIMITLESS WITH OUR PROPRIETARY HERBS</h2>
          <a className="mt-8 bg-white hover:bg-gray-100 text-black text-md lg:text-lg font-normal py-3 px-6 rounded-full shadow-lg font-vandiana cursor-pointer">SHOP NOW</a>
        </div>
      </div>

    </>
  )
}
