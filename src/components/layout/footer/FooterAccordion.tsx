import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { IFooterItem } from './types/interface';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ISocialRes } from '@/admin/types/interfaces';
interface IProps {
  title: string;
  idx: number;
  expanded: number | false | null;
  setExpanded: (value: false | number | null) => void;
  items?: IFooterItem[];
  socialItems?: ISocialRes[];
  contentParentClass?: string;
}
const FooterAccordion = ({ idx, expanded, items, setExpanded, title, contentParentClass, socialItems }: IProps) => {
  const isOpen = idx === expanded;
  const {
    i18n: { language: lng },
  } = useTranslation();

  return (
    <div className=''>
      <motion.button
        initial={false}
        onClick={() => setExpanded(isOpen ? false : idx)}
        className={cn('cursor-pointer text-white font-bold w-full flex items-center justify-between', {
          'text-success': isOpen,
        })}
      >
        <h3 className='text-xl'>{title}</h3>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='16'
          viewBox='0 0 16 12'
          fill='none'
          className={cn('transition-transform duration-200 ease-in-out stroke-white', {
            'rotate-180 stroke-success': isOpen,
          })}
        >
          <path d='M4 5.5L8 9.5L12 5.5' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            key='content'
            className={cn('mt-[10px] gap-[10px] flex flex-col items-start', contentParentClass)}
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {items &&
              items.map(({ href, name }, idx) => (
                <li key={idx} className={'text-gray text-xl transition-all'}>
                  <Link to={`/${lng}/${href}`} className={'w-full block'}>
                    {name}
                  </Link>
                </li>
              ))}

            {socialItems &&
              socialItems.map(({ id, name, url }) => (
                <li key={id}>
                  <Link to={url ?? ''} target='_blank'>
                    <img src={`/svgs/${name.toLowerCase()}.svg`} alt='social icon' />
                  </Link>
                </li>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FooterAccordion;
