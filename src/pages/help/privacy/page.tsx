import { privacy_data } from '@/components/help/privacy/privacy-data';
import DOMPurify from 'dompurify';

const PrivacyPage = () => {
  return (
    <section className='flex-grow'>
      <h2 className='  font-bold text-white mb-[40px]'>Конфиденциальность</h2>
      <div className='flex flex-col gap-[60px] items-start'>
        {privacy_data.map(({ title, children, content }) => (
          <div className='text-2xl text-gray'>
            <h3 className='font-bold text-white mb-[10px]'>{title}</h3>
            {content && (
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(content, { ALLOWED_ATTR: ['target', 'class', 'href'] }),
                }}
              ></p>
            )}
            <div className='flex flex-col gap-[60px] items-start'>
              {children &&
                children.map(({ content, title }) => (
                  <div>
                    <h4 className='font-bold text-white mb-[10px]'>{title}</h4>
                    {content && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(content),
                        }}
                      ></p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPage;
