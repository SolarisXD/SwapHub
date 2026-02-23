import { Link } from "react-router-dom";
import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-auto">
      <div className="container py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img src="/assets/icons/logo.png" alt="SwapHub" className="h-10 w-10 rounded-full" />
            <span className="text-xl font-semibold">SwapHub</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            A calmer way to move items between people—buy, rent, donate, or swap within your community.
          </p>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span className="tag blue">Secure</span>
            <span className="tag green">Verified</span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Product</h4>
          <ul className="space-y-2 text-slate-300">
            <li><Link to="/buy" className="hover:text-white transition">Marketplace</Link></li>
            <li><Link to="/sell" className="hover:text-white transition">List an Item</Link></li>
            <li><Link to="/donate" className="hover:text-white transition">Donate</Link></li>
            <li><Link to="/rent" className="hover:text-white transition">Rent</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Support</h4>
          <ul className="space-y-2 text-slate-300">
            <li><Link to="/help" className="hover:text-white transition">Help Center</Link></li>
            <li><Link to="/faq" className="hover:text-white transition">FAQs</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition">Privacy & Security</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Stay updated</h4>
          <p className="text-sm text-slate-300">Get product drops, local deals, and donation drives.</p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm placeholder:text-slate-300 focus:outline-none"
            />
            <button className="px-4 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
              Join
            </button>
          </div>
          <div className="flex gap-3 text-slate-300 text-xl">
            <a href="#" aria-label="Twitter" className="hover:text-white transition"><FiTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition"><FiInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition"><FiLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} SwapHub. Built for the community.
      </div>
    </footer>
  );
};

export default Footer;
