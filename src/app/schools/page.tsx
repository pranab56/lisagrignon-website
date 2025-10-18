import FAQSection from '../../components/schools/FAQSection';
import FundraisingSection from '../../components/schools/Fundraising';
import OnlineRaffles from '../../components/schools/OnlineRaffles';
import RaffleRise from '../../components/schools/RaffleRise';
import RaffleRiseHero from '../../components/schools/RaffleRiseHero';
import RaffleRiseLanding from '../../components/schools/RaffleRiseLanding';

const page = () => {
  return (
    <div>
      <RaffleRise />
      <FundraisingSection />
      <RaffleRiseLanding />
      <OnlineRaffles />
      <RaffleRiseHero />
      <FAQSection />
    </div>
  );
};

export default page;