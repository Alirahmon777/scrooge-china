interface IProps {
  title: string;
  desc: string;
}
const InfoCard = ({ title, desc }: IProps) => {
  return (
    <div className='before:content-[""] relative before:absolute before:top-0 before:w-[111px] before:h-[2px] before:bg-success pt-[18px]'>
      <h3 className='text-[30px] font-bold'>{title}</h3>
      <p className='text-2xl mt-[10px]'>{desc}</p>
    </div>
  );
};

export default InfoCard;
