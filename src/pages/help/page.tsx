import HelpAccordion from '@/components/help/HelpAccordion';
import { accordions } from '@/components/help/help-data';
import { useState } from 'react';
import chatBotIcon from '@svgs/help/chatbot.svg';
import HelpButtons from '@/components/help/HelpButtons';

const HelpPage = () => {
  const [expanded, setExpanded] = useState<false | number | null>(null);
  return (
    <section className='flex-grow'>
      <h2 className='font-bold text-white mb-[30px] lg:mb-[40px]'>Помощь</h2>

      <div className='flex flex-col items-center gap-[60px]'>
        <div className='flex flex-col gap-10 w-full'>
          {accordions.map(({ content, title }, idx) => (
            <HelpAccordion
              key={idx}
              idx={idx}
              title={title}
              expanded={expanded}
              setExpanded={setExpanded}
              content={content}
            />
          ))}
        </div>
        <div className='flex flex-col items-center max-w-[470px] text-center gap-[10px]'>
          <img src={chatBotIcon} alt='chatbot icon' />
          <h3 className='sm:text-xl lg:text-2xl font-bold'>Не нашли свой вопрос?</h3>
          <p className='text-gray sm:text-xl lg:text-2xl'>
            Вы можете обратиться в наш online чат, в котором вам помогут с вашим вопросом. Или напишите нам в Telegram
          </p>
          <div className='flex flex-grow w-full gap-[10px] justify-evenly mobile:justify-center mobile:gap-[30px] font-bold items-center'>
            <HelpButtons label='Чат' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpPage;
