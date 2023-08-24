import Link from "next/link";
import IconIG from "/public/icon-instagram.svg";
import IconFB from "/public/icon-facebook.svg";
import IconEmail from "/public/icon-email.svg";
import Image from "next/image";

export default function Footer() {
    return <footer className='bg-third-blue px-24 pt-12 pb-16 flex flex-col'>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col gap-6'>
                <h1 className='text-4xl font-semibold'>Bakaran Project</h1>
                <p className='text-primary-blue'>Sumampir, North Purwokerto, Indonesia</p>
                <div className='flex flex-row gap-16'>
                    <div className='flex flex-col gap-2'>
                        <span className='font-semibold text-white'>About Us</span>
                        <div className='flex flex-col text-primary-blue'>
                            <Link href='#'>Our Works</Link>
                            <Link href='#'>Our Team</Link>
                            <Link href='#'>Contact</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='font-semibold text-white'>Service</span>
                        <div className='flex flex-col text-primary-blue'>
                            <Link href='#'>Event</Link>
                            <Link href='#'>Blog</Link>
                            <Link href='#'>What We Do</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-2/5 flex flex-col gap-8'>
                <h1 className='text-3xl font-semibold'>Contact Form</h1>
                <form className='flex flex-col gap-4'>
                    <input type='text' placeholder="Your E-Mail" className='bg-transparent border-white text-white' />
                    <textarea className='text-white bg-transparent'>Your comment</textarea>
                    <button className='bg-white text-primary-blue rounded-full py-2 font-semibold'>Submit</button>
                </form>
            </div>
        </div>
        <hr className='my-4'></hr>
        <div className='flex flex-row justify-between'>
            <h1>Bakaran Project 2023</h1>
            <div className='flex flex-row gap-4'>
                <Image src={IconIG} alt='icon instagram' />
                <Image src={IconFB} alt='icon facebook' />
                <Image src={IconEmail} alt='icon email' />
            </div>
        </div>
    </footer>
}