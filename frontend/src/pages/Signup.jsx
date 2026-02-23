import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    block: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://swaphub-backend.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (res.ok) {
        alert("Signup successful!");
        window.location.href = "/login";
      } else {
        const error = await res.json();
        alert("Signup failed: " + (error.message || "Unknown error"));
      }
    } catch (err) {
      alert("Network error");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center py-12 px-4">
      <div className="glass-card max-w-5xl w-full grid md:grid-cols-2 overflow-hidden">
        <div className="p-10 bg-white flex flex-col justify-center">
          <span className="pill mb-3">Create your account</span>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Join SwapHub</h1>
          <p className="text-sm text-gray-600 mb-6">
            Start selling, renting, and donating within your community.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">Full name</label>
              <input
                type="text"
                name="username"
                placeholder="Jane Doe"
                required
                value={formData.username}
                onChange={handleChange}
                className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="jane@campus.edu"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              Create account
            </button>
          </form>
          <div className="mt-6 text-sm text-gray-600">
            Already have an account? <a href="/login" className="text-orange-600 font-semibold hover:underline">Log in</a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-10 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Why join?</h2>
            <ul className="space-y-2 text-sm text-white/90">
              <li>• List items in under a minute.</li>
              <li>• Reach verified people near you.</li>
              <li>• Swap, sell, rent, or donate seamlessly.</li>
            </ul>
          </div>
          <img src="/assets/icons/logo.png" alt="SwapHub" className="h-20 w-20 rounded-full self-start" />
        </div>
      </div>
    </div>
  );
}
