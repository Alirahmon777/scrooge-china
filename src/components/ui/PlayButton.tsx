import React from 'react';
import playIcon from '@svgs/play.svg';

interface IProps {
  label?: string;
}
const PlayButton = ({ label }: IProps) => {
  return (
    <div className='flex items-center gap-2'>
      <button className='rounded-full w-[52px] h-[52px] flex items-center justify-center bg-success'>
        <img src={playIcon} alt={label} />
      </button>
      {label && <p className='font-bold'>{label}</p>}
    </div>
  );
};

export default PlayButton;
