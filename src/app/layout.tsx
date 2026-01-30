import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Strathmond | Buy, Rent, Sell & Off-Plan Properties in Dubai",
    template: "%s | Strathmond",
  },
  description:
    "Strathmond is a premium Dubai real estate platform to buy, rent, sell, and explore off-plan properties with expert guidance and market insights.",
  keywords: [
    "Strathmond",
    "Dubai real estate",
    "buy property Dubai",
    "rent property Dubai",
    "sell property Dubai",
    "off plan properties Dubai",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Strathmond | Dubai Real Estate Experts",
    description:
      "Buy, rent, sell, and explore off-plan properties in Dubai with Strathmond.",
    type: "website",
    siteName: "Strathmond",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
