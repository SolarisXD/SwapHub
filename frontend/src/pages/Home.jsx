import React from "react";
import { Link } from "react-router-dom";
import Productgrid from "../components/Productgrid";

const featuredListings = [
  {
    _id: "f1",
    name: "City commuter cycle",
    price: "₹1,000",
    subtitle: "Rent • 2 months",
    description: "Well-maintained bike with lock and lights included.",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=900&q=60",
    intent: "rent",
    badge: "Verified",
  },
  {
    _id: "f2",
    name: "Arduino starter kit",
    price: "₹120",
    subtitle: "Sell • Electronics",
    description: "All components + breadboard, used for 1 project only.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=60",
    intent: "sell",
    badge: "In demand",
  },
  {
    _id: "f3",
    name: "Choco cereal pack",
    price: "₹35",
    subtitle: "Donate • Groceries",
    description: "Unopened pack, expires in 3 months.",
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=60",
    intent: "donate",
    badge: "Free",
  },
  {
    _id: "f4",
    name: "Minimal desk lamp",
    price: "₹450",
    subtitle: "Sell • Home",
    description: "Warm dimmable light, perfect for late-night sessions.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=60",
    intent: "sell",
    badge: "Trending",
  },
];

const categories = [
  {
    title: "Campus Essentials",
    description: "Cycles, electronics, and daily gear for students.",
    link: "/buy",
  },
  {
    title: "Give it Forward",
    description: "Donate books, stationery, and unopened supplies.",
    link: "/donate",
  },
  {
    title: "Short-term Rentals",
    description: "Pick up tools, tech, and decor only for when you need it.",
    link: "/rent",
  },
];

const Home = () => {
  return (
    <div className="bg-transparent">
      <section className="container grid grid-cols-1 lg:grid-cols-2 gap-10 py-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white shadow-sm border border-orange-200 text-orange-600 font-semibold">
            Community marketplace • Fast handovers
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
            A calmer way to <span className="text-orange-500">swap</span>, rent, and donate.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Find trusted listings nearby, list your own items in under a minute, and keep goods moving—not collecting dust.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/sell"
              className="px-5 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              List an item
            </Link>
            <Link
              to="/buy"
              className="px-5 py-3 rounded-full bg-white border border-gray-200 text-slate-900 font-semibold shadow-sm hover:border-orange-300 transition"
            >
              Browse marketplace
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-xl">
            {[
              { value: "1.4k+", label: "Active listings" },
              { value: "320+", label: "Donations this month" },
              { value: "4.8/5", label: "Community trust" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Live around you</p>
              <h3 className="text-xl font-semibold text-slate-900">Curated picks today</h3>
            </div>
            <Link to="/buy" className="text-sm font-semibold text-orange-600 hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {featuredListings.slice(0, 2).map((item) => (
              <div key={item._id} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                <img src={item.image} alt={item.name} className="h-32 w-full object-cover" />
                <div className="p-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900 text-sm">{item.name}</h4>
                    <span className="tag">{item.intent}</span>
                  </div>
                  <p className="text-xs text-gray-500">{item.subtitle}</p>
                  <div className="text-base font-bold text-slate-900">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link to="/sell" className="block w-full text-center px-4 py-3 rounded-lg bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition">List now</Link>
            <Link to="/donate" className="block w-full text-center px-4 py-3 rounded-lg bg-slate-900 text-white font-semibold shadow hover:bg-slate-800 transition">Donate</Link>
          </div>
        </div>
      </section>

      <section className="container py-4 grid sm:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link key={cat.title} to={cat.link} className="glass-card p-5 shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="text-sm font-semibold text-orange-600">{cat.title}</div>
            <p className="text-sm text-gray-600 mt-2">{cat.description}</p>
            <span className="text-sm font-semibold text-slate-900 mt-3 inline-flex items-center gap-2">Explore →</span>
          </Link>
        ))}
      </section>

      <section className="container py-10 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Marketplace</p>
            <h2 className="text-2xl font-bold text-slate-900">Featured listings</h2>
          </div>
          <Link to="/buy" className="text-sm font-semibold text-orange-600 hover:underline">See all</Link>
        </div>
        <Productgrid products={featuredListings} />
      </section>

      <section className="container py-12 grid md:grid-cols-3 gap-6">
        {["List in 60 seconds", "Safe handover", "Local-first matches"].map((title, idx) => (
          <div key={title} className="glass-card p-6 shadow-sm border border-gray-100">
            <div className="text-sm font-semibold text-orange-600">Step {idx + 1}</div>
            <h3 className="text-lg font-semibold text-slate-900 mt-2">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">
              Create a listing, choose sell/rent/donate, and reach people nearby. We keep it safe and transparent.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
