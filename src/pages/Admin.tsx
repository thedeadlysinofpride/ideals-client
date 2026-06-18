import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/lib/api";

export default function Admin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@ideals.gh");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 4) {
      setErr("Enter your password.");
      return;
    }

    setLoading(true);
    setErr("");

    try {
      const response = await api.login(email, password);
      if (response.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/admin/dashboard");
      } else {
        setErr("Invalid credentials");
      }
    } catch (error: any) {
      setErr(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid place-items-center p-16">
          <div className="text-white max-w-md">
            <h1 className="text-5xl font-semibold tracking-tight">
              iDeals admin.
            </h1>
            <p className="mt-4 text-white/80">
              Manage your catalog — add products, toggle stock, set discounts.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="flex items-center justify-center p-8">
        <form onSubmit={submit} className="w-full max-w-sm">
          <span className="text-2xl font-semibold tracking-tight text-primary block mb-10">
            iDeals
          </span>
          <h2 className="text-2xl font-semibold tracking-tight">Sign in</h2>
          <p className="mt-1 text-sm text-gray-500">Welcome back.</p>

          <div className="mt-8 space-y-4">
            <label className="block">
              <span className="text-xs text-gray-500">Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="mt-1 w-full h-11 px-4 rounded-xl border border-gray-200 bg-white outline-none focus:border-primary"
              />
            </label>
            <label className="block">
              <span className="text-xs text-gray-500">Password</span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full h-11 px-4 rounded-xl border border-gray-200 bg-white outline-none focus:border-primary"
              />
            </label>
            {err && <p className="text-xs text-red-500">{err}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-xl bg-primary text-white text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
          <a
            href="/"
            className="mt-6 inline-block text-xs text-gray-500 hover:text-gray-900"
          >
            ← Back to store
          </a>
        </form>
      </div>
    </div>
  );
}
