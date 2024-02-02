import HowItWorksInstructions from '@/components/help/how-it-works/HowItWorks';
import { how_it_works } from '@/components/help/how-it-works/how_data';

const HowItWorks = () => {
  return (
    <section className='flex-grow'>
      <h2 className='font-bold text-white mb-[40px] max-mobile:text-[30px]'>Как это работает?</h2>
      <HowItWorksInstructions />
      <ul className='flex flex-col gap-10 mt-[50px]'>
        {how_it_works.map(({ content, title }, idx) => (
          <li className='text-gray sm:text-xl tablet:text-2xl' key={idx}>
            <h4 className='text-white font-medium mb-[10px]'>{title}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HowItWorks;
