import { cfg } from '@/config/site.config';
import IframeResizer from 'iframe-resizer-react';

const HowItWorksInstructions = () => {
  return (
    <div className='p-5 mobile:px-[30px] mobile:py-[45px] flex max-tablet:flex-col gap-12 mt-[15px] bg-header rounded-[10px]'>
      <ul className='flex flex-col gap-[30px] flex-[220px] font-medium [&_p]:text-gray [&_h4]:text-2xl'>
        <li className='flex flex-col gap-[10px]'>
          <h4>Шаг 1</h4>
          <p>Авторизуйтесь на сайте, используя вашу учетную запись Steam.</p>
        </li>
        <li className='flex flex-col gap-[10px]'>
          <h4>Шаг 2</h4>
          <p>В разделе пополнения выберете нужное количество ¥ - Юаней.</p>
        </li>
        <li className='flex flex-col gap-[10px]'>
          <h4>Шаг 3</h4>
          <p>Выберите удобную платежную систему и откройте чат, пришлите в чат свой QR-код для оплаты и готово!</p>
        </li>
      </ul>
      <div className='tablet:flex-[460px] max-mobile:h-[250px] min-h-[250px] mobile:min-h-full'>
        <IframeResizer
          heightCalculationMethod='lowestElement'
          width='100%'
          height='100%'
          loading='lazy'
          src={cfg.INSTRUCTION_URL}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default HowItWorksInstructions;
