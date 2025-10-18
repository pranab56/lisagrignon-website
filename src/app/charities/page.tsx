import CharitiesBanner from '../../components/charities/CharitiesBanner';
import FeaturesTabs from '../../components/charities/FeaturesTabs';
import HighlightsSection from '../../components/charities/HighlightsSection';

const page = () => {
  return (
    <div>
      <CharitiesBanner />
      <FeaturesTabs />
      <HighlightsSection />
    </div>
  );
};

export default page;