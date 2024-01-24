import { Link } from 'react-router-dom';
import { footer_nav, footer_socials } from './footer-data';
import { useMediaQuery } from 'usehooks-ts';
import FooterAccordion from './FooterAccordion';
import { useState } from 'react';

const FooterNav = () => {
  const [expanded, setExpanded] = useState<false | number | null>(null);
  const mobile = useMediaQuery('(max-width: 424.9px)');

  if (mobile) {
    const accordionComponents = footer_nav.map(({ children, title }, idx) => (
      <FooterAccordion
        items={children}
        title={title}
        expanded={expanded}
        setExpanded={setExpanded}
        idx={idx}
        key={idx}
      />
    ));

    const socialAccordion = (
      <FooterAccordion
        items={footer_socials}
        title={'Следите за нами'}
        contentParentClass='flex-row gap-5'
        expanded={expanded}
        setExpanded={setExpanded}
        idx={footer_nav.length}
      />
    );

    return accordionComponents.concat(socialAccordion);
  }

  return footer_nav.map(({ title, children }, idx) => (
    <div className='flex flex-col mobile:gap-5 md:gap-[30px] md:justify-self-center' key={idx}>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <ul className='flex flex-col gap-5 lg:text-nowrap'>
        {children.map(({ name, href }, idx) => (
          <li key={idx} className='text-gray text-2xl hover:text-white transition-all'>
            <Link to={href} className='w-full block'>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ));
};

export default FooterNav;
