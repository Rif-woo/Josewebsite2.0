import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="relative w-full bg-black h-dvh box-border">
      <Image 
        src="/bg-header.webp"
        alt="Header background"
        fill
        className="opacity-50 object-cover z-0"
        draggable="false"
      />
        <nav className="w-full p-4 px-10 z-20">
          <ul className="flex items-center justify-between">
            <li className="z-10">
              <Link href="#about" className="text-white z-10">About</Link>
            </li>
            <li className="z-10">
              <Link href="/" className="text-3xl text-white tracking-wider font-normal z-10">REINOUSH</Link>
            </li>
            <li className="z-10">
              <Link href="#contact" className="text-white z-10">Contact</Link>
            </li>
          </ul>
        </nav>
      <div className=" w-full h-[830px] flex flex-col gap-20 items-center justify-center">
        <h1 className="text-8xl text-white tracking-wider w-[1500px] text-center font-normal z-10">Plongez dans l'univers envoûtant de nos parfums</h1>
        <button className="relative bg-transparent border-2 border-white text-white px-6 py-3 rounded-md z-10 
          hover:bg-white hover:text-black transition-all duration-500 ease-in-out
          hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]
          transform hover:scale-105
          before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/10 
          before:transform before:scale-x-0 before:origin-right before:transition-transform before:duration-500
          hover:before:scale-x-100 hover:before:origin-left">
          Découvrir nos parfums
        </button>
      </div>
    </div>
  );
}
