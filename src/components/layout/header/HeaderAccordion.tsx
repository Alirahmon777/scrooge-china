import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IHeaderNav } from './types/interface';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
interface IProps {
  title: string;
  items: IHeaderNav[];
  contentParentClass?: string;
  handleClose: () => void;
}
const HeaderAccordion = ({ items, title, contentParentClass, handleClose }: IProps) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();
  return (
    <div className={cn({ 'bg-[#1D1F1E]': expanded }, 'px-[14px] py-2 hover:bg-[#1D1F1E]')}>
      <motion.button
        initial={false}
        onClick={() => setExpanded(!expanded)}
        className={cn('cursor-pointer text-gray font-bold w-full flex items-center justify-between text-2xl', {
          'text-success': expanded,
        })}
      >
        {t(title, 'layout')}
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={cn({ 'rotate-180 !stroke-success': expanded }, 'transition-all stroke-[#68716c]')}
        >
          <g id='chevron-down'>
            <path id='Vector' d='M6 9L12 15L18 9' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </g>
        </svg>
      </motion.button>
      <AnimatePresence initial={false}>
        {expanded && (
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
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {items.map(({ href, name }, idx) => (
              <li key={idx} className={'text-gray hover:text-white w-full text-xl transition-all'} onClick={handleClose}>
                <Link to={{ pathname: href }} className={'w-full block'}>
                  {t(name, 'layout')}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderAccordion;
