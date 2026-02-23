import React, { useState } from "react";
import axios from "axios";
import ImageUpload from "./ImageUpload";

const SellForm = () => {
  const [formData, setFormData] = useState({
    product: "",
    image: "",
    seller: "",
    college: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products/upload", formData);
      alert("Product uploaded successfully!");
      setFormData({ product: "", image: "", seller: "", college: "", price: "" });
    } catch (error) {
      console.error("Error uploading product", error);
    }
  };

  return (
    <div className="glass-card p-6 lg:p-8 grid lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">List an item</p>
          <h2 className="text-2xl font-bold text-slate-900">Describe what you are selling</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">Product name</label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">Seller name</label>
              <input
                type="text"
                name="seller"
                value={formData.seller}
                onChange={handleChange}
                className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">College</label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">Image URL (optional)</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="https://..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-md hover:shadow-lg transition"
          >
            Publish listing
          </button>
          <p className="text-xs text-gray-500">We will show this to people near your campus for faster handovers.</p>
        </form>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <ImageUpload />
      </div>
    </div>
  );
};

export default SellForm;
