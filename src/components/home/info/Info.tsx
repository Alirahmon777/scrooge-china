import InfoCard from './InfoCard';

const infos = [
  {
    title: '100% Безопастность',
    desc: 'Все транзакции защищены 256 битным SSL сертификатом.',
  },
  {
    title: 'Без Скрытых Комиссий',
    desc: 'Вся информация по сделке, включая комиссию, будет указана при оформлении заказа.',
  },
  {
    title: 'Быстрые Выплаты',
    desc: 'Ваши переводы производятся в течении 5 минут.',
  },
];
const Info = () => {
  return (
    <section className='mt-[120px]'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:max-w-[70%] md:max-w-none md:grid-cols-2 xl:grid-cols-3 gap-[30px] md:gap-[47px] md:justify-between'>
          {infos.map(({ title, desc }, idx) => (
            <InfoCard desc={desc} title={title} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
