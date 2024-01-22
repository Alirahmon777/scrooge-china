import DOMPurify from 'dompurify';
import { IHelpData } from '../types/interface';

const GuaranteesCard = (item: IHelpData) => {
  const clean = DOMPurify.sanitize(item.content, { ALLOWED_ATTR: ['class'] });
  return (
    <div>
      <div className='flex items-center gap-[10px]'>
        <img src={item.icon} alt={'guarantees icon'} width={48} height={48} className='max-md:w-6' />
        <h3 className='md:text-2xl font-medium'>{item.title}</h3>
      </div>
      <p
        className='mt-5 md:text-2xl text-gray'
        dangerouslySetInnerHTML={{
          __html: clean,
        }}
      ></p>
    </div>
  );
};

export default GuaranteesCard;
