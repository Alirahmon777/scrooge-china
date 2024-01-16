import About from '@/components/home/about/About';
import Hero from '@/components/home/hero/Hero';
import Info from '@/components/home/info/Info';
import LiveRibbon from '@/components/home/live/LiveRibbon';
import Recommendation from '@/components/home/recommendation/Recommendation';
import Statistics from '@/components/home/statistics/Statistics';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Info />
      <LiveRibbon />
      <About />
      <Recommendation />
      <Statistics />
    </>
  );
};

export default HomePage;
