import { cn } from '@/lib/utils';
import { IChildProps } from '@/types/interfaces';

interface IProps extends IChildProps {
  badgeContent: string;
  badgeColor: string;
}
const Badge = ({ children, badgeContent, badgeColor }: IProps) => {
  return (
    <div className='relative'>
      {badgeContent && (
        <span
          className={cn(
            'w-[30px] h-[30px] absolute -top-[11px] -right-[10px] rounded-full flex items-center justify-center text-black font-bold',
            badgeColor
          )}
        >
          {badgeContent}
        </span>
      )}
      {children}
    </div>
  );
};

export default Badge;
