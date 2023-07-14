"use client"
import SpaceBackground from '@/components/3d/space';
import IconScaleBalanced from '@/components/icons/balance';
import IconBrain from '@/components/icons/brain';
import IconCell from '@/components/icons/cell';
import IconDna from '@/components/icons/dna';
import Icon208EyePlus from '@/components/icons/eye';
import IconFastBackward from '@/components/icons/fast-backward';
import IconFire from '@/components/icons/fire';
import IconMoodHappySolid from '@/components/icons/happy';
import IconHeartPulse from '@/components/icons/heart-pulse';
import IconLungs from '@/components/icons/lungs';
import IconBriefcaseMedical from '@/components/icons/medical-briefcase';
import IconMoleculer from '@/components/icons/molecule';
import IconBackupRestore from '@/components/icons/restore';
import IconPersonRunning from '@/components/icons/running';
import IconShieldFillMinus from '@/components/icons/shield-minus';
import IconShieldPlus from '@/components/icons/shield-plus';
import IconShieldSword from '@/components/icons/shield-sword';
import IconSpeedFill from '@/components/icons/speed';
import IconStopCircleFill from '@/components/icons/stop';
import IconArmFlex from '@/components/icons/strong';
import IconSunFill from '@/components/icons/sun';
import IconSword from '@/components/icons/sword';
import IconBxTargetLock from '@/components/icons/target';
import IconFaceTired from '@/components/icons/tired';
import SearchEngine from '@/components/search-engine';
import AttributeCard from 'components/cards/attribute-card';
import BoltIcon from 'components/icons/bolt';
import ScaleIcon from 'components/icons/scale';
import SunglassesIcon from 'components/icons/sunglasses';
import Link from 'next/link';
import { MouseEvent, useRef } from 'react'

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (


    <div className="relative flex flex-col select-none ">


      <SpaceBackground />

      <div className="flex items-center flex-col mt-32 px-4">
        <h1 className="text-red-500 text-4xl lg:text-6xl font-bold font-vandiana text-center leading-none">INTERSTELLAR BLEND</h1>
        <h2 className="text-white text-1xl lg:text-2xl font-bold font-vandiana text-center custom-subtitle-shadow mb-8">BECOME LIMITLESS WITH OUR ANTI-AGING HERBS</h2>
          <SearchEngine />
      </div>
    </div>

  )
}
