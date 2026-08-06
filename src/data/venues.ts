export interface Venue {
  cat: string;
  name: string;
  desc: string;
  transport: string;
  mapUrl: string;
  ig?: string;
  igHandle?: string;
}

export interface Category {
  key: string;
  label: string;
  icon: string;
  headerBg: string;
  note?: string;
}

export const categories: Category[] = [
  { key: "recommended", label: "Manager Recommended", icon: "🤌", headerBg: "#0d3d38" },
  { key: "wellness", label: "Wellness", icon: "🧘🏿", headerBg: "#1a5650" },
  { key: "nightlife", label: "Nightlife & Lounges", icon: "\uD83C\uDF19", headerBg: "#0d3d38" },
  { key: "food", label: "Restaurants", icon: "\uD83C\uDF7D\uFE0F", headerBg: "#a8703f" },
  { key: "cafe", label: "Caf\u00e9s & Coffee", icon: "\u2615", headerBg: "#1a5650" },
  { key: "shopping", label: "Shopping", icon: "\uD83D\uDECD\uFE0F", headerBg: "#0d3d38" },
  { key: "culture", label: "Culture & Arts", icon: "\uD83C\uDFAD", headerBg: "#1a5650" },
  { key: "outdoor", label: "Outdoor & Nature", icon: "\uD83C\uDF3F", headerBg: "#0d3d38" },
  { key: "karen", label: "A Day in Karen", icon: "\uD83E\uDD92", headerBg: "#5c3a24", note: "If you plan to visit the Sheldrick, leave the hotel before 9 AM \u2014 Nairobi traffic is real, and you\u2019ll want enough time to catch the action." },
];

export { default as venues } from "../venues.json";
