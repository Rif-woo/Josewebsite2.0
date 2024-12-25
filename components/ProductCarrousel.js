"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductCarrousel = ({ products, options }) => {
  const [emblaRef] = useEmblaCarousel(options);

  // State pour gérer le panier et l'état du modal
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalProductOpen, setIsModalProductOpen] = useState(false)
  const [step, setStep] = useState(1); // Étape du modal
  const [selectedProduct, setSelectedProduct] = useState(null)


  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    address: "",
  });

  // Ajouter un produit au panier
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsModalOpen(true);
  };

  // Incrémenter/Décrémenter la quantité
  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Gestion des étapes du modal
  const handleContinue = () => {
    if (step === 2) {
      // Validation des champs du formulaire
      if (
        !formData.name ||
        !formData.surname ||
        !formData.phone ||
        !formData.address
      ) {
        alert("Merci de remplir tous les champs.");
        return;
      }
    }
    setStep((prevStep) => prevStep + 1);
  };

  // Gérer les champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Envoyer les données du panier via WhatsApp
  const sendToWhatsApp = () => {
    const productDetails = cart
      .map((item) => `${item.name} (x${item.quantity}): ${item.price}`)
      .join("\n");

    const message = `Voici ma commande :\n\nProduits :\n${productDetails}\n\nInformations client :\nNom : ${formData.name}\nPrénom : ${formData.surname}\nAdresse : ${formData.address}\nTéléphone : ${formData.phone}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+33789080132&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStep(1); // Réinitialiser à l'étape 1
  };

   const closeProductModal = () => {
     setIsModalProductOpen(false)
   }

  const openProductModal = (product) => {
    setSelectedProduct(product)
    setIsModalProductOpen(true)
   }


  // Désactiver le scroll en arrière-plan lorsque le modal est ouvert
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Désactive le scroll
    } else {
      document.body.style.overflow = ""; // Réactive le scroll
    }
  }, [isModalOpen]);

  return (
    <section className="embla w-full h-full overflow-hidden">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {products.map((product) => (
            <div
              className="embla__slide flex flex-col items-center
          min-w-[75%] sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%] xl:max-[1515px]:min-w-[20%]"
              key={product.id}
            >
              <motion.div
                className="w-full cursor-pointer  h-[300px] sm:h-[300px] md:h-[350px] xl:max-[1515px]:h-[250px] relative "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                style={{ transformOrigin: 'center' }}
                onClick={() => openProductModal(product)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  draggable="false"
                  priority
                  quality={75}
                />
              </motion.div>
              <div className="flex w-full justify-between items-center mt-4 px-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#000000] text-sm sm:text-base xl:max-[1515px]:text-sm font-normal">
                    {product.name}
                  </h3>
                  <p className="text-[#181818] text-sm sm:text-md xl:max-[1515px]:text-xs font-semibold">
                    {product.typeParfum}
                  </p>
                  <p className="text-[#181818] text-sm sm:text-md xl:max-[1515px]:text-xs font-semibold">
                    {product.price}
                  </p>
                </div>
                <motion.button
                  className="flex items-center justify-center px-2 py-2 bg-[#181818] text-white text-sm font-bold rounded hover:bg-gray-600"
                  onClick={() => addToCart(product)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ transformOrigin: 'center' }}
                >
                  <div className="relative w-5 h-5 xl:max-[1515px]:w-4 xl:max-[1515px]:h-4">
                    <Image
                      src="/shopping-cart.svg"
                      alt="Shopping Cart Icon"
                      fill
                      style={{ objectFit: 'contain' }}
                      draggable="false"
                    />
                  </div>
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalProductOpen && (
        <AnimatePresence>
          {isModalProductOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                if (e.target === e.currentTarget) closeModal()
              }}
            >
              <motion.div
                className="bg-white rounded-lg p-6 w-full max-w-lg sm:max-w-xl relative"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                onClick={(e) => e.stopPropagation()} // Empêche la fermeture du modal en cliquant à l'intérieur
              >
                {/* Bouton pour fermer */}
                <motion.button
                  className="absolute top-2 right-2 w-5 h-5 xl:max-[1515px]:w-4 xl:max-[1515px]:h-4"
                  onClick={(e) => {
                    closeProductModal()
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ transformOrigin: 'center' }}
                >
                  <Image
                    src="/cancel.svg"
                    alt="cancel Icon"
                    fill
                    style={{ objectFit: 'contain' }}
                    draggable="false"
                  />
                </motion.button>
                {/* Contenu du modal */}
                <div className="flex flex-col sm:flex-row sm:gap-4 items-center sm:items-start w-full">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={300}
                    height={300}
                    className="rounded-lg mb-4 sm:mb-0"
                  />
                  <div className="w-full flex flex-col items-start gap-3">
                    <h3 className="text-xl font-medium text-black xl:max-[1400px]:text-xl">
                      {selectedProduct.name}
                      <br />
                      <span className="text-xs text-gray-600 font-bold">
                        {selectedProduct.typeParfum}
                      </span>
                    </h3>
                    <p className="text-gray-600 text-lg xl:max-[1400px]:text-lg">
                      {selectedProduct.description}
                    </p>
                    <button
                      className="flex items-center justify-center px-2 py-2 bg-[#181818] text-white text-xs font-bold rounded hover:bg-gray-800"
                      onClick={() => addToCart(selectedProduct)}
                    >
                      <div className="relative w-5 h-5 xl:max-[1400px]:w-4 xl:max-[1400px]:h-4">
                        <Image
                          src="/shopping-cart.svg"
                          alt="Shopping Cart Icon"
                          fill
                          style={{ objectFit: 'contain' }}
                          draggable="false"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal()
            }
          }}
        >
          <div
            className="relative w-[90%] sm:w-[400px] max-h-[90%] text-black bg-[#E6E7F6] shadow-lg p-4 overflow-y-auto rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {step === 1 && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg sm:text-3xl font-medium text-black">
                    Votre Panier
                  </h2>
                  <button
                    className="relative w-5 h-5 xl:max-[1515px]:w-4 xl:max-[1515px]:h-4"
                    onClick={(e) => {
                      closeModal()
                    }}
                  >
                    <Image
                      src="/cancel.svg"
                      alt="cancel Icon"
                      fill
                      style={{ objectFit: 'contain' }}
                      draggable="false"
                    />
                  </button>
                </div>
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between border-b pb-2"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 relative">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-lg"
                          />
                        </div>
                        <span className="text-sm sm:text-base">
                          {item.name} (x{item.quantity})
                        </span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <button
                          className="text-white bg-green-500 px-2 rounded"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          +
                        </button>
                        <button
                          className="text-white bg-red-500 px-2 rounded"
                          onClick={() => decrementQuantity(item.id)}
                        >
                          -
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-4 w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition-all duration-300"
                  onClick={handleContinue}
                >
                  Continuer
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg sm:text-3xl font-medium text-black">
                    Informations Client
                  </h2>
                  <button
                    className="relative w-5 h-5 xl:max-[1515px]:w-4 xl:max-[1515px]:h-4"
                    onClick={(e) => {
                      closeModal()
                    }}
                  >
                    <Image
                      src="/cancel.svg"
                      alt="cancel Icon"
                      fill
                      style={{ objectFit: 'contain' }}
                      draggable="false"
                    />
                  </button>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full mb-2 px-4 py-2 border rounded-md"
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Prénom"
                  value={formData.surname}
                  onChange={handleInputChange}
                  className="w-full mb-2 px-4 py-2 border rounded-md"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full mb-2 px-4 py-2 border rounded-md"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Adresse"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full mb-2 px-4 py-2 border rounded-md"
                />
                <button
                  className="mt-4 w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition-all duration-300"
                  onClick={handleContinue}
                >
                  Continuer
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg sm:text-3xl font-medium text-black">
                    Paiement
                  </h2>
                  <button
                    className="relative w-5 h-5 xl:max-[1515px]:w-4 xl:max-[1515px]:h-4"
                    onClick={(e) => {
                      closeModal()
                    }}
                  >
                    <Image
                      src="/cancel.svg"
                      alt="cancel Icon"
                      fill
                      style={{ objectFit: 'contain' }}
                      draggable="false"
                    />
                  </button>
                </div>
                <button
                  className="mt-4 w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition-all duration-300"
                  onClick={sendToWhatsApp}
                >
                  Acheter via WhatsApp
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
};

export default ProductCarrousel;
