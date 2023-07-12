"use client"
import BoltIcon from '@/components/icons/bolt';
import ScaleIcon from '@/components/icons/scale';
import SunglassesIcon from '@/components/icons/sunglasses';
import Link from 'next/link';
import { MouseEvent, useRef } from 'react'

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

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
            <source src="/videos/energy-radiating-720p.m4v" type="video/x-m4v" />
            <source src="/videos/energy-radiating-720p.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center flex-col px-4 md:px-10">
            <h1 className="text-red-500 md:text-white text-4xl lg:text-6xl font-bold font-vandiana text-center custom-shadow leading-none">INTERSTELLAR BLEND</h1>
            <h2 className="text-white text-1xl lg:text-2xl font-bold font-vandiana text-center custom-subtitle-shadow">BECOME LIMITLESS WITH OUR ANTI-AGING HERBS</h2>
            <Link href="/search" className="mt-8 bg-white hover:bg-red-500 hover:text-white text-black text-md lg:text-lg font-bold py-3 px-6 w-full md:w-64 rounded-full shadow-lg text-center font-vandiana cursor-pointer">SHOP NOW</Link>
            <a href="#section" onClick={handleClick} className="mt-2 bg-custom-black hover:bg-red-500 text-white text-md lg:text-lg font-bold py-3 px-6 w-full md:w-64 rounded-full shadow-lg text-center font-vandiana cursor-pointer border-2 border-red-500">LEARN MORE</a>
          </div>


        </div>

        <div id="section" ref={sectionRef} className="px-4 py-0 md:py-10 text-center text-gray-400 font-bold text-lg tracking-widest">
          <small className="font-vandiana">
            REACH THE INTERSTELLAR
          </small>
        </div>

        <div className="mt-4 mx-auto flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-black to-red-500"></div>
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white">
            <span className="text-lg text-black font-bold">1</span>
          </div>
          <h1 className="text-lg md:text-2xl font-bold text-red-500 font-vandiana mt-5">Become</h1>
        </div>


        <div className="flex justify-center">
          <div className="px-4 md:px-10 text-center">
            
            <h1 className="text-2xl lg:text-4xl font-bold mt-6 font-vandiana">The best version of yourself</h1>
            <h2 className="text-l md:text-xl mt-6 text-gray-400 max-w-740 mx-auto">Feel powerful, energetic, happy, and ready to kick ass with the most powerful natural ingredients in the universe in our blends.</h2>



            <div className="mx-auto flex max-w-5xl flex-col py-6 md:flex-row mt-8 space-y-20 md:space-y-0 space-x-0 md:space-x-10">
              <div className="order-first flex-none md:w-1/2">
                <img className="rounded-md" src="images/ingredients.jpeg" />
              </div>

              <div className="flex flex-col justify-between leading-relaxed space-y-16 md:space-y-10">
                <div className="text-center md:text-start">
                  <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mb-2 space-y-3 md:space-y-0 md:space-x-3">
                    <div className="p-2 bg-neutral-800 rounded-md">
                      <SunglassesIcon className="h-8 w-8 md:h-6 md:w-6" />
                    </div>
                    <h1 className="font-bold text-xl font-vandiana ">Feel young again</h1>
                  </div>

                  <p className="text-gray-400">
                    Rekindle the vitality of your youth. Packed with antioxidants and polyphenols, each sip brings a rush of natural
                    ingredients designed to keep you feeling fresh, lively, and as youthful as ever.
                  </p>
                </div>
                <div className="text-center md:text-start">
                  <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mb-2 space-y-3 md:space-y-0  md:space-x-3">
                    <div className="p-2 bg-neutral-800 rounded-md">
                      <ScaleIcon className="h-8 w-8 md:h-6 md:w-6" />
                    </div>

                    <h1 className="font-bold text-xl font-vandiana">Lose weight</h1>
                  </div>
                  <p className="text-gray-400">
                    Embrace a healthier and lighter you. Each
                    ingredient is chosen for its natural weight management properties, helping you on your journey to a
                    leaner physique. But it&apos;s not just about losing weight - it&apos;s about gaining confidence, embracing
                    health, and falling in love with yourself again.
                  </p>
                </div>
                <div className="text-center md:text-start">
                  <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mb-2 space-y-3 md:space-y-0 md:space-x-3">
                    <div className="p-2 bg-neutral-800 rounded-md">
                      <BoltIcon className="h-8 w-8 md:h-6 md:w-6" />
                    </div>

                    <h1 className="font-bold text-xl font-vandiana">Become limitless</h1>
                  </div>
                  <p className="text-gray-400">
                    The blends are the key to
                    unlocking boundless energy, enhancing focus, and boosting productivity. With over 1000 powerful,
                    natural ingredients, it&apos;s the fuel you need to break through boundaries and embrace the limitless
                    possibilities of your day.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-14 flex items-center justify-center flex-col">
              <Link href="/search" className="bg-white hover:bg-red-500 hover:text-white text-black text-md lg:text-lg font-bold py-3 px-6 w-full md:w-64 rounded-full shadow-lg text-center font-vandiana cursor-pointer">SHOP NOW</Link>
            </div>

          </div>
        </div>

        <div className="mt-4 mx-auto flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-black to-purple-500"></div>
          <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
            <span className="text-lg text-black font-bold">2</span>
          </div>
          <h1 className="text-xl md:text-3xl font-bold text-purple-500 font-vandiana mt-5">Fast</h1>
        </div>


        <div className="flex justify-center">
          <div className="px-4 md:px-10 text-center mb-48">
            
            <h1 className="text-2xl lg:text-4xl font-bold mt-6 font-vandiana">Your way to longevity</h1>
            <h2 className="text-l md:text-xl mt-6 text-gray-400 max-w-740 mx-auto">
              Our ingredients are hand-picked to naturally curb appetite and sustain energy levels. The blends complement your
              fasting journey, supports autophagy, and promotes longevity. With our potent, natural ingredients fueling your
              body, step into a healthier, longer life.
            </h2>
          </div>

        </div>

        <div className="mt-4 mx-auto flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-black to-blue-500"></div>
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <span className="text-lg text-black font-bold">3</span>
          </div>
          <h1 className="text-xl md:text-3xl font-bold text-blue-500 font-vandiana mt-5">Embrace</h1>
        </div>

        <div className="flex justify-center">
          <div className="px-4 md:px-10 text-center mb-48">
            
            <h1 className="text-2xl lg:text-4xl font-bold mt-6 font-vandiana">Limitless possibilities</h1>
            <h2 className="text-l md:text-xl mt-6 text-gray-400 max-w-740 mx-auto">
              Choose the blend that&apos;s right for you. We have countless selections of blends that is optimized for a specific end goal.
              Whether you are looking to lose weight, gain muscle mass, increase mental performance, or obliterate depression, we
              have the blend you are looking for.
            </h2>
          </div>
        </div>


        <div className="mt-4 mx-auto flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-black to-green-500"></div>
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
            <span className="text-lg text-black font-bold">4</span>
          </div>
          <h1 className="text-xl md:text-3xl font-bold text-green-500 font-vandiana mt-5">Join</h1>
        </div>

        <div className="flex justify-center">
          <div className="px-4 md:px-10 text-center mb-48">
            <h1 className="text-2xl lg:text-4xl font-bold mt-6 font-vandiana">Others on the same path as you</h1>
            <h2 className="text-l md:text-xl mt-6 text-gray-400 max-w-740 mx-auto">
              Join thousands of people who have transformed their lives with our blends. Their stories echo triumph, resilience, and a
              renewed zest for life. With us, you&apos;re not just choosing a product, you&apos;re embracing a journey towards your best self. Hop
              on this path of transformation, because together, we can make it happen.
            </h2>
          </div>
        </div>

      </div>


    </div>
  )
}
