"use client"

import Hero from '../../components/about/Hero';
import StatsSection from '../../components/about/StatsSection';
import WhoWhyHow from '../../components/about/WhoWhyHow';
import FAQSection from '../../components/schools/FAQSection';

const page = () => {

  return (
    <div>
      <Hero />
      <WhoWhyHow />
      <StatsSection />
      <FAQSection />
    </div>
  );
};

export default page;