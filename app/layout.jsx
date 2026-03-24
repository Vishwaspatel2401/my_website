import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrainsMono",
  display: "swap",
});

export const metadata = {
  title: "Vishwas Patel | Portfolio",
  description: "Software Engineer and Master's student in Computer Science at Santa Clara University. Passionate about building scalable and efficient applications.",
  keywords: ["software engineer", "full stack developer", "React", "Next.js", "Python", "Santa Clara University"],
  openGraph: {
    title: "Vishwas Patel | Portfolio",
    description: "Software Engineer and Master's student in Computer Science at Santa Clara University.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwas Patel | Portfolio",
    description: "Software Engineer and Master's student in Computer Science at Santa Clara University.",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
