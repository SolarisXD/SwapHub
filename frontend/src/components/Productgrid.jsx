import React from "react";
import { FiShoppingCart, FiArrowRight, FiHeart } from "react-icons/fi";

const Productgrid = ({ products = [], addToCart = () => {}, showActions = true }) => {
  const intentClass = (intent) => {
    if (intent === "rent") return "tag blue";
    if (intent === "donate") return "tag green";
    return "tag";
  };

  return (
    <div className="p-2 sm:p-4">
      <div className="grid-auto-fit">
        {products.map((product) => (
          <div
            key={product._id || product.name}
            className="glass-card flex flex-col h-full overflow-hidden border border-gray-100"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {product.intent && (
                <span className={`${intentClass(product.intent)} absolute top-3 left-3`}>{product.intent}</span>
              )}
              {product.distance && (
                <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-white/80 text-gray-700 font-semibold shadow">
                  {product.distance}
                </span>
              )}
            </div>

            <div className="flex-1 flex flex-col gap-2 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 leading-tight">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.subtitle}</p>
                </div>
                <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-orange-300 transition">
                  <FiHeart />
                </button>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed overflow-hidden text-ellipsis">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-500">Price</div>
                  <div className="text-xl font-bold text-slate-900">
                    {product.price}
                    {product.intent === "rent" && <span className="text-sm text-gray-500 font-semibold"> /month</span>}
                  </div>
                </div>
                {product.badge && <span className="tag">{product.badge}</span>}
              </div>

              {showActions && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    className="h-11 rounded-lg border border-gray-200 text-slate-900 font-semibold flex items-center justify-center gap-2 hover:border-orange-300 transition"
                    onClick={() => addToCart(product)}
                  >
                    <FiShoppingCart />
                    Add to cart
                  </button>
                  <button className="h-11 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition">
                    Buy now <FiArrowRight />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productgrid;
