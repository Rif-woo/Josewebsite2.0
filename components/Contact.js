"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Fonction pour ouvrir/fermer le modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Fonction pour générer le lien mailto
  const generateMailtoLink = () => {
    const subject = encodeURIComponent("Message depuis le site de parfum");
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\nMessage : ${message}`
    );
    return `mailto:azermax12zale@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-[#E6E7F6] h-full py-12 px-4 md:px-8" id="Contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:max-[1515px]:max-w-5xl gap-8 items-center">
        {/* Colonne gauche */}
        <div>
          <h2 className="text-3xl md:text-4xl font-medium text-black mb-4">
            Contactez-nous
          </h2>
          <p className="text-gray-600 mb-6">
            Une question ? Notre équipe est à votre écoute.
          </p>
          <button
            onClick={toggleModal}
            className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
          >
            Nous écrire
          </button>
        </div>

        {/* Colonne droite */}
        <div className="relative hidden md:block w-full min-[768px]:max-[1280px]:h-[400px] max-w-[400px] xl:max-[1515px]:w-[500px] xl:max-[1515px]:h-[500px] lg:max-w-[800px] h-[400px]  lg:h-[800px]">
          <Image
            src="/graceBox.webp"
            alt="Contactez-nous"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl text-black font-semibold">
                Envoyez-nous un message
              </h3>
              <button onClick={toggleModal} className="text-gray-600 text-2xl">
                &times;
              </button>
            </div>

            {/* Formulaire */}
            <form
              onSubmit={(e) => e.preventDefault()} // Empêcher le rechargement
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400 text-black"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400 text-black"
                />
              </div>

              <div>
                <textarea
                  rows="4"
                  placeholder="Votre message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400 text-black"
                />
              </div>

              <div className="text-right">
                {/* Bouton qui ouvre le mailto */}
                <a
                  href={generateMailtoLink()}
                  onClick={toggleModal} // Ferme le modal après ouverture du mailto
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300"
                >
                  Envoyer
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
