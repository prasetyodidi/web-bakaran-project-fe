import Image from "next/image";
import ProfileImage from "/public/developer-1.png";
import OrnamentGreen from "/public/ornament-5.svg";
import OrnamentRed from "/public/ornament-red.png";
import OrnamentBlue from "/public/ornament-blue.png";
import IconIG from "/public/icon-instagram.svg";
import IconFB from "/public/icon-facebook.svg";
import IconEmail from "/public/icon-email.svg";
import OrnamentBig from "/public/ornament-big.svg";

const teams = [
    {
        name: 'Didi',
        title: 'Developer',
        color: 'bg-primary-green',
        ornament: OrnamentGreen,
    },
    {
        name: 'Prasetyo',
        title: 'Developer',
        color: 'bg-primary-red',
        ornament: OrnamentRed,
    },
    {
        name: 'Ucup',
        title: 'Developer',
        color: 'bg-primary-blue',
        ornament: OrnamentBlue,
    },
]

function TeamCard(team) {
    const cardClass = 'relative flex flex-row items-center overflow-hidden gap-6 rounded-3xl pl-8 pr-40 py-6 ' + team.color
    return <div className={cardClass}>
        <Image src={ProfileImage} alt='profile image' className='rounded-full w-20 h-20' />
        <div className='flex flex-col gap-2 z-10'>
            <h2 className='text-xl font-semibold'>{team.name}</h2>
            <h3>{team.title}</h3>
            <div className='flex flex-row gap-2'>
                <Image src={IconIG} alt='icon instagram' />
                <Image src={IconFB} alt='icon facebook' />
                <Image src={IconEmail} alt='icon email' />
            </div>
        </div>
        <Image src={team.ornament} alt='ornament' className='absolute -right-8' />
    </div>
}

export default function OurTeamsSection() {
  return (
    <div
      id="our-works"
      className="relative overflow-hidden min-h-screen flex flex-col gap-8 items-center px-24 bg-secondary-blue"
    >
        <Image src={OrnamentBig} alt='ornament' className='absolute -bottom-96' />
      <h1 className="text-4xl text-white font-bold">Our Works</h1>
      <p className="text-xl text-slate-900">
        Our team members who are very cool and talented
      </p>
      <div className='flex flex-col px-24 gap-3'>
        <span className='text-xl font-semibold text-center'>Bakaran Project</span>
        <div className='flex flex-row gap-4'>
            {teams.map(team => TeamCard(team))}
        </div>
      </div>
      <div className='flex flex-col px-24 gap-3'>
        <span className='text-xl font-semibold text-center'>Bakaran Project Academy</span>
        <div className='flex flex-row gap-4'>
            {teams.map(team => TeamCard(team))}
        </div>
      </div>
    </div>
  );
}
