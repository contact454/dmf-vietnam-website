import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { FloatingCTA } from "@/components/shared/floating-cta";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DMF Vietnam - Du học Đức & Khóa học tiếng Đức",
    template: "%s | DMF Vietnam",
  },
  description:
    "DMF Vietnam - Trung tâm tư vấn du học Đức và đào tạo tiếng Đức hàng đầu. Khóa học A1-B2, du học nghề Ausbildung, du học đại học, định cư Đức.",
  keywords: [
    "du học Đức",
    "học tiếng Đức",
    "Ausbildung",
    "du học nghề Đức",
    "định cư Đức",
    "DMF Vietnam",
    "tiếng Đức A1",
    "tiếng Đức B1",
    "visa Đức",
  ],
  authors: [{ name: "DMF Vietnam" }],
  creator: "DMF Vietnam",
  publisher: "DMF Vietnam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dmf.edu.vn"),
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/vi",
      "de-DE": "/de",
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: "de_DE",
    url: "https://dmf.edu.vn",
    siteName: "DMF Vietnam",
    title: "DMF Vietnam - Du học Đức & Khóa học tiếng Đức",
    description:
      "Trung tâm tư vấn du học Đức và đào tạo tiếng Đức hàng đầu Việt Nam. Khóa học A1-B2, Ausbildung, du học đại học.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DMF Vietnam - Du học Đức",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DMF Vietnam - Du học Đức & Khóa học tiếng Đức",
    description:
      "Trung tâm tư vấn du học Đức và đào tạo tiếng Đức hàng đầu Việt Nam.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
