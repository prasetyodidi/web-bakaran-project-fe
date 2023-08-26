import Image from "next/image";
import Avatar from "/public/avatar.png";
import {
  HiOutlineEnvelope,
  HiOutlineCake,
  HiOutlineMapPin,
  HiOutlineDevicePhoneMobile,
  HiOutlineBriefcase,
} from "react-icons/hi2";

const infos = [
  {
    label: "Email",
    value: "firmanzamzamiaziz@mail.com",
    icon: <HiOutlineEnvelope className="text-secondary-blue w-8 h-auto" />,
  },
  {
    label: "Birth date",
    value: "18 June 2005",
    icon: <HiOutlineCake className="text-secondary-blue w-8 h-auto" />,
  },
  {
    label: "Address",
    value: "Purwokerto",
    icon: <HiOutlineMapPin className="text-secondary-blue w-8 h-auto" />,
  },
  {
    label: "Phone Number",
    value: "083782138",
    icon: (
      <HiOutlineDevicePhoneMobile className="text-secondary-blue w-8 h-auto" />
    ),
  },
  {
    label: "Profession",
    value: "Students",
    icon: <HiOutlineBriefcase className="text-secondary-blue w-8 h-auto" />,
  },
];

function CardInfo(item) {
  return (
    <div className="flex flex-row gap-2">
      {item.icon}
      <div className="flex flex-col gap-1">
        <span className="text-primary-blue font-semibold">{item.label}</span>
        <span className="text-secondary-blue">{item.value}</span>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative w-full h-screen flex flex-row bg-white">
      <div className="w-full h-1/3 bg-primary-blue"></div>
      <div className="absolute top-32 left-32 right-32 bottom-0 shadow-xl rounded-xl bg-white px-14 pt-12">
        <div className="flex flex-row gap-12">
          <Image src={Avatar} alt="avatar" className="rounded-full" />
          <div className="flex flex-col gap-3">
            <span className="text-2xl text-primary-blue font-semibold">
              Hello
            </span>
            <h1 className="text-3xl text-slate-500">Firman Zamzami Aziz</h1>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl text-slate-500">Personal informations</h1>
          <div className="grid grid-cols-2 gap-4">
            {infos.map((item) => CardInfo(item))}
          </div>
        </div>
      </div>
    </main>
  );
}
