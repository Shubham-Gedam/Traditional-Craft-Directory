import { useEffect, useState } from "react";
import { getRegions, createRegion, deleteRegion } from "../../../api/regionApi";

const RegionsSection = () => {
  const [regions, setRegions] = useState([]);
  const [form, setForm] = useState({ name: "", state: "", description: "" });
  const [error, setError] = useState("");

  const load = () => getRegions().then((res) => setRegions(res.data.data));

  useEffect(() => { load(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createRegion(form);
      setForm({ name: "", state: "", description: "" });
      load();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create region");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this region?")) return;
    await deleteRegion(id);
    load();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 mb-6">
        <input
          placeholder="Region name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          required
        />
        <input
          placeholder="State"
          value={form.state}
          onChange={(e) => setForm({ ...form, state: e.target.value })}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          required
        />
        <input
          placeholder="Description (optional)"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm flex-1 min-w-[150px]"
        />
        <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md">Add region</button>
      </form>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      <div className="divide-y divide-gray-200 border border-gray-200 rounded-md">
        {regions.map((r) => (
          <div key={r._id} className="flex items-center justify-between px-4 py-3">
            <div>
              <p className="text-sm font-medium text-gray-900">{r.name}, {r.state}</p>
              {r.description && <p className="text-xs text-gray-500">{r.description}</p>}
            </div>
            <button
              onClick={() => handleDelete(r._id)}
              className="text-xs text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
        {regions.length === 0 && <p className="text-sm text-gray-500 px-4 py-3">No regions yet.</p>}
      </div>
    </div>
  );
};

export default RegionsSection;