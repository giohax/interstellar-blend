import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
        <video className="absolute inset-0 min-w-full min-h-full object-cover" autoPlay muted loop>
          <source src="/videos/energy-radiating-4k.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-white text-6xl font-bold font-vandiana">INTERSTELLAR BLEND</h1>
          <h2 className="text-white text-2xl font-bold font-vandiana">BECOME LIMITLESS WITH OUR PROPRIETARY HERBS</h2>
          <a className="mt-8 bg-white hover:bg-gray-100 text-black text-lg font-normal py-3 px-6 rounded-full shadow-lg font-vandiana cursor-pointer">SHOP NOW</a>
        </div>
      </div>

    </>
  )
}
