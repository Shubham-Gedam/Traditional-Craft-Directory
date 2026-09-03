import { Link } from "react-router-dom";

const ArtisanCard = ({ artisan }) => {
  const image = artisan?.images?.[0]?.imageUrl;
  const craftName = artisan?.craftCategory?.name || "Traditional Craft";
  const regionName = artisan?.region?.name || "India";

  return (
    <Link
      to={`/artisans/${artisan?._id}`}
      className="group block rounded-2xl border border-stone-200/90 bg-[#FDFBF7] overflow-hidden hover:border-amber-700/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image Container with Dynamic Badge Overlay */}
      <div className="relative h-48 bg-stone-100 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={artisan?.name || "Artisan"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-stone-200/60 text-stone-400 gap-2">
            <span className="text-2xl">🏺</span>
            <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
              No Workshop Photo
            </span>
          </div>
        )}

        {/* Top Badges Overlay */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          {artisan?.isVerified ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-[11px] font-medium border border-emerald-500/30 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified Master
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-900/70 backdrop-blur-md text-stone-300 text-[11px] font-medium border border-stone-700/50">
              Listing Pending
            </span>
          )}

          {artisan?.experienceYears && (
            <span className="px-2.5 py-1 rounded-full bg-amber-950/80 backdrop-blur-md text-amber-200 text-[11px] font-mono border border-amber-600/30">
              {artisan.experienceYears}+ Yrs Master
            </span>
          )}
        </div>
      </div>

      {/* Card Body Details */}
      <div className="p-5 flex flex-col justify-between">
        <div>
          {/* Artisan Name */}
          <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-1">
            {artisan?.name || "Unnamed Artisan"}
          </h3>

          {/* Region & Location Subtitle */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-1 font-medium">
            <span>📍</span>
            <span className="truncate">{regionName}</span>
          </div>
        </div>

        {/* Bottom Metadata Badges & CTA */}
        <div className="mt-4 pt-3.5 border-t border-stone-200/80 flex items-center justify-between gap-2">
          {/* Craft Category Pill */}
          <span className="px-3 py-1 rounded-lg bg-amber-900/10 text-amber-950 text-xs font-semibold truncate">
            {craftName}
          </span>

          {/* Direct Profile Link CTA */}
          <span className="text-xs font-bold text-amber-900 group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
            View Profile <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArtisanCard;