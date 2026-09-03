import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArtisanById } from "../api/artisanApi";

const ArtisanProfile = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    getArtisanById(id)
      .then((res) => {
        setArtisan(res.data.data);
      })
      .catch(() => setError("Artisan profile not found."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 flex justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-amber-800 border-t-transparent rounded-full animate-spin" />
          <p className="text-stone-600 font-serif text-sm tracking-wide">Fetching Verified Craft Profile...</p>
        </div>
      </div>
    );
  }

  if (error || !artisan) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center max-w-md shadow-lg space-y-4">
          <div className="w-14 h-14 bg-red-50 text-red-700 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">!</div>
          <h2 className="text-xl font-serif font-bold text-stone-900">{error || "Profile Missing"}</h2>
          <Link to="/" className="inline-block px-6 py-2.5 rounded-full bg-amber-900 text-amber-50 text-sm font-medium hover:bg-amber-950 transition-all">
            Return to Directory
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = artisan.images && artisan.images.length > 0 ? artisan.images : [];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-850 pb-20">
      
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-amber-100/90 py-4 px-6 border-b border-amber-900/40">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xs tracking-wider uppercase">
          <Link to="/" className="flex items-center gap-2 hover:text-amber-400 transition-colors font-medium">
            <span>←</span> Back to Craft Directory
          </Link>
          <span className="hidden sm:inline-block font-mono text-amber-400/80">ID: CRAFT-{artisan._id?.slice(-6).toUpperCase()}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 space-y-8">
        
        {/* Main Header Info Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-0 opacity-60 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">{artisan.name}</h1>
                {artisan.isVerified && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Verified Master Artisan
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-stone-600">
                <span className="font-semibold text-amber-900 bg-amber-100/60 px-3 py-1 rounded-lg border border-amber-200/50">
                  {artisan.craftCategory?.name || "Traditional Crafts"}
                </span>
                <span className="flex items-center gap-1 text-stone-700">
                  📍 {artisan.region?.name}, <strong className="text-stone-900">{artisan.region?.state}</strong>
                </span>
                <span>•</span>
                <span className="text-stone-700 font-medium">🏆 {artisan.experienceYears || 0} Years Experience</span>
              </div>
            </div>

            {/* Direct Phone/Email Callout Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
              {artisan.contactPhone && (
                <a
                  href={`tel:${artisan.contactPhone}`}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-amber-900 hover:bg-amber-950 text-amber-50 font-medium text-sm text-center shadow-md shadow-amber-950/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  📞 Call Directly
                </a>
              )}
              {artisan.contactEmail && (
                <a
                  href={`mailto:${artisan.contactEmail}`}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl border border-stone-300 hover:border-amber-800 bg-stone-50 hover:bg-amber-50/50 text-stone-800 font-medium text-sm text-center transition-all"
                >
                  ✉️ Email Artisan
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Gallery Section (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white p-3 rounded-3xl border border-stone-200 shadow-xs">
              <div className="relative aspect-4/3 w-full bg-stone-100 rounded-2xl overflow-hidden group">
                {galleryImages.length > 0 ? (
                  <img
                    src={galleryImages[selectedImage]?.imageUrl}
                    alt={galleryImages[selectedImage]?.caption || artisan.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-stone-400 gap-2">
                    <span className="text-4xl">🏛️</span>
                    <span className="text-sm font-medium">No artwork samples uploaded</span>
                  </div>
                )}
              </div>

              {/* Gallery Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="flex gap-3 mt-3 overflow-x-auto p-1 scrollbar-none">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={img._id || idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                        selectedImage === idx ? "border-amber-900 ring-2 ring-amber-700/20 shadow-md" : "border-stone-200 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img.imageUrl} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Details & Workshop Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Bio & Craftsmanship Background */}
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-900 border-b border-stone-100 pb-2">
                Craft Background & Biography
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed font-sans">
                {artisan.bio || "No detailed bio provided for this artisan."}
              </p>
            </div>

            {/* Techniques */}
            {artisan.techniques && (
              <div className="bg-amber-900/5 p-6 rounded-3xl border border-amber-900/10 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-900">
                  Specialized Heritage Techniques
                </h3>
                <p className="text-stone-800 text-sm leading-relaxed">{artisan.techniques}</p>
              </div>
            )}

            {/* Workshop & Location Box */}
            <div className="bg-stone-900 text-stone-100 p-6 rounded-3xl shadow-lg space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400">Workshop & Location</h3>
                <span className="text-xs bg-stone-800 px-2.5 py-1 rounded-full text-stone-400">Middleman Free</span>
              </div>

              <div className="space-y-3 text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <span className="text-base">📍</span>
                  <div>
                    <p className="text-xs text-stone-400 font-medium uppercase">Address</p>
                    <p className="text-stone-200">{artisan.workshopAddress || "Direct contact required for workshop location."}</p>
                  </div>
                </div>

                {artisan.contactPhone && (
                  <div className="flex items-center gap-3">
                    <span className="text-base">📞</span>
                    <div>
                      <p className="text-xs text-stone-400 font-medium uppercase">Direct Phone</p>
                      <p className="text-stone-200">{artisan.contactPhone}</p>
                    </div>
                  </div>
                )}

                {artisan.contactEmail && (
                  <div className="flex items-center gap-3">
                    <span className="text-base">✉️</span>
                    <div>
                      <p className="text-xs text-stone-400 font-medium uppercase">Official Email</p>
                      <p className="text-stone-200">{artisan.contactEmail}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ArtisanProfile;