// Public origin of this deployment, used for canonical / Open Graph URLs.
export const siteUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:5667";

// Shared 1200x630 social card (public/opengraph-image.png), used as the default
// OG/Twitter image across pages. Next.js overwrites the whole openGraph object
// per segment, so any page that sets its own openGraph must re-reference this.
export const ogImage = {
  url: "/opengraph-image.png",
  alt: "Tracewise - Open-source observability for AI agents",
  width: 1200,
  height: 630,
};

export const title = "Tracewise - Open-source observability for AI agents";

export const description =
  "Open-source platform to trace, evaluate, and debug AI agents. Tracewise surfaces agent failures, and helps you fix them.";
