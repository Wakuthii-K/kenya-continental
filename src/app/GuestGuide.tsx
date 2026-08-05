"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, venues } from "@/data/venues";
import type { Venue } from "@/data/venues";

function InstagramIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#a8703f"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="#a8703f" stroke="none" />
    </svg>
  );
}

function VenueCard({ venue }: { venue: Venue }) {
  return (
    <div
      className="py-5"
      style={{ borderBottom: "1px solid rgba(15,50,40,0.08)" }}
    >
      <div
        className="font-[var(--font-cormorant)] font-semibold text-[20px] leading-[1.25]"
        style={{ color: "#2b241d" }}
      >
        {venue.name}
      </div>
      {venue.desc && (
        <div
          className="text-[14px] leading-[1.65] mt-1.5"
          style={{ color: "#5a5049" }}
        >
          {venue.desc}
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2.5 mt-2.5">
        <div
          className="text-[11.5px] rounded-xl px-2.5 py-1"
          style={{
            color: "#0f3228",
            background: "rgba(15,50,40,0.07)",
          }}
        >
          {venue.transport}
        </div>
        <a
          href={venue.mapUrl}
          target="_blank"
          rel="noopener"
          className="text-[11.5px] no-underline flex items-center gap-1"
          style={{ color: "#a8703f" }}
        >
          📍 Google Maps
        </a>
        {venue.ig && (
          <a
            href={venue.ig}
            target="_blank"
            rel="noopener"
            className="text-[11.5px] no-underline flex items-center gap-1.5"
            style={{ color: "#a8703f" }}
          >
            <InstagramIcon />
            {venue.igHandle}
          </a>
        )}
      </div>
    </div>
  );
}

export default function GuestGuide() {
  const [vibe, setVibe] = useState("all");

  const chipOptions = [
    { key: "all", label: "All" },
    ...categories.map((c) => ({ key: c.key, label: `${c.icon} ${c.label}` })),
  ];

  return (
    <div
      className="max-w-[480px] mx-auto min-h-screen"
      style={{
        background: "#f6f3ee",
        boxShadow: "0 0 40px rgba(0,0,0,0.06)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-center"
        style={{ background: "#0f3228", padding: "36px 28px" }}
      >
        <Image
          src="/Kenya-Continental-Hotel-Gold-Transparent.png"
          alt="Kenya Continental Hotel"
          width={280}
          height={81}
          priority
          style={{ width: 280, height: "auto" }}
        />
      </div>

      {/* Intro */}
      <div style={{ padding: "32px 28px 20px" }}>
        <div
          className="font-[var(--font-cormorant)] text-[28px] font-semibold leading-[1.2]"
          style={{ color: "#0f3228" }}
        >
          Your Nairobi
        </div>
        <div
          className="font-[var(--font-cormorant)] text-[28px] font-semibold leading-[1.2] italic"
          style={{ color: "#0f3228" }}
        >
          Little Black Book
        </div>
        <div
          className="my-4"
          style={{ width: 40, height: 2, background: "#a8703f" }}
        />
        <div
          className="font-[var(--font-cormorant)] text-[16px] italic leading-[1.7]"
          style={{ color: "#5a5049" }}
        >
          From the team at Kenya Continental — the restaurants we book for
          friends, the bars we close down on weekends, and the hidden corners of
          this city we think every visitor deserves to know.
        </div>
      </div>

      {/* Culture Note Banner */}
      <div
        style={{
          padding: "20px 28px",
          background: "rgba(15,50,40,0.04)",
          borderTop: "1px solid rgba(15,50,40,0.06)",
          borderBottom: "1px solid rgba(15,50,40,0.06)",
        }}
      >
        <div
          className="font-[var(--font-cormorant)] italic text-[15px] leading-[1.65]"
          style={{ color: "#5a5049" }}
        >
          Nairobi&apos;s culture scene can not be tamed — there&apos;s always
          something cool happening that we may not know about. Peek at these
          Instagram accounts to get a heads up:{" "}
          <a
            href="https://instagram.com/hapasawa"
            target="_blank"
            rel="noopener"
            className="not-italic font-medium"
            style={{ color: "#a8703f" }}
          >
            @hapasawa
          </a>{" "}
          and{" "}
          <a
            href="https://instagram.com/in.nairobi"
            target="_blank"
            rel="noopener"
            className="not-italic font-medium"
            style={{ color: "#a8703f" }}
          >
            @in.nairobi
          </a>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div
        className="sticky top-0 z-5"
        style={{
          background: "#f6f3ee",
          padding: "14px 0 10px",
          borderBottom: "1px solid rgba(15,50,40,0.1)",
        }}
      >
        <div
          className="flex gap-2 overflow-x-auto"
          style={{ padding: "0 28px" }}
        >
          {chipOptions.map((chip) => {
            const active = vibe === chip.key;
            return (
              <button
                key={chip.key}
                onClick={() => setVibe(chip.key)}
                className="shrink-0 cursor-pointer font-[var(--font-jost)]"
                style={{
                  padding: "8px 16px",
                  borderRadius: 20,
                  border: active
                    ? "none"
                    : "1px solid rgba(15,50,40,0.2)",
                  background: active ? "#0f3228" : "transparent",
                  color: active ? "#f7f4ee" : "#3a3a3a",
                  fontSize: "12.5px",
                  fontWeight: active ? 500 : 400,
                  whiteSpace: "nowrap",
                  letterSpacing: "0.3px",
                }}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Sections */}
      <div style={{ padding: "4px 0 48px" }}>
        {categories.map((cat) => {
          const catVenues = (venues as Venue[]).filter(
            (v) => v.cat === cat.key
          );
          if (vibe !== "all" && vibe !== cat.key) return null;
          if (catVenues.length === 0) return null;

          return (
            <div key={cat.key}>
              {/* Section Header */}
              <div
                style={{
                  padding: "36px 28px 28px",
                  background: cat.headerBg,
                  color: "#f7f4ee",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Large decorative icon */}
                <div
                  style={{
                    position: "absolute",
                    right: 20,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: 80,
                    opacity: 0.08,
                    lineHeight: 1,
                    pointerEvents: "none",
                  }}
                >
                  {cat.icon}
                </div>
                <div
                  className="text-[11px] uppercase tracking-[4px]"
                  style={{ opacity: 0.5 }}
                >
                  {cat.icon}
                </div>
                <div
                  className="font-[var(--font-cormorant)] text-[30px] font-semibold mt-2"
                  style={{ letterSpacing: "0.5px" }}
                >
                  {cat.label}
                </div>
                <div
                  className="mt-3"
                  style={{
                    width: 32,
                    height: 2,
                    background: "#a8703f",
                  }}
                />
                {cat.note && (
                  <div
                    className="font-[var(--font-cormorant)] italic text-[14px] leading-[1.55] mt-3"
                    style={{ opacity: 0.85 }}
                  >
                    {cat.note}
                  </div>
                )}
              </div>

              {/* Venue List */}
              <div style={{ padding: "0 28px" }}>
                {catVenues.map((v, i) => (
                  <VenueCard key={`${cat.key}-${i}`} venue={v} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          background: "#0f3228",
          color: "#f7f4ee",
          padding: "32px 28px",
        }}
      >
        <div
          className="font-[var(--font-cormorant)] text-[18px] italic text-center leading-[1.6]"
          style={{ opacity: 0.9 }}
        >
          Need a reservation, a ride, or a recommendation? Our front desk is
          here for you, anytime.
        </div>
        <div
          className="text-center mt-3.5 text-[11px]"
          style={{ letterSpacing: 2, opacity: 0.5 }}
        >
          KENYA CONTINENTAL HOTEL · RHAPTA ROAD, WESTLANDS
        </div>
      </div>
    </div>
  );
}
