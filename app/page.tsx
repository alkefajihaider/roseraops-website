import Navbar from '@/components/Navbar';
import FloralBackground from '@/components/FloralBackground';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ServicesSection from '@/components/ServicesSection';
import MethodSection from '@/components/MethodSection';
import ResearchSection from '@/components/ResearchSection';
import BuiltWithMethodSection from '@/components/BuiltWithMethodSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ivory"
      >
        Skip to content
      </a>
      <FloralBackground />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <MethodSection />
        <ResearchSection />
        <BuiltWithMethodSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
