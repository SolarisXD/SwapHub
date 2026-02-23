import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center py-12 px-4">
      <div className="glass-card max-w-4xl w-full grid md:grid-cols-2 overflow-hidden">
        <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-white p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="pill bg-white/20 text-white">Welcome back</span>
            <h2 className="text-3xl font-bold leading-tight">Log in to keep swapping smarter.</h2>
            <p className="text-white/80 text-sm">Access your dashboard, manage listings, and chat with people around you.</p>
          </div>
          <img src="/assets/icons/logo.png" alt="SwapHub" className="h-20 w-20 rounded-full" />
        </div>

        <div className="p-8 bg-white">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Login</h1>
          <p className="text-sm text-gray-600 mb-6">Use your email and password to continue.</p>
          <form action="/login" method="post" className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">Email or username</label>
              <input
                type="text"
                name="username"
                placeholder="jane@campus.edu"
                required
                className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-white pr-10 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-12 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-sm text-gray-600">
            Don’t have an account? <a href="/signup" className="text-orange-600 font-semibold hover:underline">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
