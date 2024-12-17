// components/Footer.js
import Image from "next/image";
import Link from "next/link";
// npm run dev -- -H 0.0.0.0
export default function Footer() {
  return (
    <footer className="bg-transparent text-gray-800 border-t-2 border-gray-300 py-10">
      {/* Footer Container */}
      <div className="container mx-auto flex flex-col items-center text-center space-y-6">
        {/* Text */}
        <div>
          <h2 className="text-2xl font-meidum mb-2">Nos Parfums</h2>
          <p className="text-gray-500">Élégance, qualité, et passion.</p>
        </div>

        {/* Social Media Links with Next/Image */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/snapchat.svg"
              alt="Facebook"
              width={32}
              height={32}
              className="hover:opacity-80 transition"
            />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={32}
              height={32}
              className="hover:opacity-80 transition"
            />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/tiktok.svg"
              alt="Twitter"
              width={32}
              height={32}
              className="hover:opacity-80 transition"
            />
          </Link>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Nos Parfums. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
