import HelpButtons from '@/components/help/HelpButtons';
const ContactsPage = () => {
  return (
    <section className='flex-grow'>
      <div className='flex flex-col gap-5 tablet:gap-[30px] sm:max-w-[80%]'>
        <h2 className='font-bold text-white'>Контакты</h2>
        <p className='sm:text-xl tablet:text-2xl text-gray'>
          Если у вас возникли вопросы или предложения по проекту напишите нам на почту:
        </p>
        <a
          className='text-[22px] sm:text-3xl tablet:text-[40px] font-bold break-words'
          href='mailto:examplemail@gmail.com'
        >
          examplemail@gmail.com
        </a>
      </div>
      <div className='flex flex-col gap-[10px] mt-[30px] sm:mt-[50px] tablet:mt-[100px] max-w-[470px]'>
        <h3 className='sm:text-xl tablet:text-2xl font-bold'>Служба поддержки</h3>
        <p className='text-gray sm:text-xl tablet:text-2xl'>
          Вы также можете обратиться в наш онлайн-чат Jivo, где мы ответим в течение 1 минуты. Также доступен контакт
          через Telegram
        </p>
        <div className='flex mobile:items-center max-mobile:flex-col gap-4 mobile:gap-[30px]'>
          <HelpButtons label='Jivo чат' />
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
