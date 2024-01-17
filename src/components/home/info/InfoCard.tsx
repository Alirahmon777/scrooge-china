interface IProps {
  title: string;
  desc: string;
}
const InfoCard = ({ title, desc }: IProps) => {
  return (
    <div className='before:content-[""] relative before:absolute before:top-0 before:w-[111px] before:h-[2px] before:bg-success pt-[18px] max-xl:before:left-1/2 max-xl:before:-translate-x-1/2 max-xl:text-center max-w-[368px] first:max-w-[342px] last:max-w-[341px] last:md:col-span-2 last:xl:col-auto'>
      <h3 className='max-mobile:text-2xl text-[30px] font-bold'>{title}</h3>
      <p className='max-mobile:text-xl text-2xl mt-[10px] text-gray'>{desc}</p>
    </div>
  );
};

export default InfoCard;
