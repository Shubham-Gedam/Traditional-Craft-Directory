import { useEffect, useState } from "react";
import { getCraftCategories, createCraftCategory, deleteCraftCategory } from "../../../api/craftCategoryApi";

const CraftCategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const [error, setError] = useState("");

  const load = () => getCraftCategories().then((res) => setCategories(res.data.data));

  useEffect(() => { load(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createCraftCategory(form);
      setForm({ name: "", description: "" });
      load();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create category");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this craft category?")) return;
    await deleteCraftCategory(id);
    load();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 mb-6">
        <input
          placeholder="Craft name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          required
        />
        <input
          placeholder="Description (optional)"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm flex-1 min-w-[150px]"
        />
        <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md">Add craft</button>
      </form>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      <div className="divide-y divide-gray-200 border border-gray-200 rounded-md">
        {categories.map((c) => (
          <div key={c._id} className="flex items-center justify-between px-4 py-3">
            <div>
              <p className="text-sm font-medium text-gray-900">{c.name}</p>
              {c.description && <p className="text-xs text-gray-500">{c.description}</p>}
            </div>
            <button
              onClick={() => handleDelete(c._id)}
              className="text-xs text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
        {categories.length === 0 && <p className="text-sm text-gray-500 px-4 py-3">No craft categories yet.</p>}
      </div>
    </div>
  );
};

export default CraftCategoriesSection;