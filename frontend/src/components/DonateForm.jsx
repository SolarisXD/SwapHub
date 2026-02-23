import React, { useState } from "react";
import axios from "axios";
import ImageUpload from "../components/ImageUpload";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    item: "",
    image: "",
    donor: "",
    college: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/donations/add", formData);
      alert("Item donated successfully!");
      setFormData({ item: "", image: "", donor: "", college: "", description: "" });
    } catch (error) {
      console.error("Error donating item", error);
    }
  };

  return (
    <div className="glass-card p-6 lg:p-8 grid lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Give it forward</p>
          <h2 className="text-2xl font-bold text-slate-900">Share items that can help others</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">Item name</label>
            <input
              type="text"
              name="item"
              value={formData.item}
              onChange={handleChange}
              className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">Your name</label>
              <input
                type="text"
                name="donor"
                value={formData.donor}
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
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full min-h-[110px] px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
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
          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-md hover:shadow-lg transition"
          >
            Post donation
          </button>
          <p className="text-xs text-gray-500">We prioritize donation visibility for nearby students who need it most.</p>
        </form>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex items-center justify-center">
        <ImageUpload />
      </div>
    </div>
  );
};

export default DonationForm;
