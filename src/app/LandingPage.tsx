"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="lp-lightbox"
      onClick={onClose}
    >
      <button className="lp-lightbox-close" onClick={onClose}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>
      <button
        className="lp-lightbox-arrow lp-lightbox-prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <div className="lp-lightbox-img" onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          sizes="90vw"
          style={{ objectFit: "contain" }}
        />
      </div>
      <button
        className="lp-lightbox-arrow lp-lightbox-next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
      <div className="lp-lightbox-counter">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Guest Guide", href: "/guide" },
    { label: "Contact", href: "#contact" },
  ];

  const linkStyle = {
    font: "400 14px/1 var(--font-source), sans-serif",
    color: "rgba(255,255,255,.85)",
    letterSpacing: "0.5px",
    textDecoration: "none" as const,
  };

  return (
    <>
      <nav className="lp-nav">
        <Image
          src="/Kenya-Continental-Hotel-White-Transparent.png"
          alt="Kenya Continental Hotel"
          width={160}
          height={40}
          style={{ height: 40, width: "auto", objectFit: "contain" }}
          priority
        />
        <div className="lp-nav-links">
          {links.map((l) => (
            <a key={l.label} href={l.href} style={linkStyle}>
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/254721240174?text=Hello%2C%20I%27d%20like%20to%20book%20a%20stay%20at%20Kenya%20Continental%20Hotel"
            target="_blank"
            rel="noopener"
            style={{
              ...linkStyle,
              fontWeight: 500,
              color: "#fff",
              background: "rgba(255,255,255,.15)",
              padding: "10px 24px",
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,.3)",
            }}
          >
            Book Now
          </a>
        </div>
        <button
          className="lp-nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      <div className={`lp-nav-mobile ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ ...linkStyle, fontSize: 16 }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          style={{
            ...linkStyle,
            fontWeight: 500,
            color: "#fff",
            background: "rgba(255,255,255,.15)",
            padding: "12px 24px",
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,.3)",
            textAlign: "center" as const,
          }}
        >
          Book Now
        </a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <div className="lp-hero">
      <div style={{ position: "absolute", inset: 0, background: "#0d3d38" }} />
      <Image
        src="/reception.jpeg"
        alt="Kenya Continental Hotel"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        priority
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(13,61,56,.6) 0%, rgba(13,61,56,.3) 40%, rgba(13,61,56,.7) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <Image
          src="/Kenya-Continental-Hotel-White-Transparent.png"
          alt=""
          width={288}
          height={72}
          className="lp-hero-logo"
          style={{ width: "auto", objectFit: "contain" }}
        />
        <h1>Kenya Continental Hotel</h1>
        <div
          style={{
            width: 48,
            height: 1,
            background: "rgba(255,255,255,.5)",
            margin: "20px 0",
          }}
        />
        <p
          style={{
            font: "300 18px/1.4 var(--font-source), sans-serif",
            color: "rgba(255,255,255,.9)",
            margin: 0,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Since 1982
        </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="lp-about">
      <p
        style={{
          font: "300 13px/1 var(--font-source), sans-serif",
          color: "#0d3d38",
          letterSpacing: 4,
          textTransform: "uppercase",
          margin: "0 0 20px",
        }}
      >
        Where History Meets Hospitality
      </p>
      <h2
        style={{
          font: "400 36px/1.25 var(--font-libre), serif",
          color: "#0d3d38",
          margin: "0 0 24px",
        }}
      >
        In the heart of Westlands
      </h2>
      <p
        style={{
          font: "300 16px/1.8 var(--font-source), sans-serif",
          color: "#4a5a56",
          margin: "0 0 12px",
        }}
      >
        In 1948, these buildings began as a local clinic. In 1982, they became
        something new: a family-owned hotel built on care, community, and good
        breakfasts.
      </p>
      <p
        style={{
          font: "300 16px/1.8 var(--font-source), sans-serif",
          color: "#4a5a56",
          margin: "0 0 12px",
        }}
      >
        Today, we&apos;re a cozy, pocket friendly Bed &amp; Breakfast tucked
        away on a quiet, leafy street in Westlands. No city noise. Just green
        gardens and morning birds. We serve a warm mix of Continental and Kenyan
        breakfast daily, with a buffet on weekends.
      </p>
      <p
        style={{
          font: "300 16px/1.8 var(--font-source), sans-serif",
          color: "#4a5a56",
          margin: "0 0 12px",
        }}
      >
        We&apos;re made for travelers who want to feel at home — whether
        you&apos;re here for business or to explore. We&apos;re walking distance
        to Westlands, and just 35 minutes from JKIA using the Expressway.
      </p>
      <p
        style={{
          font: "600 16px/1.8 var(--font-source), sans-serif",
          color: "#0d3d38",
          margin: "0 0 32px",
        }}
      >
        Family owned. Guest loved. Since 1982.
      </p>
      <a
        href="https://wa.me/254721240174?text=Hello%2C%20I%27d%20like%20to%20book%20a%20stay%20at%20Kenya%20Continental%20Hotel"
        target="_blank"
        rel="noopener"
        style={{
          font: "500 14px/1 var(--font-source), sans-serif",
          color: "#fff",
          background: "#0d3d38",
          padding: "14px 32px",
          borderRadius: 4,
          display: "inline-block",
          textDecoration: "none",
        }}
      >
        Book Your Stay
      </a>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: "/gallery/KCH%20DSC07919_HDR%201.jpg", alt: "Hotel exterior" },
    { src: "/gallery/KCH%20DSC07925_HDR.jpg", alt: "Hotel view" },
    { src: "/gallery/KCH%20DSC07929_HDR%201.jpg", alt: "Hotel room" },
    { src: "/gallery/KCH%20DSC07949_HDR%201.jpg", alt: "Hotel grounds" },
    { src: "/gallery/KCH%20DSC07967_HDR%201.jpg", alt: "Hotel amenities" },
    { src: "/gallery/KCH%20DSC07985_HDR%201.jpg", alt: "Hotel garden" },
    { src: "/gallery/KCH%20DSC08075_HDR%201.jpg", alt: "Hotel interior" },
    { src: "/gallery/KCH%20DSC08099_HDR%201.jpg", alt: "Hotel lounge" },
    { src: "/gallery/KCH%20DSC08126_HDR%201.jpg", alt: "Hotel dining" },
    { src: "/gallery/KCH%20DSC08136.jpg", alt: "Hotel details" },
    { src: "/gallery/lounge.jpeg", alt: "Hotel lounge area" },
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const onClose = useCallback(() => setLightboxIndex(null), []);
  const onPrev = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    [images.length]
  );
  const onNext = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null)),
    [images.length]
  );

  const thumbStyle = { position: "relative" as const, borderRadius: 8, overflow: "hidden" as const, cursor: "pointer" };

  return (
    <section id="gallery" className="lp-gallery">
      <h3
        style={{
          font: "400 28px/1.3 var(--font-libre), serif",
          color: "#0d3d38",
          margin: "0 0 28px",
        }}
      >
        Gallery
      </h3>
      <div className="lp-gallery-masonry">
        <div style={{ ...thumbStyle, gridRow: "1/3" }} onClick={() => setLightboxIndex(0)}>
          <Image src={images[0].src} alt={images[0].alt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
        </div>
        {images.slice(1, 5).map((img, i) => (
          <div key={i} style={thumbStyle} onClick={() => setLightboxIndex(i + 1)}>
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>
      <div className="lp-gallery-grid">
        {images.slice(5).map((img, i) => (
          <div key={i} style={thumbStyle} onClick={() => setLightboxIndex(i + 5)}>
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={onClose}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </section>
  );
}

function GuestGuideCTA() {
  return (
    <section id="guest-guide" className="lp-cta">
      <div style={{ flex: 1 }}>
        <p
          style={{
            font: "300 13px/1 var(--font-source), sans-serif",
            color: "#0d3d38",
            letterSpacing: 4,
            textTransform: "uppercase",
            margin: "0 0 16px",
          }}
        >
          Explore Nairobi
        </p>
        <h3
          style={{
            font: "400 28px/1.3 var(--font-libre), serif",
            color: "#0d3d38",
            margin: "0 0 16px",
          }}
        >
          Our Nairobi Guest Guide
        </h3>
        <p
          style={{
            font: "300 16px/1.7 var(--font-source), sans-serif",
            color: "#4a5a56",
            margin: "0 0 24px",
          }}
        >
          Discover 66 hand-picked restaurants, caf&eacute;s, nightlife spots,
          and cultural experiences — all within easy reach of the hotel.
        </p>
        <Link
          href="/guide"
          style={{
            font: "500 14px/1 var(--font-source), sans-serif",
            color: "#fff",
            background: "#0d3d38",
            padding: "14px 32px",
            borderRadius: 4,
            display: "inline-block",
            textDecoration: "none",
          }}
        >
          View Guest Guide &rarr;
        </Link>
      </div>
      <div className="lp-cta-image">
        <Image
          src="/cafe2.webp"
          alt="Guest guide preview"
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="lp-footer">
      <div className="lp-footer-top">
        <div>
          <Image
            src="/Kenya-Continental-Hotel-White-Transparent.png"
            alt="Kenya Continental Hotel"
            width={128}
            height={32}
            style={{ height: 32, width: "auto", objectFit: "contain", marginBottom: 16 }}
          />
          <p
            style={{
              font: "300 15px/1.7 var(--font-source), sans-serif",
              color: "rgba(255,255,255,.6)",
              margin: 0,
            }}
          >
            2177 Rhapta Road, Westlands
            <br />
            Nairobi, Kenya
          </p>
          <p
            style={{
              font: "300 14px/1.7 var(--font-source), sans-serif",
              color: "rgba(255,255,255,.6)",
              margin: "12px 0 0",
            }}
          >
            <a href="tel:+254721240174" style={{ color: "rgba(255,255,255,.6)", textDecoration: "none" }}>
              +254 721 240 174
            </a>
            <br />
            <a href="mailto:kchkaribu@gmail.com" style={{ color: "rgba(255,255,255,.6)", textDecoration: "none" }}>
              kchkaribu@gmail.com
            </a>
          </p>
        </div>
        <a
          href="https://maps.google.com/?q=Kenya+Continental+Hotel+Westlands+Nairobi"
          target="_blank"
          rel="noopener"
          style={{
            font: "500 14px/1 var(--font-source), sans-serif",
            color: "#fff",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
            opacity: 0.7,
          }}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          View on Google Maps &#8599;
        </a>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 20 }}>
        <p
          style={{
            font: "300 12px/1 var(--font-source), sans-serif",
            color: "rgba(255,255,255,.3)",
            margin: 0,
          }}
        >
          &copy; 2026 Kenya Continental Hotel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div style={{ background: "#fff" }}>
      <NavBar />
      <Hero />
      <About />
      <Gallery />
      <GuestGuideCTA />
      <Footer />
    </div>
  );
}
