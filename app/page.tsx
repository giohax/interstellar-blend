"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showFallbackImage, setShowFallbackImage] = useState(false);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden absolute">
      {!showFallbackImage ? (
              <video className="absolute inset-0 min-w-full min-h-full object-cover"
                autoPlay 
                muted 
                loop 
                onPause={()=>setShowFallbackImage(true)}
                >
                <source src="/videos/energy-radiating-720p.mp4" type="video/mp4" />
              </video>
            ) : (
              <div className="absolute inset-0 min-w-full min-h-full bg-center bg-cover">
                <Image
                  src="/images/interstellar-blend-bg.png"
                  alt="Video Fallback"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-white text-3xl lg:text-6xl font-bold font-vandiana text-center tracking-tighter">INTERSTELLAR BLEND</h1>
          <h2 className="text-white text-lxl lg:text-2xl font-bold font-vandiana text-center ">BECOME LIMITLESS WITH OUR PROPRIETARY HERBS</h2>
          <video className="inset-0 w-1/3 h-1/3 object-cover"
                autoPlay 
                muted 
                loop
                >
                <source src="/videos/energy-radiating-720p.mp4" type="video/mp4" />
              </video>
          <Link href="/search" className="mt-8 bg-white hover:bg-gray-100 text-black text-md lg:text-lg font-normal py-3 px-6 rounded-full shadow-lg font-vandiana cursor-pointer">SHOP NOW</Link>
        </div>

      </div>

    </>
  )
}
