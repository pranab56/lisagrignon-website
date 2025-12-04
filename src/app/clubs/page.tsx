import Banner from '../../components/clubs/Banner';
import FAQSection from '../../components/clubs/FAQSection';
import RaffleRiseHero from '../../components/clubs/RaffleRiseHero';
import SectionFour from '../../components/clubs/Sectionfour';
import SectionOne from '../../components/clubs/sectionOne';
import SectionThree from '../../components/clubs/SectionThree';
import SectionTwo from '../../components/clubs/SectionTwo';


const page = () => {
  return (
    <div>
      <Banner />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <RaffleRiseHero />
      <FAQSection />
    </div>
  );
};

export default page;