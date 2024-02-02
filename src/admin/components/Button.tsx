import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
interface IProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  type?: 'submit' | 'reset' | 'button';
}
const AdminButton = ({ label, type, className, ...props }: IProps) => {
  return (
    <Button
      type={type}
      label={label}
      className={cn(
        'px-[25px] py-[10px] [&_p]:text-gray bg-[#1d1f1e] rounded-[10px] font-normal w-[120px] gap-0 justify-center hover:bg-[#EA5252] transition-all duration-300 [&_p]:hover:text-white [&_p]:transition-all',
        className
      )}
      {...props}
    />
  );
};

export default AdminButton;
