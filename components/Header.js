import Image from 'next/image';
import Link from 'next/link';
import AnimatedHeaderText from './AnimatedHeaderText';

export default function Header() {
  const headerPhrases = [
    "Plongez dans l'univers",
    "envoûtant de nos parfums",
  ];

  return (
    <div className="relative w-full bg-black h-[350px] md:h-screen box-border">
      {/* Image de fond */}
      <Image
        src="/bg-header.webp"
        alt="Header background"
        fill
        className="opacity-50 object-cover z-0"
        draggable="false"
      />

      {/* Barre de navigation */}
      <nav className="absolute top-0 left-0 w-full p-4 z-20">
        <ul className="flex items-center justify-between px-4 md:px-10">
          {/* Liens du menu */}
          <li className="z-10">
            <Link
              href="#Apropos"
              className="text-white text-sm md:text-base xl:max-[1515px]:text-sm z-10"
            >
              À propos
            </Link>
          </li>
          <li className="z-10">
            <Link
              href="/"
              className="text-xl md:text-3xl xl:max-[1515px]:text-xl text-white tracking-wider font-normal z-10"
            >
              REINOUSH
            </Link>
          </li>
          <li className="z-10">
            <Link
              href="#Contact"
              className="text-white xl:max-[1515px]:text-sm text-sm md:text-base z-10"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>



      {/* Contenu principal du header */}
      <div className="relative w-full h-full flex flex-col gap-5 items-center justify-center px-4 ">
        {/* Texte animé */}
        <AnimatedHeaderText phrases={headerPhrases} />

        <Link
          href="#nos-parfums" // Remplacez par l'URL cible
          className="relative inline-block text-center bg-transparent border-2 md:text-lg text-[11px] border-white xl:max-[1515px]:py-2 xl:max-[1515px]:px-3 xl:max-[1515px]:text-lg text-white px-4 md:px-6 py-2 md:py-3 rounded-md z-10
        hover:bg-white hover:text-black transition-colors duration-300 ease-in-out hover:shadow-lg"
        >
          Découvrir nos parfums
        </Link>
      </div>
    </div>
  );
}
