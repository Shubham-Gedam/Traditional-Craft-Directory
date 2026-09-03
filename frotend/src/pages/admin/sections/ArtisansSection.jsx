import { useEffect, useState } from "react";
import { getArtisans, createArtisan, verifyArtisan, deleteArtisan } from "../../../api/artisanApi";
import { getRegions } from "../../../api/regionApi";
import { getCraftCategories } from "../../../api/craftCategoryApi";

const emptyForm = {
  name: "", bio: "", region: "", craftCategory: "", experienceYears: "",
  workshopAddress: "", contactPhone: "", contactEmail: "", techniques: "", imageUrl: "",
};

const ArtisansSection = () => {
  const [artisans, setArtisans] = useState([]);
  const [regions, setRegions] = useState([]);
  const [crafts, setCrafts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  const load = () => getArtisans({ limit: 50 }).then((res) => setArtisans(res.data.data));

  useEffect(() => {
    load();
    getRegions().then((res) => setRegions(res.data.data));
    getCraftCategories().then((res) => setCrafts(res.data.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const payload = {
        ...form,
        experienceYears: Number(form.experienceYears),
        images: form.imageUrl ? [{ imageUrl: form.imageUrl }] : [],
      };
      delete payload.imageUrl;
      await createArtisan(payload);
      setForm(emptyForm);
      setShowForm(false);
      load();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create artisan");
    }
  };

  const handleVerify = async (id, current) => {
    await verifyArtisan(id, !current);
    load();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this artisan?")) return;
    await deleteArtisan(id);
    load();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-medium text-gray-900">{artisans.length} artisans</h2>
        <button
          onClick={() => setShowForm((s) => !s)}
          className="text-sm bg-gray-900 text-white px-4 py-2 rounded-md"
        >
          {showForm ? "Cancel" : "Add artisan"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 border border-gray-200 rounded-md p-4">
          <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="border border-gray-300 rounded-md px-3 py-2 text-sm" required />
          <input placeholder="Experience (years)" type="number" value={form.experienceYears} onChange={(e) => setForm({ ...form, experienceYears: e.target.value })} className="border border-gray-300 rounded-md px-3 py-2 text-sm" required />

          <select value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })} className="border border-gray-300 rounded-md px-3 py-2 text-sm" required>
            <option value="">Select region</option>
            {regions.map((r) => <option key={r._id} value={r._id}>{r.name}, {r.state}</option>)}
          </select>

          <select value={form.craftCategory} onChange={(e) => setForm({ ...form, craftCategory: e.target.value })} className="border border-gray-300 rounded-md px-3 py-2 text-sm" required>
            <option value="">Select craft</option>
            {crafts.map((c) => <option key={c._id} value={c._id}>{c.name}</option>)}
          </select>

          <input placeholder="Workshop address" value={form.workshopAddress} onChange={(e) => setForm({ ...form, workshopAddress: e.target.value })} className="border border-gray-300 rounded-md px-3 py-2 text-sm sm:col-span-2" required />
          <input placeholder="Contact phone" value={form.contactPhone} onChange={(e) => setForm({ ...form, contactPhone: e.target.value })} className="border border-gray-300 rounded-md px-3 py-2 text-sm" />
          <input placeholder="Contact email" value={form.contactEmail} onChange={(e) => setForm({ ...form, contactEmail: e.target.value })} className="border border-gray-300 rounded-md px-3 py-2 text-sm" />
          <textarea placeholder="Bio" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} className="border border-gray-300 rounded-md px-3 py-2 text-sm sm:col-span-2" rows={2} />
          <textarea placeholder="Techniques used" value={form.techniques} onChange={(e) => setForm({ ...form, techniques: e.target.value })} className="border border-gray-300 rounded-md px-3 py-2 text-sm sm:col-span-2" rows={2} />
          <input placeholder="Image URL" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} className="border border-gray-300 rounded-md px-3 py-2 text-sm sm:col-span-2" />

          {error && <p className="text-sm text-red-600 sm:col-span-2">{error}</p>}

          <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md sm:col-span-2">Save artisan</button>
        </form>
      )}

      <div className="divide-y divide-gray-200 border border-gray-200 rounded-md">
        {artisans.map((a) => (
          <div key={a._id} className="flex items-center justify-between px-4 py-3">
            <div>
              <p className="text-sm font-medium text-gray-900 flex items-center gap-2">
                {a.name}
                {a.isVerified && <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Verified</span>}
              </p>
              <p className="text-xs text-gray-500">{a.craftCategory?.name} · {a.region?.name} · {a.profileViewCount} views</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => handleVerify(a._id, a.isVerified)} className="text-xs text-blue-600 hover:underline">
                {a.isVerified ? "Unverify" : "Verify"}
              </button>
              <button onClick={() => handleDelete(a._id)} className="text-xs text-red-600 hover:underline">
                Delete
              </button>
            </div>
          </div>
        ))}
        {artisans.length === 0 && <p className="text-sm text-gray-500 px-4 py-3">No artisans yet.</p>}
      </div>
    </div>
  );
};

export default ArtisansSection;