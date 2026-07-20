import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Bytespider",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://ajinkyaswami.in/sitemap.xml",
  };
}
