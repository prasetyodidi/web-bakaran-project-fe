import Image from "next/image";
import Ornament from "/public/hero-image.png";
import { CgProfile } from "react-icons/cg";

export default function Page() {
  const inputClass =
    "rounded-lg bg-slate-100 px-4 py-2 text-primary-blue focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue";
  return (
    <main className="flex flex-row h-screen">
      <div className="w-1/2 flex flex-col items-center px-8 bg-primary-blue pt-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">Welcome to bakaranrpoject</h1>
          <div className="flex flex-col items-center text-md">
            <span>Lorem ipsum dolor sit amet,</span>
            <span>consectetur adipiscing elit, sed do </span>
          </div>
        </div>
        <Image src={Ornament} alt="image" />
      </div>
      <div className="w-1/2 bg-white flex flex-col items-center px-8 pt-12 font-semibold gap-8">
        <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center text-4xl text-primary-blue">
                <h1>Complete your profile</h1>
                <h1>information </h1>
            </div>
          <div className="flex flex-col text-slate-400 items-center">
            <div className="flex flex-col items-center">
                <span>We require additional information in</span>
                <span>your profile</span>
            </div>
          </div>
        </div>
        <form className="flex flex-col w-full gap-4">
          <div className="flex flex-row justify-between">
            <CgProfile className="w-24 h-auto mx-auto text-primary-blue" />
            <div className="flex flex-col w-2/3 gap-4">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                className={inputClass}
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                className={inputClass}
              />
            </div>
          </div>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone number"
            className={inputClass}
          />
          <select id="work" name="work" className="rounded-lg bg-slate-100 px-4 py-2 text-primary-blue focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue">
            <option disabled selected>Work type</option>
            <option>Backend</option>
            <option>Frontend</option>
            <option>Fullstack</option>
          </select>
          <select id="country" name="country" className="rounded-lg bg-slate-100 px-4 py-2 text-primary-blue focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue">
            <option disabled selected>Select country</option>
            <option>Indonesia</option>
            <option>Malaysia</option>
            <option>Singapura</option>
          </select>
          <textarea class="rounded-lg bg-slate-100 px-4 py-2 text-primary-blue focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue">
          Full Address
          </textarea>
          <button className="bg-primary-blue rounded-lg py-2">
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
