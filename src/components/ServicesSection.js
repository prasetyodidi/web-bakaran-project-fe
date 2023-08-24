import Image from "next/image";
import Link from "next/link";
import IconDesktop from "/public/icon-desktop.svg";
import IconPen from "/public/icon-pen.svg";
import IconPhone from "/public/icon-phone.svg";
import Ornament from "/public/ornament-2.png";

const services = [
  {
    name: "Web Development",
    description:
      "Our team creates a professional website with an elegant appearance according to your needs.",
    icon: IconDesktop,
    color: "bg-secondary-blue",
  },
  {
    name: "Mobile Apps",
    description:
      "Our team creates a responsive mobile application with an elegant appearance according to your needs.",
    icon: IconPhone,
    color: "bg-primary-green",
  },
  {
    name: "Graphic Design",
    description:
      "We combine various aspects that make the design look stylish and spoil your eyes.",
    icon: IconPen,
    color: "bg-primary-red",
  },
];

function ServiceCard(item) {
  const bgClass =
    "relative overflow-hidden rounded-[2rem] border-2 h-56 " + item.color;
  return (
    <div className={bgClass}>
      <Image
        src={Ornament}
        alt="ornament"
        className="absolute w-1/2 -top-24 -right-8"
      />
      <Image
        src={item.icon}
        alt="icon service"
        className="absolute top-14 right-24"
      />
      <Link
        href="#"
        className="absolute bottom-6 right-6 px-10 py-2 rounded-full border-white border-2"
      >
        Order Now
      </Link>
      <div className="w-2/4 m-8 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">{item.name}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <div
      id="services"
      className="w-full min-h-screen flex flex-row justify-center items-center px-24"
    >
      <div className="w-full h-3/4 grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-8 h-40">
          <h2 className="text-4xl font-bold text-secondary-blue">
            What we can do for You
          </h2>
          <p className="text-slate-700 text-2xl">
            Quick list for you to choose the <br></br>services we can offer you
          </p>
        </div>
        {services.map((item) => ServiceCard(item))}
      </div>
    </div>
  );
}
