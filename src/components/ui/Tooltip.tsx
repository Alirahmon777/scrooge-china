import React, { MouseEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { IChildProps } from '@/types/interfaces';
import { cn } from '@/lib/utils';

interface IProps extends IChildProps {
  text: string | number;
}

const Tooltip: React.FC<IProps> = ({ children, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const handleMouseEnter = (e: MouseEvent) => {
    setIsOpen(true);
    setOffset({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={cn('relative h-full', { 'cursor-pointer': isOpen })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={'absolute left-1/2 z-10 bg-[#2e2f2e] shadow-md mt-2 px-4 py-2 rounded-lg'}
          style={{ top: offset.y < 200 ? '40%' : offset.y > 270 ? '30%' : '0' }}
        >
          <p className='text-white'>{text}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Tooltip;
