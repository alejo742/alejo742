// app/page.tsx
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import WorkSection from '@/components/sections/WorkSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}