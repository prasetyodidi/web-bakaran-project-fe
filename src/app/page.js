import Header from '@/components/Header'
import Image from 'next/image'
import HeroImage from '/public/hero-image.png'
import ServicesSection from '@/components/ServicesSection'
import OurWorksSection from '@/components/OurWorksSection'
import OurTeamsSection from '@/components/OurTeamsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-white">
      <div className="w-full min-h-screen flex flex-row justify-center items-center bg-primary-blue rounded-b-[24px]">
        <Header></Header>
        <div className='absolute top-4 flex flex-col items-center gap-4'>
          <h1 className='mt-20 text-center text-4xl hover:cursor-pointer'>A Digital Team That Make<br></br> Everything <span className='underline decoration-4 decoration-primary-green'>Creatively</span></h1>
          <button className='bg-blue-400 text-white px-6 py-2 rounded-full'>Learn More</button>
        </div>
        <Image src={HeroImage} alt="hero image" />
      </div>
      <ServicesSection />
      <OurWorksSection />
      <OurTeamsSection />
      <Footer />
    </main>
  )
}
