import globe from '@svgs/layout/globe.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { languages } from './header-data';
import HeaderPopover from './HeaderPopover';
import { PositionTypes } from '@/types/types';

interface IProps {
  position: PositionTypes;
}

const HeaderLang = ({ position = 'bottom' }: IProps) => {
  const {
    i18n: { language: lang, changeLanguage },
  } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLang = (lang: string | undefined) => {
    changeLanguage(lang);
    navigate(pathname.replace(/^(\/en|\/ru)(|$)/, `/${lang}`));
  };

  return (
    <HeaderPopover
      isActive={(item) => item.lang == lang}
      items={languages}
      onClickItem={(item) => handleLang(item.lang)}
      position={position}
    >
      {(showPopover, setShowPopover) => (
        <button
          className={'flex items-center gap-1 cursor-pointer font-semibold leading-6 uppercase'}
          onClick={() => setShowPopover(!showPopover)}
        >
          <img src={globe} alt={'header icon'} />
          {lang === 'ru' ? 'rus' : 'eng'}
        </button>
      )}
    </HeaderPopover>
  );
};

export default HeaderLang;
