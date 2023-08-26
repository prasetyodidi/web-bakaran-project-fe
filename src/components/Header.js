import Link from "next/link";
import IconProfile from "./IconProfile";

function NavLink({ name }) {
  return (
    <div className="group flex flex-col items-center">
      <Link href="#" className="text-lg text-primary-blue">
        {name}
      </Link>
      <span className="w-0 h-1 bg-primary-blue group-hover:w-full transition ease-in-out duration-300"></span>
    </div>
  );
}

export default function Header() {
  return (
    <header className="z-20 fixed top-0 left-0 right-0 flex flex-row px-4 py-2 items-center justify-between bg-white">
      <div></div>
      <nav className="flex flex-row items-center gap-3">
        <NavLink name="Home" />
        <NavLink name="Service" />
        <NavLink name="Our Works" />
        <NavLink name="About us" />
      </nav>
      <IconProfile />
    </header>
  );
}
