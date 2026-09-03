import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import ArtisansSection from "./sections/ArtisansSection";
import RegionsSection from "./sections/RegionsSection";
import CraftCategoriesSection from "./sections/CraftCategoriesSection";

const tabs = [
  { 
    key: "artisans", 
    label: "Artisan Verification", 
    icon: "🧑‍🎨", 
    description: "Verify artisan credentials, workshop photos & experience records",
    Component: ArtisansSection 
  },
  { 
    key: "regions", 
    label: "Geographical Regions", 
    icon: "📍", 
    description: "Manage craft clusters, state jurisdictions & geographic hubs",
    Component: RegionsSection 
  },
  { 
    key: "crafts", 
    label: "Craft Categories", 
    icon: "🏺", 
    description: "Define traditional techniques, material taxonomy & heritage types",
    Component: CraftCategoriesSection 
  },
];

const AdminDashboard = () => {
  const { admin, logout } = useAuth();
  const [active, setActive] = useState("artisans");

  const currentTab = tabs.find((t) => t.key === active) || tabs[0];
  const ActiveComponent = currentTab.Component;

  return (
    <div className="min-h-screen bg-stone-900/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Officer Header Bar */}
        <div className="bg-[#FDFBF7] border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-900 text-amber-50 flex items-center justify-center font-serif text-2xl font-bold shadow-md border border-amber-800/30 shrink-0">
              {admin?.name ? admin.name.charAt(0).toUpperCase() : "O"}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Active Officer Session
                </span>
                <span className="text-xs font-mono text-stone-400">ID: {admin?._id?.slice(-6) || "GOV-892"}</span>
              </div>
              <h1 className="font-serif font-bold text-2xl text-stone-900 mt-1">
                Welcome, {admin?.name || "Verification Officer"}
              </h1>
              <p className="text-xs text-stone-500 font-medium">
                Ministry of Textiles • Directory Content Moderation & Verification Console
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right pr-4 border-r border-stone-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">System Status</span>
              <span className="text-xs font-semibold text-emerald-700">Audit Logging Enabled</span>
            </div>
            <button
              onClick={logout}
              className="px-4 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-100 text-stone-800 text-xs font-bold transition-all shadow-2xs hover:border-stone-400 active:translate-y-0.5 flex items-center gap-2"
            >
              <span>🚪</span>
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="bg-[#FDFBF7] border border-stone-200/90 rounded-2xl p-2 shadow-2xs flex flex-col sm:flex-row gap-2">
          {tabs.map((t) => {
            const isActiveTab = active === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2.5 ${
                  isActiveTab
                    ? "bg-amber-900 text-amber-50 shadow-md translate-y-0"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-100/80"
                }`}
              >
                <span className="text-base">{t.icon}</span>
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Section Context Banner */}
        <div className="px-1 flex items-center justify-between text-xs text-stone-500">
          <p className="font-medium">
            <strong className="text-stone-800 font-semibold">{currentTab.label}:</strong> {currentTab.description}
          </p>
          <span className="hidden sm:inline-block font-mono text-[11px]">
            Updated: {new Date().toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
          </span>
        </div>

        {/* Dynamic Section Content Container */}
        <div className="bg-[#FDFBF7] border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs min-h-[400px]">
          <ActiveComponent />
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;