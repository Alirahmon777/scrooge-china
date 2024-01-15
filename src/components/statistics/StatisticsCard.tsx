interface IProps {
  title?: string;
  desc: string;
}

const StatisticsCard = ({ desc = '25000¥', title = 'Ник Нэйм' }: IProps) => {
  return (
    <li className='bg-header py-[9px] px-6 flex gap-[15px] items-center rounded-[10px]'>
      <div className='min-w-16 min-h-16 bg-[#D9D9D9] rounded-[10px]' />
      <div className='text-start'>
        <h3 className='text-2xl mb-[5px] font-bold'>{title}</h3>
        <p>
          Пополнить buff.163: <span>{desc}</span>
        </p>
      </div>
    </li>
  );
};

export default StatisticsCard;
