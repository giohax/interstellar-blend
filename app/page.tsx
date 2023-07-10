"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(userAgent);
    setIsMobile(mobile);
  }, []);


  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden absolute">
      {!isMobile  ? (
              <video 
                className="absolute inset-0 min-w-full min-h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
                >
                <source src="/videos/energy-radiating-720p.mp4" type="video/mp4" />
              </video>
            ) : (
              <div className="absolute inset-0 min-w-full min-h-full bg-center bg-cover">
                <Image
                  src="/images/energy-radiating-pic.png"
                  alt="Video Fallback"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-white text-3xl lg:text-6xl font-bold font-vandiana text-center tracking-tighter custom-shadow">INTERSTELLAR BLEND</h1>
          <h2 className="text-white text-lxl lg:text-2xl font-bold font-vandiana text-center custom-shadow">BECOME LIMITLESS WITH OUR PROPRIETARY HERBS</h2>
          <Link href="/search" className="mt-8 bg-white hover:bg-gray-100 text-black text-md lg:text-lg font-normal py-3 px-6 rounded-full shadow-lg font-vandiana cursor-pointer">SHOP NOW</Link>
        </div>
        <style jsx>{`
          .custom-shadow {
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);  // dark shadow for small screens
          }

          @media (min-width: 1024px) {
            .custom-shadow {
              text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);  // light shadow for large screens
            }
          }
        `}</style>

      </div>

    </>
  )
}
