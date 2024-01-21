import Button from '@/components/ui/Button';
interface IProps {
  label: string;
}
const AdminButton = ({ label }: IProps) => {
  return (
    <Button
      label={label}
      className='px-[25px] py-[10px] [&_p]:text-gray bg-[#1d1f1e] rounded-[10px] font-normal w-[120px] gap-0 justify-center hover:bg-[#EA5252] transition-all duration-300 [&_p]:hover:text-white [&_p]:transition-all'
    />
  );
};

export default AdminButton;
