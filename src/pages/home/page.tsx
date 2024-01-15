import About from '@/components/home/about/About';
import Hero from '@/components/home/hero/Hero';
import Info from '@/components/home/info/Info';
import LiveRibbon from '@/components/home/live/LiveRibbon';
import Statistics from '@/components/home/statistics/Statistics';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Info />
      <LiveRibbon />
      <About />
      <Statistics />
    </>
  );
};

export default HomePage;
