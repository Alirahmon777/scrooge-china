import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { IHelpData } from './types/interface';
import DOMPurify from 'dompurify';
interface IProps extends IHelpData {
  idx: number;
  expanded: number | false | null;
  setExpanded: (value: false | number | null) => void;
}
const HelpAccordion = ({ idx, expanded, content, setExpanded, title }: IProps) => {
  const isOpen = idx === expanded;

  return (
    <div className='border-b border-b-gray pb-5'>
      <motion.button
        initial={false}
        onClick={() => setExpanded(isOpen ? false : idx)}
        className={cn('cursor-pointer text-white text-2xl font-bold w-full flex items-center justify-between', {
          'text-success': isOpen,
        })}
      >
        <h2>{title}</h2>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={cn('transition-transform duration-200 ease-in-out', { 'rotate-180': isOpen })}
        >
          <g id='chevron-down'>
            <path
              id='Vector'
              d='M6 9L12 15L18 9'
              className={isOpen ? 'stroke-success' : 'stroke-gray'}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
        </svg>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            className='mt-[10px]'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.p
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.4 }}
              className='content-placeholder text-2xl text-gray'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content, { ALLOWED_ATTR: ['class'] }),
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HelpAccordion;
