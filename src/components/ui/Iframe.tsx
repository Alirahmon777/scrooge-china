import { AnimatePresence, motion } from 'framer-motion';
import IframeResizer from 'iframe-resizer-react';
import Button from './Button';
import { Icons } from '@/admin/components/Icons';
interface IProps {
  show: boolean;
  handleShow: (value: boolean) => void;
}
const Iframe = ({ show, handleShow }: IProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className='fixed top-0 w-full h-full bg-[#00000090] left-0 z-[999] flex items-center justify-center'
          onClick={() => handleShow(false)}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='relative w-full h-[320px] sm:w-[460px] sm:h-[320px] tablet:w-[600px] tablet:h-[360px] lg:w-[720px] lg:h-[410px]'
          >
            <Button
              LeftSvg={<Icons.close className='w-8 h-8' />}
              onClick={() => handleShow(false)}
              className='absolute top-[-10px] right-0 sm:top-[-16px] sm:right-[-16px] rounded-[50%]'
            />
            <IframeResizer
              heightCalculationMethod='lowestElement'
              width='100%'
              height='100%'
              loading='lazy'
              autoResize
              src='https://www.youtube.com/embed/hf52-JcbEoA?si=yDJpEWsQ-LF6pCjg'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Iframe;
