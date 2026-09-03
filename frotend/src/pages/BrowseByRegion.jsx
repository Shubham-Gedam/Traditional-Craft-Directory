import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtisans } from "../api/artisanApi";
import { getRegions } from "../api/regionApi";
import { getCraftCategories } from "../api/craftCategoryApi";
import ArtisanCard from "../components/ArtisanCard";
import FilterBar from "../components/FilterBar";

const BrowseByRegion = () => {
  const { regionId } = useParams();
  const [artisans, setArtisans] = useState([]);
  const [regions, setRegions] = useState([]);
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ region: regionId || "" });

  useEffect(() => {
    getRegions().then((res) => setRegions(res.data.data));
    getCraftCategories().then((res) => setCrafts(res.data.data));
  }, []);

  useEffect(() => {
    setFilters((f) => ({ ...f, region: regionId || "" }));
  }, [regionId]);

  useEffect(() => {
    setLoading(true);
    getArtisans(filters)
      .then((res) => setArtisans(res.data.data))
      .finally(() => setLoading(false));
  }, [filters]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-medium text-gray-900 mb-6">Browse by region</h1>

      <FilterBar regions={regions} crafts={crafts} filters={filters} onChange={setFilters} />

      {loading ? (
        <p className="text-gray-500 text-sm">Loading...</p>
      ) : artisans.length === 0 ? (
        <p className="text-gray-500 text-sm">No artisans found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {artisans.map((a) => (
            <ArtisanCard key={a._id} artisan={a} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseByRegion;