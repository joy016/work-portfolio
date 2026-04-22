import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

// ─── Fonts via Google ─────────────────────────────────────────────────────────
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    body, #root, .portfolio-root {
      font-family: 'Outfit', sans-serif;
      background: #080808;
      color: #f0ede6;
    }

    .font-serif { font-family: 'Instrument Serif', serif; }
    .font-sans  { font-family: 'Outfit', sans-serif; }

    ::selection { background: #c8f060; color: #080808; }

    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-thumb { background: #c8f060; border-radius: 2px; }

    /* Grain overlay */
    .grain::after {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 9999;
    }

    @keyframes float-y {
      0%,100% { transform: translateY(0px) rotate(0deg); }
      50%      { transform: translateY(-14px) rotate(2deg); }
    }
    @keyframes marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes fade-up {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes scale-in {
      from { opacity: 0; transform: scale(0.94); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes blink {
      0%,100% { opacity: 1; }
      50%      { opacity: 0; }
    }

    .anim-float   { animation: float-y 6s ease-in-out infinite; }
    .anim-marquee { animation: marquee 28s linear infinite; }
    .anim-spin    { animation: spin-slow 22s linear infinite; }
    .anim-blink   { animation: blink 1s step-end infinite; }

    .fade-up { animation: fade-up 0.7s ease forwards; }
    .fade-up-1 { animation: fade-up 0.7s 0.1s ease both; }
    .fade-up-2 { animation: fade-up 0.7s 0.22s ease both; }
    .fade-up-3 { animation: fade-up 0.7s 0.36s ease both; }
    .fade-up-4 { animation: fade-up 0.7s 0.5s ease both; }
    .fade-up-5 { animation: fade-up 0.7s 0.64s ease both; }
    .scale-in  { animation: scale-in 0.6s 0.2s ease both; }

    .nav-link {
      font-size: 0.8rem;
      font-weight: 500;
      color: #888;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      transition: color 0.2s;
      text-decoration: none;
    }
    .nav-link:hover { color: #c8f060; }

    .card-project {
      background: #111;
      border: 1px solid #1e1e1e;
      border-radius: 20px;
      overflow: hidden;
      transition: border-color 0.3s, transform 0.3s;
      cursor: pointer;
    }
    .card-project:hover {
      border-color: #c8f060;
      transform: translateY(-5px);
    }

    .pill {
      display: inline-flex;
      align-items: center;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .service-card {
      background: #0e0e0e;
      border: 1px solid #1e1e1e;
      border-radius: 16px;
      padding: 28px;
      transition: background 0.3s, border-color 0.3s, transform 0.25s;
      cursor: pointer;
    }
    .service-card:hover {
      background: #141414;
      border-color: #2a2a2a;
      transform: translateY(-4px);
    }

    .input-dark {
      background: #111 !important;
      border: 1px solid #222 !important;
      color: #f0ede6 !important;
      border-radius: 12px !important;
      font-family: 'Outfit', sans-serif !important;
      font-size: 0.875rem !important;
    }
    .input-dark::placeholder { color: #444 !important; }
    .input-dark:focus { border-color: #c8f060 !important; box-shadow: 0 0 0 2px rgba(200,240,96,0.1) !important; }

    .btn-lime {
      background: #c8f060 !important;
      color: #080808 !important;
      font-weight: 700 !important;
      font-family: 'Outfit', sans-serif !important;
      border-radius: 12px !important;
      letter-spacing: 0.02em;
      transition: transform 0.2s, box-shadow 0.2s !important;
    }
    .btn-lime:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 24px rgba(200,240,96,0.25) !important;
    }

    .btn-outline-lime {
      background: transparent !important;
      border: 1px solid #2a2a2a !important;
      color: #f0ede6 !important;
      font-weight: 500 !important;
      border-radius: 12px !important;
      font-family: 'Outfit', sans-serif !important;
      transition: border-color 0.2s, color 0.2s !important;
    }
    .btn-outline-lime:hover {
      border-color: #c8f060 !important;
      color: #c8f060 !important;
    }

    .avatar-ring { box-shadow: 0 0 0 2px #1e1e1e, 0 0 0 4px #c8f060; }

    .section-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #c8f060;
      font-family: 'Outfit', sans-serif;
    }

    .cursor-dot {
      width: 8px; height: 8px;
      background: #c8f060;
      border-radius: 50%;
      position: fixed;
      pointer-events: none;
      z-index: 10000;
      transition: transform 0.1s;
      mix-blend-mode: difference;
    }
  `}</style>
);

// ─── Custom Cursor ─────────────────────────────────────────────────────────────
function Cursor() {
  const dotRef = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 4 + "px";
        dotRef.current.style.top  = e.clientY - 4 + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={dotRef} className="cursor-dot" />;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const projects = [
  {
    num: "01", title: "Finova — Finance OS",
    cat: "Web App · SaaS", year: "2024",
    desc: "Real-time analytics dashboard with AI-driven insights and multi-account management for fintech teams.",
    tags: ["Next.js", "TypeScript", "D3.js", "Supabase"],
    accent: "#c8f060",
  },
  {
    num: "02", title: "Bloom Commerce",
    cat: "E-Commerce · Full Stack", year: "2024",
    desc: "Headless fashion store with AR try-on, personalised recommendations, and sub-second checkout.",
    tags: ["React", "Shopify", "Stripe", "Framer"],
    accent: "#60d0f0",
  },
  {
    num: "03", title: "Nomad — Travel PWA",
    cat: "Mobile · PWA", year: "2023",
    desc: "Offline-first travel companion with AI itinerary planning and collaborative trip boards.",
    tags: ["Next.js", "Mapbox", "Workbox", "AI SDK"],
    accent: "#f060a0",
  },
  {
    num: "04", title: "Pulse Health",
    cat: "SaaS · Healthcare", year: "2023",
    desc: "Telemedicine platform connecting 10k+ patients to providers with HIPAA-compliant video calls.",
    tags: ["React", "GraphQL", "WebRTC", "AWS"],
    accent: "#a060f0",
  },
];

const services = [
  { icon: "◈", title: "UI/UX Design",       desc: "Design systems, wireframes & pixel-perfect prototypes.", price: "From $1,200" },
  { icon: "⬡", title: "Web Development",    desc: "Full-stack React / Next.js apps, fast & accessible.", price: "From $2,500" },
  { icon: "◎", title: "Brand Identity",      desc: "Logo, typography, colour systems & brand guidelines.", price: "From $800"   },
  { icon: "▣", title: "SEO & Performance",  desc: "Core Web Vitals, technical audits & speed wins.", price: "From $600"   },
  { icon: "⊕", title: "API Integration",    desc: "Payments, auth, CMS, analytics — wired up cleanly.", price: "From $900"   },
  { icon: "◉", title: "Consulting",         desc: "Architecture reviews & strategic technical guidance.", price: "$200 / hr"  },
];

const testimonials = [
  { name: "Sarah Kim",    role: "CEO, Bloom Studio",  avatar: "SK", text: "Alex transformed our online presence completely. Conversions up 240% in the first month — absolutely outstanding work." },
  { name: "Marcus Reid",  role: "CTO, Finova",        avatar: "MR", text: "Clean, fast, and our team loves using it. He understood the complexity of our data needs and exceeded every expectation." },
  { name: "Priya Sharma", role: "Founder, Nomad",     avatar: "PS", text: "Exceptional attention to detail and great comms throughout. The PWA performance is incredible — users keep coming back." },
];

const techs = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion", "GraphQL", "PostgreSQL", "Figma", "AWS", "Vercel", "shadcn/ui"];

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 16, left: 0, right: 0, zIndex: 100,
      display: "flex", justifyContent: "center",
    }}>
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "12px 24px",
        borderRadius: 16,
        width: "min(880px, calc(100% - 32px))",
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        border: scrolled ? "1px solid #1e1e1e" : "1px solid transparent",
        transition: "all 0.4s",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "#c8f060", display: "flex", alignItems: "center",
            justifyContent: "center", fontFamily: "Outfit, sans-serif",
            fontWeight: 800, fontSize: 13, color: "#080808",
          }}>AC</div>
          <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: 14, color: "#f0ede6" }}>
            Alex Chen
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 28 }}>
          {["About", "Works", "Services", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
        </div>

        {/* CTA */}
        <Button className="btn-lime" size="sm" style={{ fontSize: 12 }}>
          Hire Me ↗
        </Button>
      </nav>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "120px 24px 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background glow blobs */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        width: 520, height: 520,
        background: "radial-gradient(circle, rgba(200,240,96,0.07) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }}/>
      <div style={{
        position: "absolute", bottom: "10%", left: "5%",
        width: 380, height: 380,
        background: "radial-gradient(circle, rgba(96,208,240,0.05) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }}/>

      {/* Spinning ring */}
      <div className="anim-spin" style={{
        position: "absolute", top: "15%", right: "22%",
        width: 100, height: 100, borderRadius: "50%",
        border: "1px dashed rgba(200,240,96,0.2)",
        pointerEvents: "none",
      }}/>

      <div style={{ maxWidth: 1120, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }}>
          {/* Left */}
          <div>
            {/* Available badge */}
            <div className="fade-up-1" style={{ marginBottom: 28 }}>
              <Badge style={{
                background: "rgba(200,240,96,0.1)",
                border: "1px solid rgba(200,240,96,0.25)",
                color: "#c8f060",
                borderRadius: 999,
                fontFamily: "Outfit, sans-serif",
                fontWeight: 600, fontSize: 11,
                letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "6px 14px", gap: 6,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c8f060", display: "inline-block" }} />
                Open to projects
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="fade-up-2 font-serif" style={{
              fontSize: "clamp(48px, 7vw, 88px)",
              lineHeight: 1.02, fontWeight: 400,
              color: "#f0ede6", marginBottom: 8,
            }}>
              Building digital<br />
              products, brands<br />
              <em style={{ color: "#c8f060", fontStyle: "italic" }}>& experience.</em>
            </h1>

            <p className="fade-up-3" style={{
              color: "#666", fontSize: 15, lineHeight: 1.7,
              maxWidth: 400, marginBottom: 36, marginTop: 20,
              fontFamily: "Outfit, sans-serif",
            }}>
              A <strong style={{ color: "#aaa", fontWeight: 600 }}>Full-Stack Developer</strong> &amp;{" "}
              <strong style={{ color: "#aaa", fontWeight: 600 }}>UI Engineer</strong> in SF.
              I specialise in React, Next.js, and scalable, performant web apps.
            </p>

            {/* Email input row */}
            <div className="fade-up-4" style={{ display: "flex", gap: 10, maxWidth: 440, marginBottom: 48 }}>
              <Input
                className="input-dark"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ flex: 1 }}
              />
              <Button className="btn-lime" style={{ whiteSpace: "nowrap", padding: "0 20px" }}>
                Connect →
              </Button>
            </div>

            {/* Stats row */}
            <div className="fade-up-5" style={{ display: "flex", gap: 40 }}>
              {[["5+", "Years exp."], ["80+", "Projects"], ["40+", "Clients"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-serif" style={{ fontSize: 32, color: "#f0ede6", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 12, color: "#555", marginTop: 4, fontFamily: "Outfit, sans-serif", fontWeight: 500 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — avatar card */}
          <div className="scale-in anim-float" style={{
            width: 300,
            background: "#0e0e0e",
            border: "1px solid #1e1e1e",
            borderRadius: 28,
            padding: 32,
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: 20, flexShrink: 0,
          }}>
            <div style={{ position: "relative" }}>
              <div className="anim-spin" style={{
                position: "absolute", inset: -12,
                borderRadius: "50%",
                border: "1px dashed rgba(200,240,96,0.3)",
              }}/>
              <Avatar style={{ width: 100, height: 100 }} className="avatar-ring">
                <AvatarFallback style={{
                  background: "#1a1a1a", color: "#c8f060",
                  fontFamily: "Instrument Serif, serif",
                  fontSize: 28, fontWeight: 400,
                }}>AC</AvatarFallback>
              </Avatar>
            </div>

            <div style={{ textAlign: "center" }}>
              <div className="font-serif" style={{ fontSize: 22, color: "#f0ede6" }}>Alex Chen</div>
              <div style={{ fontSize: 12, color: "#555", fontFamily: "Outfit, sans-serif", marginTop: 4 }}>
                Web Developer · San Francisco
              </div>
            </div>

            <Separator style={{ background: "#1e1e1e" }} />

            {/* Mini skill pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
              {["React", "Next.js", "TypeScript", "Node.js", "UI/UX"].map(s => (
                <span key={s} className="pill" style={{
                  background: "#141414", border: "1px solid #222",
                  color: "#888", fontSize: "0.65rem",
                }}>{s}</span>
              ))}
            </div>

            {/* Floating badge */}
            <div style={{
              width: "100%", background: "#141414", border: "1px solid #1e1e1e",
              borderRadius: 12, padding: "10px 14px",
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#c8f060", flexShrink: 0,
              }} className="anim-blink"/>
              <span style={{ fontSize: 12, color: "#888", fontFamily: "Outfit, sans-serif" }}>
                Available · Reply within 24h
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Tech Marquee ─────────────────────────────────────────────────────────────
function TechMarquee() {
  const doubled = [...techs, ...techs];
  return (
    <div style={{
      borderTop: "1px solid #1a1a1a",
      borderBottom: "1px solid #1a1a1a",
      padding: "14px 0",
      overflow: "hidden",
    }}>
      <div className="anim-marquee" style={{ display: "flex", gap: 40, whiteSpace: "nowrap" }}>
        {doubled.map((t, i) => (
          <span key={i} style={{
            fontFamily: "Outfit, sans-serif", fontWeight: 600,
            fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase",
            color: "#333", display: "inline-flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#c8f060", display: "inline-block" }}/>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Works ────────────────────────────────────────────────────────────────────
function Works() {
  return (
    <section id="works" style={{ padding: "100px 24px", maxWidth: 1120, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52 }}>
        <div>
          <p className="section-label" style={{ marginBottom: 12 }}>Portfolio</p>
          <h2 className="font-serif" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#f0ede6", lineHeight: 1.05 }}>
            Selected Works
          </h2>
        </div>
        <a href="#" style={{ fontSize: 13, color: "#c8f060", fontFamily: "Outfit, sans-serif", fontWeight: 600, textDecoration: "none" }}>
          All projects →
        </a>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: 16 }}>
        {projects.map((p) => (
          <div key={p.num} className="card-project" style={{ padding: 32 }}>
            {/* Top row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
              <span className="font-serif" style={{ fontSize: 52, color: "#1e1e1e", lineHeight: 1 }}>{p.num}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 11, color: "#444", fontFamily: "Outfit, sans-serif" }}>{p.year}</span>
                <div style={{
                  width: 30, height: 30, borderRadius: "50%",
                  background: p.accent, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: 13, color: "#080808", fontWeight: 700,
                }}>↗</div>
              </div>
            </div>

            <p style={{ fontSize: 11, color: "#555", fontFamily: "Outfit, sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
              {p.cat}
            </p>
            <h3 className="font-serif" style={{ fontSize: 26, color: "#f0ede6", marginBottom: 12, lineHeight: 1.2 }}>
              {p.title}
            </h3>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 24, fontFamily: "Outfit, sans-serif" }}>
              {p.desc}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {p.tags.map(t => (
                <span key={t} className="pill" style={{
                  background: "transparent",
                  border: `1px solid ${p.accent}30`,
                  color: p.accent, fontSize: "0.65rem",
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" style={{
      padding: "100px 24px",
      background: "#060606",
      borderTop: "1px solid #111",
      borderBottom: "1px solid #111",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="section-label" style={{ marginBottom: 14 }}>What I offer</p>
          <h2 className="font-serif" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#f0ede6", lineHeight: 1.05 }}>
            Services
          </h2>
          <p style={{ color: "#555", fontSize: 14, marginTop: 14, maxWidth: 380, margin: "14px auto 0", fontFamily: "Outfit, sans-serif" }}>
            End-to-end digital solutions — concept to launch, delivered with care.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 12 }}>
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "rgba(200,240,96,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, color: "#c8f060", marginBottom: 18,
              }}>{s.icon}</div>
              <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 16, color: "#f0ede6", marginBottom: 8 }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, color: "#555", lineHeight: 1.65, marginBottom: 20 }}>
                {s.desc}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "#c8f060", fontFamily: "Outfit, sans-serif", fontWeight: 600 }}>
                  {s.price}
                </span>
                <span style={{ color: "#333", fontSize: 14 }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section style={{ padding: "100px 24px", maxWidth: 1120, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 52 }}>
        <p className="section-label" style={{ marginBottom: 14 }}>Social proof</p>
        <h2 className="font-serif" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#f0ede6" }}>
          What Clients Say
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
        {testimonials.map((t) => (
          <Card key={t.name} style={{
            background: "#0e0e0e", border: "1px solid #1e1e1e",
            borderRadius: 20, overflow: "hidden",
          }}>
            <CardContent style={{ padding: 28 }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 18 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#c8f060", fontSize: 13 }}>★</span>
                ))}
              </div>
              <p style={{
                fontFamily: "Instrument Serif, serif",
                fontSize: 17, color: "#c0bdb4",
                lineHeight: 1.65, marginBottom: 24, fontStyle: "italic",
              }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Avatar style={{ width: 40, height: 40 }}>
                  <AvatarFallback style={{
                    background: "#1a1a1a", color: "#c8f060",
                    fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 12,
                  }}>{t.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: 14, color: "#f0ede6" }}>
                    {t.name}
                  </div>
                  <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, color: "#555" }}>{t.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "", msg: "" });
  const [sent, setSent] = useState(false);

  const send = () => {
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", type: "", msg: "" }); }, 3000);
  };

  return (
    <section id="contact" style={{
      padding: "40px 24px 100px",
      maxWidth: 1120, margin: "0 auto",
    }}>
      <div style={{
        background: "#0a0a0a",
        border: "1px solid #1e1e1e",
        borderRadius: 28, overflow: "hidden",
        display: "grid", gridTemplateColumns: "1fr 1.6fr",
      }}>
        {/* Left panel */}
        <div style={{
          padding: 48,
          background: "linear-gradient(135deg, #0e0e0e 0%, #111 100%)",
          borderRight: "1px solid #1a1a1a",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -40, right: -40,
            width: 180, height: 180, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,240,96,0.06) 0%, transparent 70%)",
          }}/>
          <p className="section-label" style={{ marginBottom: 16 }}>Get in touch</p>
          <h2 className="font-serif" style={{ fontSize: 38, color: "#f0ede6", lineHeight: 1.1, marginBottom: 20 }}>
            Let&apos;s build<br />something<br />
            <em style={{ color: "#c8f060" }}>great.</em>
          </h2>
          <p style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 40 }}>
            Have a project in mind? Drop me a message and I&apos;ll reply within 24 hours.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              { icon: "✉", label: "Email",    val: "alex@alexchen.dev" },
              { icon: "📍", label: "Location", val: "San Francisco, CA" },
              { icon: "⏱", label: "Response", val: "Within 24 hours" },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "#141414", border: "1px solid #1e1e1e",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
                  flexShrink: 0,
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 10, color: "#444", fontFamily: "Outfit, sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: "#888", fontFamily: "Outfit, sans-serif", marginTop: 2 }}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div style={{ padding: 48 }}>
          <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 18, color: "#f0ede6", marginBottom: 32 }}>
            Send a Message
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={{ fontSize: 10, color: "#444", fontFamily: "Outfit, sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Name</label>
                <Input className="input-dark" placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label style={{ fontSize: 10, color: "#444", fontFamily: "Outfit, sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Email</label>
                <Input className="input-dark" placeholder="john@co.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: 10, color: "#444", fontFamily: "Outfit, sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Project Type</label>
              <select
                value={form.type}
                onChange={e => setForm({ ...form, type: e.target.value })}
                className="input-dark"
                style={{
                  width: "100%", padding: "10px 14px",
                  borderRadius: 12, border: "1px solid #222",
                  background: "#111", color: form.type ? "#f0ede6" : "#444",
                  fontFamily: "Outfit, sans-serif", fontSize: 14,
                  outline: "none", appearance: "none",
                }}
              >
                <option value="">Select a service...</option>
                {["UI/UX Design", "Web Development", "Brand Identity", "Consulting"].map(o => (
                  <option key={o} value={o} style={{ background: "#111" }}>{o}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ fontSize: 10, color: "#444", fontFamily: "Outfit, sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Message</label>
              <Textarea
                className="input-dark"
                placeholder="Tell me about your project..."
                rows={4}
                value={form.msg}
                onChange={e => setForm({ ...form, msg: e.target.value })}
                style={{ resize: "none" }}
              />
            </div>

            <Button
              className={sent ? "" : "btn-lime"}
              onClick={send}
              style={sent ? {
                background: "#1a3a1a", border: "1px solid #2a5a2a",
                color: "#c8f060", borderRadius: 12, fontFamily: "Outfit, sans-serif",
                fontWeight: 700, width: "100%", height: 48,
              } : { width: "100%", height: 48 }}
            >
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #111", padding: "28px 24px" }}>
      <div style={{
        maxWidth: 1120, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8, background: "#c8f060",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: 11, color: "#080808",
          }}>AC</div>
          <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, fontWeight: 600, color: "#f0ede6" }}>Alex Chen</span>
        </div>
        <p style={{ fontFamily: "Outfit, sans-serif", fontSize: 12, color: "#444" }}>
          © {new Date().getFullYear()} Alex Chen — Built with Next.js, Tailwind & shadcn/ui
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Twitter", "GitHub", "Dribbble", "LinkedIn"].map(s => (
            <a key={s} href="#" style={{
              fontFamily: "Outfit, sans-serif", fontSize: 11, color: "#444",
              textDecoration: "none", fontWeight: 600, letterSpacing: "0.06em",
              textTransform: "uppercase", transition: "color 0.2s",
            }}
            onMouseOver={e => e.target.style.color = "#c8f060"}
            onMouseOut={e => e.target.style.color = "#444"}
            >{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────
export default function Portfolio() {
  return (
    <div className="portfolio-root grain" style={{ minHeight: "100vh" }}>
      <FontLoader />
      <Cursor />
      <Navbar />
      <Hero />
      <TechMarquee />
      <Works />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
