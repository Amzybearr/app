import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Star,
  ChevronDown,
  Menu,
  X,
  Leaf,
  Heart,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  Calendar,
  Utensils,
  Activity,
  Shield,
  Quote,
  Sparkles,
} from "lucide-react";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const C = {
  green: "#2D6A4F",
  greenDark: "#1F4D35",
  greenLight: "#52B788",
  sage: "#74B49B",
  sagePale: "#B7E4C7",
  honey: "#C9A84C",
  honeyLight: "#F0C57A",
  cream: "#F8F4EE",
  creamDark: "#EDE6D8",
  white: "#FFFFFF",
  dark: "#1A2420",
  secondary: "#3D5248",
  muted: "#6B8478",
  border: "#D5E5D8",
};

// ─── Blob SVG Shapes ──────────────────────────────────────────────────────────
const Blob1 = ({ className }) => (
  <svg className={className} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(300,300)">
      <path
        d="M148,-193.9C184.7,-168.3,202.1,-118.7,213.4,-68.7C224.8,-18.7,230.1,31.7,213.2,73.9C196.3,116.1,157.3,150.1,113.6,174.3C69.9,198.5,21.4,212.9,-29.9,216.1C-81.1,219.3,-135,211.3,-172.3,182.5C-209.6,153.7,-230.3,104.1,-236.5,52.8C-242.7,1.4,-234.4,-51.7,-210.5,-96.1C-186.6,-140.5,-147.1,-176.3,-103.1,-198.9C-59.1,-221.5,-10.7,-231,-37.3,-231C63.9,-231,111.3,-219.5,148,-193.9Z"
        fill={C.sagePale}
        fillOpacity="0.3"
      />
    </g>
  </svg>
);

const Blob2 = ({ className }) => (
  <svg className={className} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(300,300)">
      <path
        d="M120.5,-157.6C152.8,-135.4,172.6,-96.1,182.2,-54.6C191.8,-13.1,191.2,30.5,175.4,68.2C159.5,105.9,128.3,137.6,91.1,160.3C53.9,183,10.7,196.8,-35.6,198.4C-81.9,200,-131.3,189.4,-165.4,161.4C-199.5,133.4,-218.4,87.9,-223.8,40.4C-229.2,-7.1,-221.2,-56.7,-196.7,-96.7C-172.1,-136.7,-131.2,-167.2,-88.2,-186.4C-45.2,-205.7,0,-213.7,43.4,-206.6C86.7,-199.5,88.2,-179.7,120.5,-157.6Z"
        fill={C.honey}
        fillOpacity="0.15"
      />
    </g>
  </svg>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 24px rgba(45,106,79,0.10)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.green}, ${C.sage})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Leaf size={18} color="#fff" />
          </div>
          <span
            style={{
              fontFamily: "Lora, serif",
              fontWeight: 600,
              fontSize: 18,
              color: scrolled ? C.dark : C.greenDark,
              letterSpacing: "-0.3px",
            }}
          >
            Clara Cheung
          </span>
        </div>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              style={{
                background: "none",
                border: "none",
                fontFamily: "Raleway, sans-serif",
                fontWeight: 500,
                fontSize: 15,
                color: scrolled ? C.secondary : C.greenDark,
                cursor: "pointer",
                transition: "color 0.2s",
                padding: "4px 0",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.green)}
              onMouseLeave={(e) => (e.target.style.color = scrolled ? C.secondary : C.greenDark)}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            style={{
              background: C.green,
              color: "#fff",
              border: "none",
              borderRadius: 50,
              padding: "10px 22px",
              fontFamily: "Raleway, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.2s",
              letterSpacing: "0.3px",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = C.greenDark;
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = `0 6px 20px rgba(45,106,79,0.3)`;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = C.green;
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: C.dark,
            display: "none",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "#fff",
            borderTop: `1px solid ${C.border}`,
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                fontFamily: "Raleway, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                color: C.secondary,
                cursor: "pointer",
                padding: "12px 0",
                borderBottom: `1px solid ${C.border}`,
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            style={{
              marginTop: 16,
              width: "100%",
              background: C.green,
              color: "#fff",
              border: "none",
              borderRadius: 50,
              padding: "14px 22px",
              fontFamily: "Raleway, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Book Consultation
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: `linear-gradient(160deg, ${C.cream} 0%, #EBF5EE 50%, ${C.creamDark} 100%)`,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingTop: 72,
      }}
    >
      {/* Organic background blobs */}
      <Blob1
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: 600,
          height: 600,
          opacity: 0.6,
          animation: "floatBlob 8s ease-in-out infinite",
        }}
      />
      <Blob2
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-8%",
          width: 500,
          height: 500,
          opacity: 0.5,
          animation: "floatBlob 10s ease-in-out infinite reverse",
        }}
      />

      {/* Decorative leaf elements */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: 80,
          height: 80,
          borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%",
          background: `linear-gradient(135deg, ${C.sagePale}, ${C.sage})`,
          opacity: 0.4,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60%",
          right: "8%",
          width: 50,
          height: 50,
          borderRadius: "60% 40% 40% 60% / 60% 60% 40% 40%",
          background: `linear-gradient(135deg, ${C.honey}, ${C.honeyLight})`,
          opacity: 0.5,
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(82,183,136,0.15)",
                border: `1px solid rgba(82,183,136,0.4)`,
                borderRadius: 50,
                padding: "6px 16px",
                marginBottom: 24,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.green }} />
              <span
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 600,
                  fontSize: 12,
                  color: C.green,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Licensed Nutritionist · New York
              </span>
            </div>

            <h1
              style={{
                fontFamily: "Lora, serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 5vw, 58px)",
                color: C.dark,
                lineHeight: 1.2,
                marginBottom: 20,
                letterSpacing: "-0.5px",
              }}
            >
              Transform Your Health Through{" "}
              <span style={{ color: C.green, fontStyle: "italic" }}>Personalized</span>{" "}
              Nutrition
            </h1>

            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: 18,
                fontWeight: 400,
                color: C.secondary,
                lineHeight: 1.7,
                marginBottom: 36,
                maxWidth: 480,
              }}
            >
              Science-backed, individualized nutrition plans designed around your unique
              biology, lifestyle, and goals — so you can thrive, not just survive.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  background: C.green,
                  color: "#fff",
                  border: "none",
                  borderRadius: 50,
                  padding: "16px 32px",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.25s",
                  boxShadow: `0 8px 24px rgba(45,106,79,0.25)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.greenDark;
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 12px 32px rgba(45,106,79,0.35)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.green;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(45,106,79,0.25)`;
                }}
              >
                <Calendar size={18} />
                Book Free Consultation
              </button>

              <button
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  background: "transparent",
                  color: C.green,
                  border: `2px solid ${C.green}`,
                  borderRadius: 50,
                  padding: "14px 30px",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: "pointer",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.green;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = C.green;
                }}
              >
                Explore Services
              </button>
            </div>

            {/* Trust Badges */}
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {[
                { icon: <Star size={14} fill={C.honey} stroke="none" />, text: "5.0 Rating", sub: "Google Reviews" },
                { icon: <Users size={14} color={C.green} />, text: "200+ Clients", sub: "Helped" },
                { icon: <Award size={14} color={C.green} />, text: "8+ Years", sub: "Experience" },
                { icon: <Shield size={14} color={C.green} />, text: "NY Licensed", sub: "Nutritionist" },
              ].map((badge, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: C.white,
                      boxShadow: `0 2px 8px rgba(45,106,79,0.12)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {badge.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700, fontSize: 13, color: C.dark }}>{badge.text}</div>
                    <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 11, color: C.muted }}>{badge.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo Placeholder */}
          <div style={{ position: "relative" }} className="hero-image-area">
            {/* Main card */}
            <div
              style={{
                borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%",
                background: `linear-gradient(160deg, ${C.sage} 0%, ${C.green} 60%, ${C.greenDark} 100%)`,
                width: "100%",
                paddingBottom: "110%",
                position: "relative",
                overflow: "hidden",
                boxShadow: `0 24px 64px rgba(45,106,79,0.25)`,
              }}
            >
              {/* Photo placeholder illustration */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                <div style={{ fontSize: 72, marginBottom: 8 }}>🌿</div>
                <div
                  style={{
                    fontFamily: "Lora, serif",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.9)",
                    textAlign: "center",
                    padding: "0 24px",
                  }}
                >
                  Clara Cheung, RDN
                </div>
                <div
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.7)",
                    marginTop: 4,
                  }}
                >
                  Registered Dietitian Nutritionist
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div
              style={{
                position: "absolute",
                bottom: "8%",
                left: "-16%",
                background: C.white,
                borderRadius: 20,
                padding: "16px 20px",
                boxShadow: `0 12px 40px rgba(0,0,0,0.12)`,
                display: "flex",
                alignItems: "center",
                gap: 12,
                animation: "floatCard 4s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: `linear-gradient(135deg, #D4EDDA, #A8CDB8)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Heart size={20} color={C.green} fill={C.sage} />
              </div>
              <div>
                <div style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700, fontSize: 18, color: C.dark }}>98%</div>
                <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 12, color: C.muted }}>Client Satisfaction</div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                top: "12%",
                right: "-10%",
                background: C.white,
                borderRadius: 16,
                padding: "12px 16px",
                boxShadow: `0 12px 40px rgba(0,0,0,0.10)`,
                animation: "floatCard 5s ease-in-out infinite reverse",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={C.honey} stroke="none" />
                ))}
              </div>
              <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 11, color: C.muted, marginTop: 4 }}>
                Top Nutritionist NYC
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            animation: "bounce 2s ease-in-out infinite",
          }}
        >
          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: 11, color: C.muted, letterSpacing: "1px", textTransform: "uppercase" }}>
            Scroll to explore
          </span>
          <ChevronDown size={16} color={C.muted} />
        </div>
      </div>
    </section>
  );
}

// ─── Stats Strip ──────────────────────────────────────────────────────────────
function StatsStrip() {
  const stats = [
    { value: "8+", label: "Years of Experience", icon: <Clock size={20} color={C.green} /> },
    { value: "200+", label: "Clients Transformed", icon: <Users size={20} color={C.green} /> },
    { value: "98%", label: "Satisfaction Rate", icon: <Heart size={20} color={C.green} /> },
    { value: "5.0", label: "Google Rating", icon: <Star size={20} fill={C.honey} stroke="none" /> },
  ];

  return (
    <section
      style={{
        background: C.green,
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}
        className="stats-grid"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px 8px",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.15)" : "none",
            }}
            className={i === 3 ? "no-border" : ""}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              {React.cloneElement(stat.icon, { color: "rgba(255,255,255,0.9)" })}
            </div>
            <div
              style={{
                fontFamily: "Lora, serif",
                fontWeight: 700,
                fontSize: 36,
                color: "#fff",
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.7)",
                textAlign: "center",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────
function About() {
  const credentials = [
    "Registered Dietitian Nutritionist (RDN)",
    "M.S. in Nutrition & Dietetics, NYU",
    "Certified Diabetes Care & Education Specialist",
    "Integrative & Functional Nutrition Certified",
    "Member, Academy of Nutrition & Dietetics",
  ];

  return (
    <section id="about" style={{ padding: "100px 24px", background: C.white }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left Image */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              borderRadius: "24px 60px 24px 60px",
              background: `linear-gradient(145deg, #D4EDDA 0%, ${C.sagePale} 50%, ${C.creamDark} 100%)`,
              paddingBottom: "120%",
              position: "relative",
              overflow: "hidden",
              boxShadow: `0 20px 60px rgba(45,106,79,0.15)`,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: 80, marginBottom: 12 }}>👩‍⚕️</div>
              <div
                style={{
                  fontFamily: "Lora, serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: C.green,
                  textAlign: "center",
                  padding: "0 24px",
                }}
              >
                Clara Cheung, RDN, MS
              </div>
            </div>
          </div>

          {/* Quote card */}
          <div
            style={{
              position: "absolute",
              bottom: "-24px",
              right: "-24px",
              background: C.white,
              borderRadius: 20,
              padding: "20px 24px",
              boxShadow: `0 16px 48px rgba(45,106,79,0.15)`,
              maxWidth: 220,
              border: `1px solid ${C.border}`,
            }}
          >
            <Quote size={20} color={C.sage} style={{ marginBottom: 8 }} />
            <p
              style={{
                fontFamily: "Lora, serif",
                fontSize: 13,
                color: C.secondary,
                fontStyle: "italic",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              "Food is medicine — when we choose the right prescription."
            </p>
            <div style={{ marginTop: 10, fontFamily: "Raleway, sans-serif", fontSize: 11, fontWeight: 600, color: C.green }}>
              — Clara Cheung
            </div>
          </div>

          {/* Decorative element */}
          <div
            style={{
              position: "absolute",
              top: -20,
              left: -20,
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.honey}, ${C.honeyLight})`,
              opacity: 0.4,
            }}
          />
        </div>

        {/* Right Content */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(45,106,79,0.08)",
              borderRadius: 50,
              padding: "6px 16px",
              marginBottom: 20,
            }}
          >
            <Leaf size={14} color={C.green} />
            <span style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, fontSize: 12, color: C.green, textTransform: "uppercase", letterSpacing: "1px" }}>
              Meet Clara
            </span>
          </div>

          <h2
            style={{
              fontFamily: "Lora, serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: C.dark,
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Your Partner in{" "}
            <span style={{ color: C.green }}>Lasting Wellness</span>
          </h2>

          <p
            style={{
              fontFamily: "Raleway, sans-serif",
              fontSize: 16,
              color: C.secondary,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            With over 8 years of clinical experience at the intersection of nutrition science
            and integrative health, Clara Cheung believes that true wellness goes beyond
            calorie counting. She takes a <strong>root-cause approach</strong> to nutrition —
            understanding how your unique biochemistry, lifestyle, and environment shape
            your health.
          </p>

          <p
            style={{
              fontFamily: "Raleway, sans-serif",
              fontSize: 16,
              color: C.secondary,
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            Based in the heart of New York City's Chinatown, Clara works with diverse
            clients across all walks of life — from busy professionals to families navigating
            chronic conditions — crafting nutrition strategies that are practical, culturally
            sensitive, and sustainable for life.
          </p>

          {/* Credentials */}
          <div
            style={{
              background: C.cream,
              borderRadius: 20,
              padding: "24px",
              marginBottom: 32,
            }}
          >
            <div
              style={{
                fontFamily: "Raleway, sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: C.green,
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: 16,
              }}
            >
              Credentials & Certifications
            </div>
            {credentials.map((cred, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                <CheckCircle size={16} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontFamily: "Raleway, sans-serif", fontSize: 14, color: C.secondary, lineHeight: 1.5 }}>
                  {cred}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: C.green,
              color: "#fff",
              border: "none",
              borderRadius: 50,
              padding: "14px 28px",
              fontFamily: "Raleway, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C.greenDark;
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 8px 24px rgba(45,106,79,0.3)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = C.green;
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Work With Clara
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: <Utensils size={28} color={C.green} />,
      title: "Nutrition Consultation",
      description:
        "In-depth 60-minute one-on-one sessions to assess your current diet, health history, and goals. Includes a personalized analysis and actionable first steps.",
      features: ["Comprehensive health intake", "Dietary analysis & lab review", "Personalized roadmap", "Follow-up action plan"],
      tag: "Most Popular",
      color: "#D4EDDA",
    },
    {
      icon: <Activity size={28} color={C.honey} />,
      title: "Custom Meal Planning",
      description:
        "Tailored weekly meal plans built around your preferences, cultural background, budget, and schedule. No rigid diets — just real food that works for your life.",
      features: ["7-day meal plans", "Grocery lists included", "Recipe modifications", "Flexible seasonal updates"],
      tag: "Best Value",
      color: "#FFF3D4",
    },
    {
      icon: <Heart size={28} color="#E07070" />,
      title: "Wellness Coaching",
      description:
        "Ongoing monthly support to keep you accountable, adapt your plan as your life evolves, and build sustainable habits that last far beyond our sessions.",
      features: ["Bi-weekly check-ins", "24/7 messaging support", "Habit tracking tools", "Mindful eating guidance"],
      tag: "Long-term",
      color: "#FDEAEA",
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: "100px 24px",
        background: C.cream,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(45,106,79,0.08)",
              borderRadius: 50,
              padding: "6px 16px",
              marginBottom: 20,
            }}
          >
            <Sparkles size={14} color={C.green} />
            <span style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, fontSize: 12, color: C.green, textTransform: "uppercase", letterSpacing: "1px" }}>
              How I Can Help
            </span>
          </div>
          <h2
            style={{
              fontFamily: "Lora, serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: C.dark,
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Services Designed for{" "}
            <span style={{ color: C.green }}>Your Journey</span>
          </h2>
          <p
            style={{
              fontFamily: "Raleway, sans-serif",
              fontSize: 17,
              color: C.muted,
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Every plan is built around you — because one size has never fit all when it comes to health.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
          className="services-grid"
        >
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, features, tag, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? C.white : C.white,
        borderRadius: 24,
        padding: "36px 28px",
        border: `1px solid ${hovered ? C.sage : C.border}`,
        boxShadow: hovered
          ? `0 20px 60px rgba(45,106,79,0.15)`
          : `0 4px 20px rgba(45,106,79,0.06)`,
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Tag */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          background: color,
          borderRadius: 50,
          padding: "4px 12px",
          fontFamily: "Raleway, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          color: C.secondary,
          letterSpacing: "0.5px",
        }}
      >
        {tag}
      </div>

      {/* Icon */}
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: 18,
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          fontFamily: "Lora, serif",
          fontWeight: 700,
          fontSize: 22,
          color: C.dark,
          marginBottom: 12,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: "Raleway, sans-serif",
          fontSize: 14,
          color: C.muted,
          lineHeight: 1.7,
          marginBottom: 24,
        }}
      >
        {description}
      </p>

      {/* Features */}
      <div style={{ marginBottom: 28 }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <CheckCircle size={14} color={C.green} />
            <span style={{ fontFamily: "Raleway, sans-serif", fontSize: 13, color: C.secondary }}>
              {f}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        style={{
          width: "100%",
          background: hovered ? C.green : "transparent",
          color: hovered ? "#fff" : C.green,
          border: `1.5px solid ${C.green}`,
          borderRadius: 50,
          padding: "12px 20px",
          fontFamily: "Raleway, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          cursor: "pointer",
          transition: "all 0.25s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        Get Started
        <ArrowRight size={14} />
      </button>
    </div>
  );
}

// ─── Process Section ──────────────────────────────────────────────────────────
function Process() {
  const steps = [
    {
      number: "01",
      title: "Free Discovery Call",
      description:
        "We start with a 20-minute complimentary call to understand your goals, challenges, and whether we're the right fit for your health journey.",
      icon: <Phone size={24} color={C.white} />,
    },
    {
      number: "02",
      title: "Deep Assessment",
      description:
        "A comprehensive nutrition and lifestyle assessment — reviewing labs, health history, food preferences, and daily rhythms — to build your complete picture.",
      icon: <Activity size={24} color={C.white} />,
    },
    {
      number: "03",
      title: "Your Personalized Plan",
      description:
        "Receive a fully customized nutrition plan with ongoing coaching, adjustments, and the accountability support you need to succeed — for good.",
      icon: <CheckCircle size={24} color={C.white} />,
    },
  ];

  return (
    <section
      id="process"
      style={{
        padding: "100px 24px",
        background: C.white,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, ${C.sage}, ${C.green}, ${C.honey})`,
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(45,106,79,0.08)",
              borderRadius: 50,
              padding: "6px 16px",
              marginBottom: 20,
            }}
          >
            <ArrowRight size={14} color={C.green} />
            <span style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, fontSize: 12, color: C.green, textTransform: "uppercase", letterSpacing: "1px" }}>
              Getting Started
            </span>
          </div>
          <h2
            style={{
              fontFamily: "Lora, serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: C.dark,
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Simple Steps to a{" "}
            <span style={{ color: C.green }}>Healthier You</span>
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 40,
            position: "relative",
          }}
          className="process-grid"
        >
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: 44,
              left: "16%",
              right: "16%",
              height: 2,
              background: `linear-gradient(90deg, ${C.sagePale}, ${C.sage})`,
              zIndex: 0,
            }}
            className="connector-line"
          />

          {steps.map((step, i) => (
            <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              {/* Step number circle */}
              <div
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  boxShadow: `0 8px 24px rgba(45,106,79,0.25)`,
                  position: "relative",
                }}
              >
                {step.icon}
                <div
                  style={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: C.honey,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    color: C.white,
                  }}
                >
                  {step.number.slice(-1)}
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "Lora, serif",
                  fontWeight: 700,
                  fontSize: 22,
                  color: C.dark,
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontSize: 15,
                  color: C.muted,
                  lineHeight: 1.7,
                  maxWidth: 280,
                  margin: "0 auto",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`,
              color: "#fff",
              border: "none",
              borderRadius: 50,
              padding: "16px 40px",
              fontFamily: "Raleway, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: `0 8px 24px rgba(45,106,79,0.25)`,
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 14px 36px rgba(45,106,79,0.35)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 8px 24px rgba(45,106,79,0.25)`;
            }}
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      name: "Jennifer L.",
      role: "Marketing Director",
      text: "Working with Clara completely changed my relationship with food. After years of yo-yo dieting, I finally understand what my body needs. I've lost 25 lbs and — more importantly — kept it off for two years.",
      stars: 5,
      avatar: "JL",
    },
    {
      name: "Michael T.",
      role: "Software Engineer",
      text: "As someone with Type 2 diabetes, I was overwhelmed by nutrition advice. Clara cut through the noise and created a plan that was actually doable. My A1C dropped from 8.2 to 6.1 in just 6 months.",
      stars: 5,
      avatar: "MT",
    },
    {
      name: "Sarah K.",
      role: "New Mom",
      text: "Postpartum nutrition is so confusing, especially while breastfeeding. Clara was incredibly supportive, culturally aware, and helped me regain my energy without crazy restrictions. I can't recommend her enough.",
      stars: 5,
      avatar: "SK",
    },
  ];

  return (
    <section
      id="testimonials"
      style={{
        padding: "100px 24px",
        background: C.cream,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(116,180,155,0.1) 0%, transparent 70%)`,
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(45,106,79,0.08)",
              borderRadius: 50,
              padding: "6px 16px",
              marginBottom: 20,
            }}
          >
            <Star size={14} fill={C.honey} stroke="none" />
            <span style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, fontSize: 12, color: C.green, textTransform: "uppercase", letterSpacing: "1px" }}>
              Client Stories
            </span>
          </div>
          <h2
            style={{
              fontFamily: "Lora, serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: C.dark,
              marginBottom: 16,
            }}
          >
            Real People, Real{" "}
            <span style={{ color: C.green }}>Transformations</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        {/* Google Rating badge */}
        <div
          style={{
            textAlign: "center",
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: C.white,
              borderRadius: 50,
              padding: "12px 24px",
              boxShadow: `0 4px 20px rgba(45,106,79,0.1)`,
              border: `1px solid ${C.border}`,
            }}
          >
            <div style={{ display: "flex", gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={C.honey} stroke="none" />
              ))}
            </div>
            <span style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700, fontSize: 15, color: C.dark }}>5.0</span>
            <span style={{ fontFamily: "Raleway, sans-serif", fontSize: 13, color: C.muted }}>on Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, text, stars, avatar }) {
  return (
    <div
      style={{
        background: C.white,
        borderRadius: 24,
        padding: "32px 28px",
        border: `1px solid ${C.border}`,
        boxShadow: `0 4px 20px rgba(45,106,79,0.06)`,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 16px 48px rgba(45,106,79,0.12)`;
        e.currentTarget.style.borderColor = C.sage;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = `0 4px 20px rgba(45,106,79,0.06)`;
        e.currentTarget.style.borderColor = C.border;
      }}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: 3 }}>
        {[...Array(stars)].map((_, i) => (
          <Star key={i} size={14} fill={C.honey} stroke="none" />
        ))}
      </div>

      {/* Quote icon */}
      <Quote size={24} color={C.sagePale} />

      <p
        style={{
          fontFamily: "Lora, serif",
          fontSize: 15,
          color: C.secondary,
          lineHeight: 1.8,
          fontStyle: "italic",
          flex: 1,
          margin: 0,
        }}
      >
        "{text}"
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 12, borderTop: `1px solid ${C.border}` }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${C.sage}, ${C.green})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Raleway, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: "#fff",
          }}
        >
          {avatar}
        </div>
        <div>
          <div style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700, fontSize: 14, color: C.dark }}>
            {name}
          </div>
          <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 12, color: C.muted }}>
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Do I need a referral to see a nutritionist?",
      a: "No referral is needed. You can book directly through this website or by calling the office. However, if your insurance requires a referral for coverage, we recommend checking with your provider first.",
    },
    {
      q: "Do you accept health insurance?",
      a: "Clara is an out-of-network provider. We provide superbills that you can submit to your insurance company for potential reimbursement. Many PPO plans cover nutrition counseling — especially for conditions like diabetes, heart disease, or obesity.",
    },
    {
      q: "How long until I see results?",
      a: "Most clients notice improvements in energy levels and digestion within 2–4 weeks. More significant changes (weight loss, lab improvements) typically become visible within 2–3 months. Long-term, sustainable results take time — and that's exactly what we plan for.",
    },
    {
      q: "Do you offer virtual sessions?",
      a: "Yes! All consultations are available both in-person at 139 Centre St, Suite 606, New York, and via secure telehealth video. Virtual sessions are available to clients throughout New York State.",
    },
    {
      q: "What should I bring to my first session?",
      a: "Ideally bring any recent blood work or lab results, a list of current supplements and medications, and if possible, a 3-day food diary. Don't worry if you don't have all of these — we'll work with whatever you have.",
    },
    {
      q: "Is this suitable for families and children?",
      a: "Absolutely. Clara works with clients of all ages, including children, teens, and families. Nutrition guidance is adapted for each age group and family dynamic to ensure it's practical and enjoyable for everyone.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 24px",
        background: C.white,
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(45,106,79,0.08)",
              borderRadius: 50,
              padding: "6px 16px",
              marginBottom: 20,
            }}
          >
            <span style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, fontSize: 12, color: C.green, textTransform: "uppercase", letterSpacing: "1px" }}>
              FAQ
            </span>
          </div>
          <h2
            style={{
              fontFamily: "Lora, serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: C.dark,
            }}
          >
            Common Questions
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                border: `1px solid ${openIndex === i ? C.sage : C.border}`,
                borderRadius: 16,
                overflow: "hidden",
                transition: "border-color 0.25s",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  background: openIndex === i ? "rgba(45,106,79,0.04)" : C.white,
                  border: "none",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  cursor: "pointer",
                  transition: "background 0.25s",
                }}
              >
                <span
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: 600,
                    fontSize: 15,
                    color: openIndex === i ? C.green : C.dark,
                    textAlign: "left",
                    lineHeight: 1.4,
                    transition: "color 0.25s",
                  }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  color={C.muted}
                  style={{
                    flexShrink: 0,
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s",
                  }}
                />
              </button>

              {openIndex === i && (
                <div
                  style={{
                    padding: "0 24px 20px",
                    background: "rgba(45,106,79,0.02)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Raleway, sans-serif",
                      fontSize: 14,
                      color: C.secondary,
                      lineHeight: 1.8,
                      margin: 0,
                      paddingTop: 4,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        background: C.cream,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(45,106,79,0.08)",
              borderRadius: 50,
              padding: "6px 16px",
              marginBottom: 20,
            }}
          >
            <Calendar size={14} color={C.green} />
            <span style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, fontSize: 12, color: C.green, textTransform: "uppercase", letterSpacing: "1px" }}>
              Book a Session
            </span>
          </div>
          <h2
            style={{
              fontFamily: "Lora, serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: C.dark,
              marginBottom: 16,
            }}
          >
            Start Your{" "}
            <span style={{ color: C.green }}>Wellness Journey</span>
          </h2>
          <p style={{ fontFamily: "Raleway, sans-serif", fontSize: 17, color: C.muted, maxWidth: 480, margin: "0 auto" }}>
            Reach out for a free 20-minute discovery call. No commitment — just a conversation about your health goals.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 48,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left Info */}
          <div>
            <div
              style={{
                background: `linear-gradient(160deg, ${C.green}, ${C.greenDark})`,
                borderRadius: 24,
                padding: "36px 32px",
                color: "#fff",
                marginBottom: 24,
              }}
            >
              <h3 style={{ fontFamily: "Lora, serif", fontWeight: 700, fontSize: 22, marginBottom: 24, color: "#fff" }}>
                Contact Information
              </h3>

              {[
                { icon: <Phone size={18} />, label: "Phone", value: "+1 (212) 966-3829" },
                { icon: <Mail size={18} />, label: "Email", value: "hello@claracheung.com" },
                { icon: <MapPin size={18} />, label: "Location", value: "139 Centre St STE 606\nNew York, NY 10013" },
                { icon: <Clock size={18} />, label: "Hours", value: "Mon–Fri: 9AM – 6PM\nSat: 10AM – 2PM" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 20 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 4 }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.9)", lineHeight: 1.5, whiteSpace: "pre-line" }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div
              style={{
                background: C.white,
                borderRadius: 20,
                padding: "24px",
                border: `1px solid ${C.border}`,
              }}
            >
              <div style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, fontSize: 13, color: C.muted, marginBottom: 16 }}>
                Connect on Social
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { icon: <Instagram size={20} />, label: "Instagram" },
                  { icon: <Facebook size={20} />, label: "Facebook" },
                  { icon: <Linkedin size={20} />, label: "LinkedIn" },
                ].map((social, i) => (
                  <button
                    key={i}
                    aria-label={social.label}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: C.cream,
                      border: `1px solid ${C.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: C.green,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = C.green;
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor = C.green;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = C.cream;
                      e.currentTarget.style.color = C.green;
                      e.currentTarget.style.borderColor = C.border;
                    }}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            style={{
              background: C.white,
              borderRadius: 24,
              padding: "40px 36px",
              boxShadow: `0 8px 40px rgba(45,106,79,0.08)`,
              border: `1px solid ${C.border}`,
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "rgba(45,106,79,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <CheckCircle size={36} color={C.green} />
                </div>
                <h3 style={{ fontFamily: "Lora, serif", fontWeight: 700, fontSize: 24, color: C.dark, marginBottom: 12 }}>
                  Thank You, {form.name.split(" ")[0]}!
                </h3>
                <p style={{ fontFamily: "Raleway, sans-serif", fontSize: 15, color: C.muted, lineHeight: 1.7 }}>
                  Your message has been received. Clara or her team will be in touch within 24 hours to schedule your free discovery call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: "Lora, serif", fontWeight: 700, fontSize: 22, color: C.dark, marginBottom: 28 }}>
                  Request a Consultation
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-row">
                  <InputField
                    label="Full Name *"
                    type="text"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Jane Doe"
                    required
                  />
                  <InputField
                    label="Email Address *"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="jane@email.com"
                    required
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-row">
                  <InputField
                    label="Phone Number"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    placeholder="+1 (212) 000-0000"
                  />
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "Raleway, sans-serif",
                        fontWeight: 600,
                        fontSize: 13,
                        color: C.secondary,
                        marginBottom: 6,
                      }}
                    >
                      Service Interested In
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: 12,
                        border: `1.5px solid ${C.border}`,
                        fontFamily: "Raleway, sans-serif",
                        fontSize: 14,
                        color: form.service ? C.dark : C.muted,
                        background: C.white,
                        cursor: "pointer",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = C.green)}
                      onBlur={(e) => (e.target.style.borderColor = C.border)}
                    >
                      <option value="">Select a service</option>
                      <option value="consultation">Nutrition Consultation</option>
                      <option value="meal-plan">Custom Meal Planning</option>
                      <option value="coaching">Wellness Coaching</option>
                      <option value="discovery">Free Discovery Call</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "Raleway, sans-serif",
                      fontWeight: 600,
                      fontSize: 13,
                      color: C.secondary,
                      marginBottom: 6,
                    }}
                  >
                    Tell me about your health goals
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Share a bit about your health goals, challenges, or anything you'd like Clara to know..."
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: 12,
                      border: `1.5px solid ${C.border}`,
                      fontFamily: "Raleway, sans-serif",
                      fontSize: 14,
                      color: C.dark,
                      resize: "none",
                      outline: "none",
                      boxSizing: "border-box",
                      lineHeight: 1.6,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = C.green)}
                    onBlur={(e) => (e.target.style.borderColor = C.border)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    width: "100%",
                    background: sending ? C.sage : C.green,
                    color: "#fff",
                    border: "none",
                    borderRadius: 50,
                    padding: "16px",
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    cursor: sending ? "default" : "pointer",
                    transition: "all 0.25s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                  onMouseEnter={(e) => {
                    if (!sending) {
                      e.currentTarget.style.background = C.greenDark;
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!sending) {
                      e.currentTarget.style.background = C.green;
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  {sending ? "Sending..." : "Send Message"}
                  {!sending && <ArrowRight size={16} />}
                </button>

                <p style={{ fontFamily: "Raleway, sans-serif", fontSize: 12, color: C.muted, textAlign: "center", marginTop: 14 }}>
                  We respond within 24 hours — Monday through Saturday.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({ label, type, value, onChange, placeholder, required }) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontFamily: "Raleway, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          color: C.secondary,
          marginBottom: 6,
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: 12,
          border: `1.5px solid ${C.border}`,
          fontFamily: "Raleway, sans-serif",
          fontSize: 14,
          color: C.dark,
          outline: "none",
          boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.target.style.borderColor = C.green)}
        onBlur={(e) => (e.target.style.borderColor = C.border)}
      />
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        background: C.dark,
        color: "rgba(255,255,255,0.8)",
        padding: "60px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${C.green}, ${C.sage})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Leaf size={18} color="#fff" />
              </div>
              <span style={{ fontFamily: "Lora, serif", fontWeight: 600, fontSize: 18, color: "#fff" }}>
                Clara Cheung
              </span>
            </div>
            <p style={{ fontFamily: "Raleway, sans-serif", fontSize: 14, lineHeight: 1.7, maxWidth: 300, color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
              Licensed Registered Dietitian Nutritionist in New York City, helping individuals achieve lasting health through personalized, science-backed nutrition care.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[<Instagram size={18} />, <Facebook size={18} />, <Linkedin size={18} />].map((icon, i) => (
                <button
                  key={i}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "rgba(255,255,255,0.7)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = C.green;
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = C.green;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700, fontSize: 13, color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 20 }}>
              Quick Links
            </div>
            {["About Clara", "Services", "How It Works", "Testimonials", "Book Now"].map((link, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.6)",
                    cursor: "pointer",
                    padding: 0,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = C.sage)}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.6)")}
                >
                  {link}
                </button>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700, fontSize: 13, color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 20 }}>
              Contact
            </div>
            {[
              { icon: <Phone size={14} />, text: "+1 (212) 966-3829" },
              { icon: <Mail size={14} />, text: "hello@claracheung.com" },
              { icon: <MapPin size={14} />, text: "139 Centre St STE 606\nNew York, NY 10013" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 14, alignItems: "flex-start" }}>
                <span style={{ color: C.sage, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                <span style={{ fontFamily: "Raleway, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, whiteSpace: "pre-line" }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Clara Cheung Nutrition. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service", "HIPAA Notice"].map((link, i) => (
              <button
                key={i}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: "Raleway, sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "rgba(255,255,255,0.8)")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.4)")}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Global Styles ─────────────────────────────────────────────────────────────
const globalStyles = `
  @keyframes floatBlob {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(3deg); }
  }
  @keyframes floatCard {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(8px); }
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }
  body { font-family: 'Raleway', sans-serif; }

  .hidden-mobile { display: flex !important; }
  .show-mobile { display: none !important; }

  @media (max-width: 768px) {
    .hidden-mobile { display: none !important; }
    .show-mobile { display: flex !important; }
    .hero-grid { grid-template-columns: 1fr !important; }
    .hero-image-area { display: none !important; }
    .about-grid { grid-template-columns: 1fr !important; }
    .services-grid { grid-template-columns: 1fr !important; }
    .process-grid { grid-template-columns: 1fr !important; }
    .connector-line { display: none !important; }
    .testimonials-grid { grid-template-columns: 1fr !important; }
    .contact-grid { grid-template-columns: 1fr !important; }
    .form-row { grid-template-columns: 1fr !important; }
    .footer-grid { grid-template-columns: 1fr !important; }
    .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .no-border { border-right: none !important; }
  }

  @media (max-width: 480px) {
    .stats-grid { grid-template-columns: 1fr !important; }
  }

  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }
`;

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ClaraHome() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <div style={{ overflowX: "hidden" }}>
        <Navbar />
        <Hero />
        <StatsStrip />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
