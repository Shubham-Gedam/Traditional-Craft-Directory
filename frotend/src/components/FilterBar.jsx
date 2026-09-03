const FilterBar = ({ regions = [], crafts = [], filters = {}, onChange }) => {
  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  const handleClear = () => {
    onChange({ search: "", region: "", craftCategory: "" });
  };

  return (
    <div className="bg-[#FDFBF7] border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-xs mb-8">
      
      {/* Search Bar & Select Dropdowns Header */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
        
        {/* Main Text Search Input */}
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400 text-sm">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search artisans by name, workshop, or village..."
            value={filters.search || ""}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            className="w-full pl-10 pr-9 py-2.5 bg-white border border-stone-200 rounded-xl text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 transition-all shadow-2xs"
          />
          {filters.search && (
            <button
              onClick={() => onChange({ ...filters, search: "" })}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-700 text-xs"
              aria-label="Clear search input"
            >
              ✕
            </button>
          )}
        </div>

        {/* Region Dropdown Filter */}
        <div className="relative min-w-[200px]">
          <select
            value={filters.region || ""}
            onChange={(e) => onChange({ ...filters, region: e.target.value })}
            className="w-full appearance-none bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 pr-8 text-stone-800 text-sm focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 transition-all shadow-2xs font-medium cursor-pointer"
          >
            <option value="">All Regions & States</option>
            {regions.map((r) => (
              <option key={r._id} value={r._id}>
                {r.name}{r.state ? `, ${r.state}` : ""}
              </option>
            ))}
          </select>
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-stone-400 text-xs">
            ▼
          </span>
        </div>

        {/* Craft Category Dropdown Filter */}
        <div className="relative min-w-[200px]">
          <select
            value={filters.craftCategory || ""}
            onChange={(e) => onChange({ ...filters, craftCategory: e.target.value })}
            className="w-full appearance-none bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 pr-8 text-stone-800 text-sm focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 transition-all shadow-2xs font-medium cursor-pointer"
          >
            <option value="">All Craft Forms</option>
            {crafts.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-stone-400 text-xs">
            ▼
          </span>
        </div>

        {/* Clear Filters Action Button */}
        {activeFiltersCount > 0 && (
          <button
            onClick={handleClear}
            className="px-4 py-2.5 rounded-xl border border-stone-300 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shrink-0"
          >
            <span>Reset</span>
            <span className="w-4 h-4 rounded-full bg-amber-900 text-amber-50 flex items-center justify-center text-[10px] font-bold">
              {activeFiltersCount}
            </span>
          </button>
        )}

      </div>
    </div>
  );
};

export default FilterBar;