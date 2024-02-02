import AdminButton from '../Button';

interface IProps {
  title: string;
  value: string;
}

const SettingVideoItem = ({ title, value }: IProps) => {
  return (
    <div>
      <p className='text-gray mb-[5px]'>{title}</p>
      <div className='flex items-center gap-5'>
        <div className='flex-grow w-[490px] max-w-[490px] rounded-[10px] bg-[#1D1F1E] p-[10px] text-gray hover:text-white transition-all'>
          {value ? value : 'Реквизиты'}
        </div>
        <AdminButton label='Изменить' />
      </div>
    </div>
  );
};

export default SettingVideoItem;
