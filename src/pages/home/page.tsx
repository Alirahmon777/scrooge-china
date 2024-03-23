import About from '@/components/home/about/About';
import Hero from '@/components/home/hero/Hero';
import Info from '@/components/home/info/Info';
import LiveRibbon from '@/components/home/live/LiveRibbon';
import Recommendation from '@/components/home/recommendation/Recommendation';
import Statistics from '@/components/home/statistics/Statistics';
import Seo from '@/layout/seo/Seo';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

const metaAlternates = [
  { href: '/ru', hrefLang: 'ru_RU' },
  { href: '/en', hrefLang: 'en_US' },
];

const HomePage = () => {
  const mobile = useMediaQuery('(max-width: 540px)');
  const {
    i18n: { language: lng },
  } = useTranslation();
  const { pathname } = useLocation();
  return (
    <Seo home={`/${lng}`} ogURL={pathname} alternates={metaAlternates} hasChat>
      <Hero />
      <Info />
      {!mobile && <LiveRibbon />}
      <About />
      <Recommendation />
      <Statistics />
    </Seo>
  );
};

export default HomePage;
