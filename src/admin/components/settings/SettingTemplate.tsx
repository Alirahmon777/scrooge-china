import { ISettingTemplateProps } from '@/admin/types/interfaces';
import AdminButton from '../Button';

const SettingTemplate = ({ items, title }: ISettingTemplateProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h3 className='text-[32px] font-medium'>{title}</h3>
      <ul className='flex flex-col gap-5 p-6 bg-header rounded-[10px]'>
        {items.map(({ title, link, requisites }) => (
          <li>
            <p className='mb-[10px]'>{title}</p>
            <div className='flex items-center gap-5'>
              <div className='flex-grow w-[490px] max-w-[490px] rounded-[10px] bg-[#1D1F1E] p-[10px] text-gray hover:text-white transition-all'>
                {link && link}
                {requisites && requisites}
              </div>
              <AdminButton label='Изменить' />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingTemplate;
