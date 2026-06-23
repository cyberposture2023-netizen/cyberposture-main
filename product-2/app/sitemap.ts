import type { MetadataRoute } from "next";

const BASE = "https://cyberposture.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                                    priority: 1.0,  changeFrequency: "weekly" },
    { url: `${BASE}/hvi`,                           priority: 0.9,  changeFrequency: "weekly" },
    { url: `${BASE}/ai-risk-governance`,            priority: 0.9,  changeFrequency: "weekly" },
    { url: `${BASE}/about`,                         priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE}/careers`,                       priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE}/resources`,                     priority: 0.7,  changeFrequency: "weekly" },
    { url: `${BASE}/contact`,                       priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE}/legal/privacy`,                 priority: 0.3,  changeFrequency: "yearly" },
    { url: `${BASE}/legal/terms`,                   priority: 0.3,  changeFrequency: "yearly" },
    { url: `${BASE}/legal/responsible-use`,         priority: 0.3,  changeFrequency: "yearly" },
  ];
}
