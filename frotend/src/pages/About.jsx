import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-850 pb-20">
      
      {/* Hero Header Banner */}
      <section className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-amber-100 py-16 px-6 relative overflow-hidden border-b border-amber-900/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
            🏛️ Ministry of Textiles & Handicrafts Development Corporation
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-50 tracking-tight leading-tight">
            Preserving Heritage, Empowering Artisans
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            The Traditional Craft Directory is India's centralized digital infrastructure built to document, verify, and connect regional artisans directly with buyers, institutions, and researchers worldwide.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 space-y-12">

        {/* Impact KPIs / Key Metrics Bar */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-stone-200 text-center shadow-2xs">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-amber-900">100%</span>
            <span className="text-xs text-stone-600 font-medium uppercase tracking-wide">Direct Contact Access</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200 text-center shadow-2xs">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-emerald-800">Verified</span>
            <span className="text-xs text-stone-600 font-medium uppercase tracking-wide">Admin Approved Profiles</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200 text-center shadow-2xs">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-amber-900">0%</span>
            <span className="text-xs text-stone-600 font-medium uppercase tracking-wide">Middleman Commission</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200 text-center shadow-2xs">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-stone-900">Pan-India</span>
            <span className="text-xs text-stone-600 font-medium uppercase tracking-wide">Regional Mapping</span>
          </div>
        </section>

        {/* Problem vs Solution Comparative Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50/50 p-6 sm:p-8 rounded-3xl border border-red-200/60 space-y-3">
            <div className="w-10 h-10 bg-red-100 text-red-700 rounded-xl flex items-center justify-center font-bold text-lg">
              ⚠️
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">The Problem We Are Solving</h3>
            <ul className="text-stone-600 text-sm space-y-2 leading-relaxed">
              <li>• Heavy reliance on intermediaries who take the majority of profits.</li>
              <li>• Lack of direct digital presence for rural and regional artisans.</li>
              <li>• Difficulty for institutions and buyers to verify authentic craft origin.</li>
              <li>• Gradual decline of indigenous techniques due to economic instability.</li>
            </ul>
          </div>

          <div className="bg-emerald-50/50 p-6 sm:p-8 rounded-3xl border border-emerald-200/60 space-y-3">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center font-bold text-lg">
              🌱
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">Our Digital Intervention</h3>
            <ul className="text-stone-700 text-sm space-y-2 leading-relaxed">
              <li>• Direct phone and email access to verified workshop addresses.</li>
              <li>• Region and craft category taxonomy for seamless discoverability.</li>
              <li>• Admin validation process ensuring verified cultural authenticity.</li>
              <li>• Free digital representation for small-scale and endangered art forms.</li>
            </ul>
          </div>
        </section>

        {/* Scope of Product Section (PRD Mapping) */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-xs space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-900">Product Blueprint</span>
            <h2 className="text-2xl font-serif font-bold text-stone-900">Scope & Operational Directives</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-stone-200/80 space-y-3">
              <h4 className="font-serif font-bold text-amber-900 flex items-center gap-2">
                <span className="text-emerald-700">✓</span> Currently In Scope (Phase 1)
              </h4>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-2">
                <li>• Web-based searchable directory of master craftspeople.</li>
                <li>• Detailed profiles featuring technique descriptions & product samples.</li>
                <li>• Administrative content verification dashboard.</li>
                <li>• Geographic and category filtering (State & Craft type).</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-stone-200/80 space-y-3">
              <h4 className="font-serif font-bold text-stone-800 flex items-center gap-2">
                <span className="text-amber-700">🚀</span> Future Roadmap (Phase 2)
              </h4>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-2">
                <li>• Direct payment gateways & e-commerce transaction handling.</li>
                <li>• Multilingual platform support for vernacular accessibility.</li>
                <li>• Native mobile applications & AI-driven craft recommendations.</li>
                <li>• Direct government scheme integration for registered artisans.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Institutional Contact Banner */}
        <section className="bg-stone-900 text-stone-100 p-8 sm:p-10 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Governance & Data Integrity</span>
            <h3 className="text-xl font-serif font-bold text-white">Require Official Information or Listing Verification?</h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Platform administrators review every listing to maintain genuine craft representation. Contact our support team for listing updates or institutional partnerships.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 px-6 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-medium text-sm transition-all shadow-md shadow-amber-950/20 hover:-translate-y-0.5"
          >
            Contact System Admin
          </Link>
        </section>

      </div>
    </div>
  );
};

export default About;