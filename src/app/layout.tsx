import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const notoSansClassName: string = notoSans.className;

export const metadata: Metadata = {
  title: "Dreams Care Hospital",
  description:
    "Dreams Care Hospital is a trusted multi-specialty healthcare center offering 24/7 emergency care, online doctor appointments, patient admissions, diagnostic tests, ambulance services, and a fully stocked pharmacy. We are committed to delivering compassionate, modern, and affordable healthcare to our community.",
  keywords: [
    "Dreams Care Hospital",
    "Best hospital in Bangladesh",
    "Online doctor appointment",
    "Emergency hospital services",
    "Patient admission hospital",
    "Diagnostic test center",
    "Ambulance service near me",
    "24/7 hospital care",
    "Hospital with pharmacy",
    "Multi-specialty hospital",
    "Affordable healthcare services",
    "Private hospital in Bangladesh",
    "Hospital for emergency care",
    "Book hospital appointment online",
    "Trusted healthcare center",
  ],

  authors: [
    { name: "Moshfiqur Rahman", url: "https://moshfiqur-rahman.vercel.app/" },
  ],
  creator: "Moshfiqur Rahman",
  metadataBase: new URL("https://your-hospital-site.com"),
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansClassName} bg-[#F8F9FA]`}>{children}</body>
    </html>
  );
}
