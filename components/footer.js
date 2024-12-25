// components/Footer.js
import Image from "next/image";
import Link from "next/link";
// npm run dev -- -H 0.0.0.0
export default function Footer() {
  return (
    <footer className="bg-transparent text-gray-800 border-t-2 border-gray-300 py-10 xl:max-[1515px]:py-5">
      {/* Footer Container */}
      <div className="container mx-auto flex flex-col items-center text-center space-y-6 xl:max-[1515px]:space-y-4">
        {/* Text */}
        <div>
          <h2 className="text-2xl font-meidum mb-2 xl:max-[1515px]:mb-1 xl:max-[1515px]:text-xl">
            Nos Parfums
          </h2>
          <p className="text-gray-500 xl:max-[1515px]:text-sm">
            Élégance, qualité, et passion.
          </p>
        </div>

        {/* Social Media Links with Next/Image */}
        <div className="flex space-x-4">
          <Link
            href="https://www.instagram.com/reinoushh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={32}
              height={32}
              className="hover:opacity-80 transition"
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@reiinoush?_t=8qn1qLPRuR4&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/tiktok.svg"
              alt="tiktok"
              width={32}
              height={32}
              className="hover:opacity-80 transition"
            />
          </Link>
          <Link
            href="https://www.facebook.com/share/1AaQxR65V6/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/facebook.svg"
              alt="tiktok"
              width={32}
              height={32}
              className="hover:opacity-80 transition"
            />
          </Link>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-sm xl:max-[1515px]:text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Nos Parfums. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
