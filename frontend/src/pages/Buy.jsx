import React, { useMemo, useState } from "react";
import Productgrid from "../components/Productgrid";

const allProducts = [
    {
        _id: 1,
        name: "Dove body wash",
        subtitle: "Sell • Personal care",
        price: "₹100",
        description: "Full bottle, unopened. Quick pickup available today.",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=60",
        intent: "sell",
        distance: "0.6 km",
    },
    {
        _id: 2,
        name: "Hybrid city bicycle",
        subtitle: "Rent • 2 months",
        price: "₹1,000",
        description: "Lightweight frame, serviced, includes lock.",
        image: "https://images.unsplash.com/photo-1508975553369-2b5391329f1e?auto=format&fit=crop&w=900&q=60",
        intent: "rent",
        badge: "Popular",
        distance: "1.2 km",
    },
    {
        _id: 3,
        name: "Chocolate cereal pack",
        subtitle: "Donate • Groceries",
        price: "Free",
        description: "Unopened 100g pack, can drop at your hostel.",
        image: "https://images.unsplash.com/photo-1499638309848-e9968540da89?auto=format&fit=crop&w=900&q=60",
        intent: "donate",
        badge: "Free",
        distance: "0.8 km",
    },
    {
        _id: 4,
        name: "Arduino UNO R3 kit",
        subtitle: "Sell • Electronics",
        price: "₹120",
        description: "Includes jumper wires, LEDs, and sensors.",
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=60",
        intent: "sell",
        distance: "0.5 km",
    },
    {
        _id: 5,
        name: "Mountain bike (M size)",
        subtitle: "Rent • 1 month",
        price: "₹2,000",
        description: "Brand new condition, includes pump.",
        image: "https://images.unsplash.com/photo-1508975553369-2b5391329f1e?auto=format&fit=crop&w=900&q=60",
        intent: "rent",
        badge: "Verified",
        distance: "2 km",
    },
    {
        _id: 6,
        name: "Minimal study lamp",
        subtitle: "Sell • Home",
        price: "₹450",
        description: "Dimmable warm light, perfect for desk setups.",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=60",
        intent: "sell",
        distance: "1.5 km",
    },
];

const Buy = ({ mode = "buy" }) => {
    const [cart, setCart] = useState([]);
    const [intentFilter, setIntentFilter] = useState(mode === "rent" ? "rent" : "all");
    const [query, setQuery] = useState("");

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    const filtered = useMemo(() => {
        return allProducts.filter((p) => {
            const matchesIntent = intentFilter === "all" || p.intent === intentFilter;
            const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
            return matchesIntent && matchesQuery;
        });
    }, [intentFilter, query]);

    return (
        <div className="min-h-screen bg-transparent">
            <div className="container py-10 space-y-6">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <p className="text-sm text-gray-500">Marketplace</p>
                            <h1 className="text-3xl font-bold text-slate-900">Browse listings</h1>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="tag">New today</span>
                            <span className="tag blue">Near you</span>
                        </div>
                    </div>

                    <div className="glass-card p-4 flex flex-col lg:flex-row gap-4 items-center border border-gray-100">
                        <div className="flex-1 w-full relative">
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                type="text"
                                placeholder="Search items, categories, or descriptions..."
                                className="w-full h-12 pl-4 pr-4 rounded-lg border border-gray-200 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-300"
                            />
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {["all", "sell", "donate", "rent"].map((intent) => (
                                <button
                                    key={intent}
                                    onClick={() => setIntentFilter(intent)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                                        intentFilter === intent
                                            ? "bg-orange-100 text-orange-600 border-orange-200"
                                            : "bg-white border-gray-200 text-gray-600 hover:border-orange-200"
                                    }`}
                                >
                                    {intent === "all" ? "All" : intent.charAt(0).toUpperCase() + intent.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <Productgrid products={filtered} addToCart={addToCart} />
            </div>
        </div>
    );
};

export default Buy;
