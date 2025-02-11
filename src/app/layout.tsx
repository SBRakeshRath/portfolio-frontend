import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const title = "Portfolio of SBRR";

  const description = "Portfolio of a software engineer";

  return {
    metadataBase: new URL("https://pixismith.com"),
    title,
    description,
    themeColor: "black",
    openGraph: {
      title,
      description,
      url: "https://pixismith.com",
      images: [
        {
          url: "/openGraph.jpg",
          secureUrl: "/openGraph.jpg",
          width: 1200,
          height: 630,
          alt: "Preview of SBRR Portfolio",
        },
      ],
      type: "website",
      siteName: "S B Rakesh Rath | Portfolio",
    },
  };
}

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
