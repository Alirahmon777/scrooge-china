import { DetailedHTMLProps } from 'react';

interface IPorps extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
  label?: string;
  placeholder: string;
  type: string;
}
const Input = ({ label, id, placeholder, type, ...props }: IPorps) => {
  return (
    <label htmlFor={id} className='flex flex-col gap-[10px]'>
      {label && <p>{label}</p>}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className='bg-[#1D1F1E] p-[10px] rounded-[10px] w-full placeholder:text-gray'
        {...props}
      />
    </label>
  );
};

export default Input;
