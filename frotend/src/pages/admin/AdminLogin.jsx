import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(form.email, form.password);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed. Please verify credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-stone-900/5">
      <div className="w-full max-w-md bg-[#FDFBF7] border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        
        {/* Top Decorative Border Accent */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-700 via-amber-900 to-amber-700" />

        {/* Portal Branding Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-amber-900 text-amber-50 flex items-center justify-center text-xl shadow-md border border-amber-700/30">
            🏛️
          </div>
          <h1 className="font-serif font-bold text-2xl text-stone-900 tracking-tight">
            Verification Officer Portal
          </h1>
          <p className="text-xs text-stone-500 font-medium">
            Ministry of Textiles & Handicrafts • Administrative Access
          </p>
        </div>

        {/* Security Alert Banner */}
        <div className="mb-6 p-3 rounded-xl bg-amber-900/5 border border-amber-800/15 flex items-start gap-2.5 text-xs text-stone-600">
          <span className="text-amber-800 font-bold shrink-0">🔒</span>
          <span>
            Authorized personnel only. All access attempts and administrative modifications are logged for audit compliance.
          </span>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Officer Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400 text-sm">
                ✉️
              </span>
              <input
                type="email"
                placeholder="officer@handicrafts.gov.in"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 transition-all shadow-2xs font-medium"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Secure Security Key
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400 text-sm">
                🔑
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-stone-200 rounded-xl text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 transition-all shadow-2xs font-medium"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-stone-400 hover:text-stone-700 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Error Message Alert */}
          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2 animate-fadeIn">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-amber-900 hover:bg-amber-950 text-amber-50 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-amber-100 border-t-transparent rounded-full animate-spin" />
                <span>Authenticating Officer...</span>
              </>
            ) : (
              <span>Authenticate & Access Dashboard →</span>
            )}
          </button>
        </form>

        {/* Public Directory Return Link */}
        <div className="mt-6 pt-4 border-t border-stone-200/80 text-center">
          <Link
            to="/"
            className="text-xs font-semibold text-stone-500 hover:text-amber-900 transition-colors inline-flex items-center gap-1"
          >
            <span>←</span> Return to Public Artisan Directory
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AdminLogin;