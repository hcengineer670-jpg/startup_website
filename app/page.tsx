import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import TrustedBy from '@/components/home/TrustedBy';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Process from '@/components/home/Process';
import Technologies from '@/components/home/Technologies';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'TechVision — Premium IT Services & Software Development Company',
  description:
    'TechVision builds world-class web apps, mobile apps, AI solutions, and digital products for startups and enterprises. 500+ projects delivered. Get a free consultation.',
  openGraph: {
    title: 'TechVision — Premium IT Services',
    description: 'Build your digital future with TechVision. Web, Mobile, AI, Cloud & more.',
    url: 'https://techvision.io',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
