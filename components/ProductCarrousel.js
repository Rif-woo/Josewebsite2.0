"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductCarrousel = ({ products, options }) => {
  const [emblaRef] = useEmblaCarousel(options);

  // State pour gérer le panier et l'état du modal
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Supprimer un produit du panier
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Gérer les quantités
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Envoyer les données du panier via WhatsApp
  const sendToWhatsApp = () => {
    const message = cart
      .map((item) => `${item.name} (x${item.quantity}): ${item.price}`)
      .join("\n");
    const encodedMessage = encodeURIComponent(
      `Voici ma commande :\n${message}`
    );
    const whatsappUrl = `https://api.whatsapp.com/send?phone=774197981&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  // Désactiver le scroll en arrière-plan lorsque le modal est ouvert
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Désactive le scroll
    } else {
      document.body.style.overflow = ""; // Réactive le scroll
    }
  }, [isModalOpen]);

  return (
    <section className="embla w-full h-full overflow-hidden" id="nos-parfums">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {products.map((product) => (
            <div
              className="embla__slide flex flex-col items-center 
          min-w-[75%] sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%] xl:max-[1515px]:min-w-[20%]"
              key={product.id}
            >
              {/* Image du produit */}
              <div className="w-full h-[300px] sm:h-[300px] md:h-[350px] xl:max-[1515px]:h-[250px] relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  draggable="false"
                />
              </div>
              {/* Détails du produit */}
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
                {/* Bouton Panier */}
                <button
                  className="flex items-center justify-center px-2 py-2 bg-[#181818] text-white text-sm font-bold rounded hover:bg-gray-200"
                  onClick={() => addToCart(product)}
                >
                  <div className="relative w-5 h-5 xl:max-[1515px]:w-4 xl:max-[1515px]:h-4">
                    <Image
                      src="/shopping-cart.svg"
                      alt="Shopping Cart Icon"
                      fill
                      objectFit="contain"
                      draggable="false"
                    />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <div
            className="relative w-[90%] sm:w-[400px] max-h-[90%] text-black bg-[#E6E7F6] shadow-lg p-4 overflow-y-auto rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton pour fermer le modal */}
            <button
              className="absolute top-2 right-3 w-6 h-12 text-gray-500 hover:text-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              <Image
                src="/cancel.svg"
                alt="Shopping Cart Icon"
                fill
                objectFit="contain"
                draggable="false"
              />
            </button>

            <h2 className="text-lg sm:text-3xl font-medium mb-6 text-black">
              Votre Panier
            </h2>
            {cart.length === 0 ? (
              <p className="text-sm sm:text-base">Votre panier est vide.</p>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between border-b pb-2"
                  >
                    {/* Image du produit */}
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <span className="text-sm sm:text-base">{item.name}</span>
                    </div>

                    {/* Quantité */}
                    <div className="flex items-center gap-2">
                      <button
                        className="px-2 bg-gray-300 rounded"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 bg-gray-300 rounded"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    {/* Bouton supprimer */}
                    <button
                      className="relative w-5 h-12"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Image
                        src="/delete.svg"
                        alt="Shopping Cart Icon"
                        fill
                        objectFit="contain"
                        draggable="false"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button
              className="mt-4 w-full px-4 py-2 bg-green-500 text-black rounded text-sm sm:text-base hover:bg-green-400 hover:text-black"
              onClick={sendToWhatsApp}
            >
              Envoyer via WhatsApp
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCarrousel;
