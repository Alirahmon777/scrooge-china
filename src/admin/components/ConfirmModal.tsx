import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { Icons } from './Icons';

interface IProps {
  isToggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
  handleDelete: MouseEventHandler<HTMLButtonElement>;
}
const ConfirmModal = ({ isToggled, setToggled, handleDelete }: IProps) => {
  return (
    <AnimatePresence>
      {isToggled && (
        <motion.div
          className='fixed w-full h-full bg-[#00000090] left-0 z-[999] flex items-center justify-center'
          onClick={() => setToggled(false)}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
        >
          <motion.div className='bg-header rounded-[10px] py-4 px-5 w-[400px]' onClick={(e) => e.stopPropagation()}>
            <div className='flex items-center gap-5'>
              <Icons.waring className='w-10 h-10' />
              <h3>Вы уверены, что хотите продолжить?</h3>
            </div>
            <div className='mt-5 grid grid-cols-2 gap-5 [&_button]:w-full'>
              <Button onClick={() => setToggled(false)} label='Отмена' variant='outline' className='w-auto' />
              <Button label='Удалить' variant='admin' className='justify-center' onClick={handleDelete} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmModal;
