import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoBlue from "@/assets/Logos/logo-blue.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Shop" },
  { to: "/admin", label: "Admin" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  if (isAdmin) return null;

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/60">
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoBlue} alt="iDeals" className="h-8 w-auto" />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-[13px] text-foreground/80">
          {links.map((l, i) => (
            <li key={i}>
              <Link to={l.to} className="hover:text-primary transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3"></div>

        <button className="md:hidden p-2 -mr-2" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <ul className="px-5 py-4 flex flex-col gap-3 text-sm">
            {links.map((l, i) => (
              <li key={i}>
                <Link to={l.to} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/admin" onClick={() => setOpen(false)}>
                Admin
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
