import About from '@/components/home/about/About';
import Hero from '@/components/home/hero/Hero';
import Info from '@/components/home/info/Info';
import LiveRibbon from '@/components/home/live/LiveRibbon';
import Recommendation from '@/components/home/recommendation/Recommendation';
import Statistics from '@/components/home/statistics/Statistics';
import { useMediaQuery } from 'usehooks-ts';
const HomePage = () => {
  const mobile = useMediaQuery('(max-width: 540px)');
  return (
    <>
      <Hero />
      <Info />
      {!mobile && <LiveRibbon />}
      <About />
      <Recommendation />
      <Statistics />
    </>
  );
};

export default HomePage;
