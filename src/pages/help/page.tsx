import HelpAccordion from '@/components/help/HelpAccordion';
import { accordions } from '@/components/help/help-data';
import { useState } from 'react';
import telegramIcon from '@svgs/help/telegram.svg';
import chatBotIcon from '@svgs/help/chatbot.svg';
import commentAltIcon from '@svgs/help/comment-alt.svg';
import Button from '@/components/ui/Button';

const HelpPage = () => {
  const [expanded, setExpanded] = useState<false | number | null>(null);
  return (
    <section className='flex-grow'>
      <h2 className='font-bold text-white mb-[40px]'>Помощь</h2>

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
          <h3 className='text-2xl font-bold'>Не нашли свой вопрос?</h3>
          <p className='text-gray text-2xl'>
            Вы можете обратиться в наш online чат, в котором вам помогут с вашим вопросом. Или напишите нам в Telegram
          </p>
          <div className='flex gap-[30px] font-bold'>
            <Button label='Чат' leftIcon={commentAltIcon} className='py-[14px] px-6 rounded-[10px] gap-2' />
            <Button
              label='Телеграм'
              leftIcon={telegramIcon}
              className='py-[14px] px-6 bg-header [&_p]:text-white rounded-[10px] gap-2'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpPage;
