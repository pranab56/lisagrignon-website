import FundraiseSecurelyCTA from '../components/home/FundraiseSecurelyCTA';
import { FundraisingBanner } from '../components/home/FundraisingBanner';
import Hero from '../components/home/Hero';
import LatestNewsSection from '../components/home/LatestNewsSection';
import PartnersSection from '../components/home/PartnersSection';
import RafflesSection from '../components/home/RafflesSection';

export default function Home() {
  return (
    <>
      <Hero />
      <RafflesSection />
      <FundraiseSecurelyCTA />
      <PartnersSection />
      <FundraisingBanner />
      <LatestNewsSection />
    </>
  );
}
