import { privacy_data } from '@/components/help/privacy/privacy-data';
import Seo from '@/layout/seo/Seo';
import DOMPurify from 'dompurify';

const PrivacyPage = () => {
  return (
    <Seo metaTitle='Scrooge China | Privacy' hasChat>
      <section className='flex-grow'>
        <h2 className='font-bold text-white mb-[40px] max-mobile:text-[30px] break-words'>Конфиденциальность</h2>
        <div className='flex flex-col gap-[60px] items-start'>
          {privacy_data.map(({ title, children, content }, idx) => (
            <div className='sm:text-xl tablet:text-2xl text-gray' key={idx}>
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
                  children.map(({ content, title }, idx) => (
                    <div key={idx}>
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
    </Seo>
  );
};

export default PrivacyPage;
