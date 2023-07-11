"use client"
import Link from 'next/link';

export default function Home() {

  return (
    <div className="overflow-x-hidden md:overflow-x-visible">
        <style jsx>{`
            .custom-shadow {
              text-shadow: 0 0 10px rgba(245, 101, 101, 0.5);  // dark shadow for small screens
            }
            .custom-subtitle-shadow {
              text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            }


            @media (min-width: 1024px) {
              .custom-shadow {
                text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);  // light shadow for large screens
              }

            }
          `}</style>
    <div className="relative flex flex-col mt-[-73.6px]">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <video 
                  className="hidden  md:block absolute inset-0 min-w-full min-h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  >
                  <source src="/videos/energy-radiating-720p.mp4" type="video/mp4" />
                </video>

          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center flex-col px-4">
            <h1 className="text-red-500 md:text-white text-5xl lg:text-6xl font-bold font-vandiana text-center tracking-tighter custom-shadow leading-none">INTERSTELLAR BLEND</h1>
            <h2 className="text-white text-1xl lg:text-2xl font-bold font-vandiana text-center custom-subtitle-shadow">BECOME LIMITLESS WITH OUR PROPRIETARY HERBS</h2>
            <Link href="/search" className="mt-8 bg-white hover:bg-red-500 hover:text-white text-black text-md lg:text-lg font-bold py-3 px-6 w-full md:w-64 rounded-full shadow-lg text-center font-vandiana cursor-pointer">SHOP NOW</Link>
            <Link href="" className="mt-2 bg-custom-black hover:bg-red-500 text-white text-md lg:text-lg font-bold py-3 px-6 w-full md:w-64 rounded-full shadow-lg text-center font-vandiana cursor-pointer border-2 border-red-500">LEARN MORE</Link>
          </div>


      </div>

      <div className="px-4 py-10 text-center text-gray-400 font-bold text-lg tracking-widest">
        <small className="font-vandiana">
          REACH THE INTERSTELLAR
        </small>
      </div>

      <div className="flex justify-center">
        <div className="px-10 py-10 text-center">
          <h1 className="text-3xl font-bold text-red-500 font-vandiana">Drink</h1>
          <h1 className="text-4xl lg:text-5xl font-bold mt-6 ">Over 1000 organic ingredients</h1>
          <h2 className="text-xl mt-6 text-gray-400 w-2/3 max-w-740 mx-auto">Feel powerful, energetic, happy, and ready to kick ass with the most powerful natural ingredients in the universe.</h2>
          <div>
            <img className="rounded-md w-full md:max-w-lg mx-auto mt-8" src="images/ingredients.jpeg"/>
          </div>
          
          <div className="mt-32">
            <h1 className="text-3xl font-bold text-purple-500 font-vandiana">Fast</h1>
            <h1 className="text-5xl font-bold mt-6">Ultimate path to longevity</h1>
            <h2 className="text-xl mt-6 text-gray-400 max-w-740">Fasting</h2>
          </div>
          
        </div>

           
      </div>

      
    </div>


    </div>
  )
}
