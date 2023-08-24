import Link from "next/link";
import MobileImage from "/public/work-mobile.png";
import WebImage1 from "/public/work-web-1.png";
import WebImage2 from "/public/work-web-2.png";
import DesignImage from "/public/work-design.png";
import Ornament3 from "/public/ornament-3.png";
import Ornament4 from "/public/ornament-4.png";
import Image from "next/image";

export default function OurWorksSection() {
  return (
    <div
      id='our-works'
      className='min-h-screen flex flex-col gap-8 items-center px-24'
    >
      <h1 className="text-4xl text-secondary-blue font-bold">Our Works</h1>
      <p className="text-3xl text-slate-600 font-semibold">
        Some of the projects we have made recently
      </p>
      <div className='flex flex-row justify-between gap-24'>
        <div className='flex flex-col h-96 rounded-[1rem] shadow-2xl'>
            <div className='relative h-1/2 flex flex-row rounded-t-[1rem] bg-primary-green'>
                <Image src={Ornament3} alt='just an ornament' className='absolute top-0 left-0' />
                <Image src={Ornament4} alt='just an ornament' className='absolute top-8 right-10' />
                <div className='z-10 flex flex-col py-8 pl-8 w-2/3'>
                    <h2 className='text-3xl text-white font-semibold'>Example App</h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur </p>
                </div>
                <Image src={MobileImage} alt='image of example app mobile' className='z-10' />
            </div>
            <div className='p-8'>
                <h2 className='text-3xl font-semibold text-slate-900'>Mobile Apps Project</h2>
                <p className='text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
        </div>
        <div className='flex flex-col h-96 rounded-[1rem] shadow-2xl'>
            <div className='relative h-1/2 flex flex-row rounded-t-[1rem] bg-secondary-blue'>
                <Image src={WebImage2} alt='just an ornament' className='absolute bottom-0 left-8' />
                <Image src={WebImage1} alt='just an ornament' className='absolute top-0 right-8' />
                <h2 className='absolute top-8 left-8 text-3xl text-white font-semibold'>Example</h2>
                <h2 className='absolute bottom-8 right-10 text-3xl text-white font-semibold'>Website</h2>
            </div>
            <div className='p-8'>
                <h2 className='text-3xl font-semibold text-slate-900'>Website Project</h2>
                <p className='text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
        </div>
        <div className='flex flex-col h-96 rounded-[1rem] shadow-2xl'>
            <div className='relative h-1/2 flex flex-row  justify-betweenrounded-t-[1rem] bg-primary-red px-4'>
                <Image src={DesignImage} alt='ornament design' />
                <div className='flex flex-col justify-between w-full items-center my-8'>
                    <h2 className='text-3xl text-white font-semibold'>Example</h2>
                    <h2 className='text-3xl text-white font-semibold'>Graphic</h2>
                    <h2 className='text-3xl text-white font-semibold'>Design</h2>
                </div>
            </div>
            <div className='p-8'>
                <h2 className='text-3xl font-semibold text-slate-900'>Design Project</h2>
                <p className='text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
        </div>
      </div>
      <Link href="#" className='text-white text-xl bg-primary-blue rounded-full px-32 py-2'>See More</Link>
    </div>
  );
}
