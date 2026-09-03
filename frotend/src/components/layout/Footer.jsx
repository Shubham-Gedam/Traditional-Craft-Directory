import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-amber-900/20 bg-stone-900 text-stone-300 mt-20">
      
      {/* Top Institutional Branding Banner */}
      <div className="bg-stone-950 py-8 border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-900/40 border border-amber-700/40 text-amber-300 flex items-center justify-center font-serif font-bold text-xl shadow-inner">
              🧵
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-100 text-base">
                Traditional Craft Directory
              </h3>
              <p className="text-xs text-amber-400/90 font-medium tracking-wide">
                Ministry of Textiles & Handicrafts Development Initiative
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-stone-400">
            <span className="px-3 py-1 rounded-full bg-stone-900 border border-stone-800">
              Government of India
            </span>
            <span className="px-3 py-1 rounded-full bg-stone-900 border border-stone-800">
              Handicrafts Development Corp
            </span>
            <span className="px-3 py-1 rounded-full bg-stone-900 border border-stone-800">
              Unified Mentor
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Mission & Context (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              About The Platform
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-light">
              The Traditional Craft Directory is a centralized digital portal designed to document, verify, and promote India's traditional artisans. By providing direct access to verified artisan profiles and workshop contacts, the platform eliminates middlemen and supports sustainable rural livelihoods.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Direct, Middleman-Free Artisan Connect</span>
            </div>
          </div>

          {/* Quick Platform Navigation (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Explore Directory
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>›</span> Directory Home
                </Link>
              </li>
              <li>
                <Link to="/crafts" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>›</span> Browse by Craft Type
                </Link>
              </li>
              <li>
                <Link to="/regions" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>›</span> Regional Craft Mapping
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>›</span> Mission & Objectives
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Admin Access (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Data Integrity & Administration
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              All listed craft categories, workshop addresses, and credentials undergo manual administrative verification to ensure genuine heritage representation.
            </p>
            <div className="pt-1">
              <Link
                to="/admin/login"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-amber-300 text-xs font-medium transition-all shadow-xs hover:-translate-y-0.5"
              >
                🔒 Officer & Admin Login Portal
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Legal Disclaimer Bar */}
      <div className="border-t border-stone-800 bg-stone-950/80 py-6 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Traditional Craft Directory. All rights reserved.</p>
          <p className="text-stone-400">
            A project under <strong className="text-stone-300">Unified Mentor</strong> in collaboration with official craft bodies.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer; 