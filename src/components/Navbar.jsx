import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PRIMARY = "#8c2bee";

const THEMES = {
  dark:  { bg: "rgba(10,10,12,0.92)", border: "#1f1f23", text: "#f1f5f9", muted: "#64748b", surface: "#131316" },
  light: { bg: "rgba(247,246,248,0.92)", border: "#e2e8f0", text: "#0f172a", muted: "#64748b", surface: "#ffffff" },
};

/**
 * Navbar props:
 *   logo         { text: string, icon: string }
 *   links        Array<{ label: string, to: string }>   "to" = React Router path e.g. "/projects"
 *   ctaLabel     string
 *   ctaIcon      string (Material Symbol name, optional)
 *   onCtaClick   () => void (optional)
 *   theme        "dark" | "light"
 *   onThemeToggle () => void
 *   avatarSrc    string URL (optional)
 */
export default function Navbar({
  logo = { text: "Alex.Dev", icon: "terminal" },
  links = [],
  ctaLabel = "Hire Me",
  ctaIcon = "",
  onCtaClick,
  theme = "dark",
  onThemeToggle,
  avatarSrc = "",
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const t = THEMES[theme] ?? THEMES.dark;

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <style>{`
        .nb-link { text-decoration: none; transition: color 0.18s; position: relative; padding-bottom: 3px; }
        .nb-link:hover { color: ${PRIMARY} !important; }
        .nb-active-link::after {
          content: ''; position: absolute;
          bottom: -5px; left: 0; right: 0;
          height: 2px; background: ${PRIMARY}; border-radius: 9999px;
        }
        .nb-cta:hover { opacity: 0.88; }
        .nb-icon-btn:hover { border-color: ${PRIMARY} !important; color: ${PRIMARY} !important; }
        .nb-mobile-item:hover { background: rgba(140,43,238,0.08) !important; color: ${PRIMARY} !important; }
        .nb-slide { animation: nbSlide 0.18s ease; }
        @keyframes nbSlide { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
        @media (min-width: 768px) { .nb-hamburger{display:none!important} .nb-desktop{display:flex!important} }
        @media (max-width: 767px)  { .nb-desktop{display:none!important}  .nb-hamburger{display:flex!important} }
      `}</style>

      <header style={{
        position: "sticky", top: 0, zIndex: 999,
        borderBottom: `1px solid ${t.border}`,
        backgroundColor: t.bg,
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        fontFamily: "Inter, sans-serif", width: "100%",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>

          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, backgroundColor: PRIMARY, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{logo.icon}</span>
            </div>
            <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.04em", color: t.text }}>
              {logo.text.split(".")[0]}
              <span style={{ color: PRIMARY }}>.</span>
              {logo.text.split(".")[1] ?? ""}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="nb-desktop" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {links.map(({ label, to }) => {
              const active = isActive(to);
              return (
                <Link key={label} to={to}
                  className={`nb-link${active ? " nb-active-link" : ""}`}
                  style={{ fontSize: 14, fontWeight: active ? 700 : 500, color: active ? PRIMARY : t.muted }}>
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            {onThemeToggle && (
              <button className="nb-icon-btn" onClick={onThemeToggle} title="Toggle theme"
                style={{ width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, border: `1px solid ${t.border}`, backgroundColor: "transparent", color: t.muted, cursor: "pointer", fontSize: 15, transition: "all 0.18s" }}>
                {theme === "dark" ? "☀" : "🌙"}
              </button>
            )}

            <button className="nb-cta" onClick={onCtaClick}
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 18px", height: 38, borderRadius: 6, backgroundColor: PRIMARY, color: "#fff", fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer", whiteSpace: "nowrap", transition: "opacity 0.15s" }}>
              {ctaIcon && <span className="material-symbols-outlined" style={{ fontSize: 15 }}>{ctaIcon}</span>}
              {ctaLabel}
            </button>

            {avatarSrc && (
              <div style={{ width: 34, height: 34, borderRadius: "50%", border: `1px solid ${t.border}`, overflow: "hidden", flexShrink: 0 }}>
                <img src={avatarSrc} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            )}

            <button className="nb-hamburger nb-icon-btn" onClick={() => setMenuOpen(o => !o)}
              style={{ width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, border: `1px solid ${t.border}`, backgroundColor: "transparent", color: t.muted, cursor: "pointer", transition: "all 0.18s" }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{menuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="nb-slide" style={{ borderTop: `1px solid ${t.border}`, backgroundColor: t.surface, padding: "10px 18px", display: "flex", flexDirection: "column", gap: 2 }}>
            {links.map(({ label, to }) => {
              const active = isActive(to);
              return (
                <Link key={label} to={to} onClick={() => setMenuOpen(false)} className="nb-mobile-item"
                  style={{ display: "block", padding: "10px 12px", borderRadius: 8, fontSize: 15, fontWeight: active ? 700 : 500, color: active ? PRIMARY : t.muted, textDecoration: "none", backgroundColor: active ? "rgba(140,43,238,0.08)" : "transparent", transition: "all 0.18s" }}>
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
}