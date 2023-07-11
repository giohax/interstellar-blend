"use client"
import Link from 'next/link';

export default function Home() {

  return (
    <div className="overflow-x-hidden md:overflow-x-visible">
      <style jsx>{`
            .custom-shadow {
              text-shadow: 0 0 10px rgba(245, 101, 101, 0.5);  // dark shadow for small screens
            }



            @media (min-width: 1024px) {
              .custom-shadow {
                text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);  // light shadow for large screens
              }
              .custom-subtitle-shadow {
                text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
              }

            }
        `}</style>
      <div className="relative flex flex-col mt-[-73.6px]">
        <div className="relative h-mobile-section md:h-screen flex items-center justify-center overflow-hidden">
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

        <div className="px-4 py-0 md:py-10 text-center text-gray-400 font-bold text-lg tracking-widest">
          <small className="font-vandiana">
            REACH THE INTERSTELLAR
          </small>
        </div>

        <div className="mt-4 mx-auto flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-black to-red-500"></div>
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white">
            <span className="text-lg text-black font-bold">1</span>
          </div>
        </div>


        <div className="flex justify-center">
          <div className="px-10 py-10 text-center">
            <h1 className="text-xl md:text-3xl font-bold text-red-500 font-vandiana">Drink</h1>
            <h1 className="text-4xl md:text-5xl font-bold mt-6 ">Over 1000 organic ingredients</h1>
            <h2 className="text-l md:text-xl mt-6 text-gray-400 w-5/6 max-w-740 mx-auto">Feel powerful, energetic, happy, and ready to kick ass with the most powerful natural ingredients in the universe.</h2>



            <div className="mx-auto flex max-w-5xl flex-col py-6 md:flex-row mt-8 space-y-10 md:space-y-0 space-x-0 md:space-x-10">
              <div className="order-first flex-none md:w-1/2">
                <img className="rounded-md" src="images/ingredients.jpeg" />
              </div>

              <div className="flex flex-col justify-between leading-relaxed space-y-10">
                <div className="text-center md:text-start">
                  <h1 className="font-bold text-2xl mb-2">Feel young again</h1>
                  <p className="text-gray-400">
                    Rekindle the vitality of your youth with our organic herb blend. It&apos;s more than just a drink; it&apos;s a
                    rejuvenating experience that breathes new life into your routine. Each sip brings a rush of natural
                    ingredients designed to keep you feeling fresh, lively, and as youthful as ever.
                  </p>
                </div>
                <div className="text-center md:text-start">
                  <h1 className="font-bold text-2xl mb-2">Lose weight</h1>
                  <p className="text-gray-400">
                    Embrace a healthier, lighter you with our expertly crafted blend. Each
                    ingredient is chosen for its natural weight management properties, helping you on your journey to a
                    leaner physique. But it&apos;s not just about losing weight - it's about gaining confidence, embracing
                    health, and falling in love with yourself again.
                  </p>
                </div>
                <div className="text-center md:text-start">
                  <h1 className="font-bold text-2xl mb-2">Become limitless</h1>
                  <p className="text-gray-400">
                    Tap into your ultimate potential with our organic herb blend. It's not just a drink; it&apos;s a key to
                    unlocking boundless energy, enhancing focus, and boosting productivity. With over 1000 powerful,
                    natural ingredients, it&apos;s the fuel you need to break through boundaries and embrace the limitless
                    possibilities of your day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 mx-auto flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-black to-purple-500"></div>
          <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
            <span className="text-lg text-black font-bold">2</span>
          </div>
        </div>


        <div className="flex justify-center">
          <div className="px-10 py-10 text-center">
            <h1 className="text-xl md:text-3xl font-bold text-purple-500 font-vandiana">Fast</h1>
            <h1 className="text-4xl md:text-5xl font-bold mt-6">Your way to longevity</h1>
            <h2 className="text-l md:text-xl mt-6 text-gray-400 w-5/6 max-w-740 mx-auto">Fasting</h2>
          </div>
        </div>


      </div>


    </div>
  )
}
