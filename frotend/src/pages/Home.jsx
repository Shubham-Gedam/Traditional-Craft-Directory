import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArtisans } from "../api/artisanApi";
import { getRegions } from "../api/regionApi";
import { getCraftCategories } from "../api/craftCategoryApi";
import ArtisanCard from "../components/ArtisanCard";

const Home = () => {
  const [artisans, setArtisans] = useState([]);
  const [regions, setRegions] = useState([]);
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [artisanRes, regionRes, craftRes] = await Promise.all([
          getArtisans({ verified: true, limit: 6 }),
          getRegions(),
          getCraftCategories(),
        ]);
        setArtisans(artisanRes.data.data);
        setRegions(regionRes.data.data);
        setCrafts(craftRes.data.data);
      } catch (err) {
        console.error("Error fetching homepage data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-amber-50/30 text-stone-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-800 to-amber-950 text-amber-50 py-24 px-6 text-center">
        {/* Subtle Decorative Pattern Background Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-amber-100 leading-tight">
            Preserving India’s Timeless Craftsmanship
          </h1>

          <p className="text-stone-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-light">
            Empowering verified artisans by eliminating middlemen. Discover, connect, and support regional master craftspeople directly.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/crafts"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium shadow-lg shadow-amber-900/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Browse Crafts
            </Link>
            <Link
              to="/regions"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-stone-600 hover:border-amber-400/60 bg-stone-900/40 hover:bg-stone-800/80 text-amber-100 font-medium backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              Explore Regions
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Craft Categories */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200/80">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-amber-800">Categories</p>
              <h2 className="text-2xl font-serif font-bold text-stone-900">Explore by Craft</h2>
            </div>
            <Link to="/crafts" className="text-sm font-semibold text-amber-800 hover:text-amber-900 underline underline-offset-4">
              View all →
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {crafts.map((c) => (
              <Link
                key={c._id}
                to={`/crafts/${c._id}`}
                className="px-4 py-2 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-amber-50 hover:border-amber-300 text-sm font-medium text-stone-700 hover:text-amber-900 transition-all duration-200 shadow-2xs"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Regions */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200/80">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-amber-800">Geographic Hubs</p>
              <h2 className="text-2xl font-serif font-bold text-stone-900">Browse by Region</h2>
            </div>
            <Link to="/regions" className="text-sm font-semibold text-amber-800 hover:text-amber-900 underline underline-offset-4">
              View all →
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {regions.map((r) => (
              <Link
                key={r._id}
                to={`/regions/${r._id}`}
                className="px-4 py-2 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-amber-50 hover:border-amber-300 text-sm font-medium text-stone-700 hover:text-amber-900 transition-all duration-200 shadow-2xs"
              >
                📍 {r.name}, <span className="text-stone-500">{r.state}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Artisans */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-amber-800">Verified Profiles</p>
              <h2 className="text-3xl font-serif font-bold text-stone-900">Featured Artisans</h2>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h-72 bg-stone-200/70 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : artisans.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-stone-300">
              <p className="text-stone-500 font-medium">No verified artisans found at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {artisans.map((a) => (
                <ArtisanCard key={a._id} artisan={a} />
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default Home;