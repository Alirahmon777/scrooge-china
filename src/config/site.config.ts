export const cfg = {
  BASE_URL: import.meta.env.VITE_BACKEND_URL,
  ADMIN_SOCKET_URL: import.meta.env.VITE_ADMIN_SOCKET_URL,
  USER_SOCKET_URL: import.meta.env.VITE_USER_SOCKET_URL,
  LIVE_SOCKET_URL: import.meta.env.VITE_LIVE_SOCKET_URL,
  INSTRUCTION_URL: import.meta.env.VITE_INSTRUCTION_URL,
};

export const siteConfig = {
  metaData: {
    title: 'Scrooge China - Быстрое пополнение сайта Buff.163',
    description: 'Пополни свой аккаунт buff163 и купи скины CSGO, Dota 2, RUST, TF2 на 30% дешевле чем в Steam.',
    author: 'Scrooge China',
    keyword:
      'Scrooge china, scrooge, china online market, scrooge market, cs2 market, csgo market, Counter-Strike 2 market, Counter-Strike Global Offensive market, Counter-Strike GO market, DOTA 2 market, dota market, game market, Скрудж Китай, скрудж, китайский онлайн-рынок, скрудж-рынок, cs2-рынок, csgo-рынок, рынок Counter-Strike 2, рынок Counter-Strike Global Offensive, рынок Counter-Strike GO, рынок DOTA 2, рынок Dota, рынок игр, buff.163, plant-system payment-system plant, system',
    ogImage: '/images/hero-bg.png',
    ogType: 'website',
    locale: 'ru_RU',
  },
  logo: '/favicon.svg',
  logoText: 'scrooge china',
  faviconPath: 'favicon',
};
