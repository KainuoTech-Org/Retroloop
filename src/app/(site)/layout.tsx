import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex-1 min-h-screen flex flex-col">
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
}