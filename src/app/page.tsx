import FundraiseSecurelyCTA from '../components/home/FundraiseSecurelyCTA';
import { FundraisingBanner } from '../components/home/FundraisingBanner';
import Hero from '../components/home/Hero';
import LatestNewsSection from '../components/home/LatestNewsSection';
import PartnersSection from '../components/home/PartnersSection';
import RafflesSection from '../components/home/RafflesSection';
import Footer from '../components/reusable/Footer';
import NavigationHeader from '../components/reusable/Navber';

export default function Home() {
  return (
    <>
      <NavigationHeader />
      <Hero />
      <RafflesSection />
      <FundraiseSecurelyCTA />
      <PartnersSection />
      <FundraisingBanner />
      <LatestNewsSection />
      <Footer />
    </>
  );
}
