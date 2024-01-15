import DOMPurify from 'dompurify';
import { IHelpData } from '../types/interface';

const GuaranteesCard = (item: IHelpData) => {
  const clean = DOMPurify.sanitize(item.content, { ALLOWED_ATTR: ['class'] });
  return (
    <div>
      <div className='flex items-center gap-[10px]'>
        <img src={item.icon} alt={item.title} />
        <h3 className='text-2xl font-medium'>{item.title}</h3>
      </div>
      <p
        className='mt-5 text-2xl text-gray'
        dangerouslySetInnerHTML={{
          __html: clean,
        }}
      ></p>
    </div>
  );
};

export default GuaranteesCard;
