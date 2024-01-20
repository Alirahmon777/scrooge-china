interface IProps {
  icon: string;
  title: string;
  content: string;
}

const ExchangeItem = ({ icon, content, title }: IProps) => {
  return (
    <div className='flex flex-col gap-[5px]'>
      <div className='flex items-center gap-[5px]'>
        <img src={icon} alt={title} />
        <p>{title}</p>
      </div>
      <p className='text-[32px] font-medium'>{content}</p>
    </div>
  );
};

export default ExchangeItem;
