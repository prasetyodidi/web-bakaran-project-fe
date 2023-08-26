import Image from "next/image";
import Ornament from "/public/hero-image.png";
import Link from "next/link";

export default function Page() {
  const inputClass =
    "rounded-full bg-slate-100 px-4 py-2 text-primary-blue focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue";
  return (
    <main className="flex flex-row h-screen">
      <div className="w-3/5 flex flex-col items-center px-8 bg-primary-blue pt-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">Welcome to bakaranrpoject</h1>
          <div className="flex flex-col items-center text-md">
            <span>Lorem ipsum dolor sit amet,</span>
            <span>consectetur adipiscing elit, sed do </span>
          </div>
        </div>
        <Image src={Ornament} alt="image" />
      </div>
      <div className="w-2/5 bg-white flex flex-col items-center px-8 pt-12 font-semibold gap-8">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl text-primary-blue">Hello Again</h1>
          <div className="flex flex-col text-slate-400 items-center">
            <span>Lorem ipsum dolor sit amet,</span>
            <span>consectetur adipiscing elit, sed do </span>
          </div>
        </div>
        <form className="flex flex-col w-full gap-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className={inputClass}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={inputClass}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className={inputClass}
          />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            className={inputClass}
          />
          <button className="bg-primary-blue rounded-full py-2">
            Register
          </button>
          <button className="border-primary-blue border-2 py-2 rounded-full text-primary-blue">
            Sign in with Google
          </button>
          <span className="text-primary-blue text-center">
            already have account,<Link href="#">Login here.</Link>
          </span>
        </form>
      </div>
    </main>
  );
}
