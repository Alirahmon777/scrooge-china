import { terms_data } from '@/components/help/terms/terms_data';
import Seo from '@/layout/seo/Seo';
import DOMPurify from 'dompurify';

const TermsPage = () => {
  return (
    <Seo metaTitle='Scrooge China | Terms' hasChat>
      <section className='flex-grow'>
        <h2 className='font-bold text-white mb-[30px] max-mobile:text-[30px]'>Оферта сервиса</h2>
        <p className='sm:text-xl tablet:text-2xl text-gray'>
          Внимательно ознакомьтесь с текстом настоящей публичной оферты, и если Вы не согласны с каким-либо пунктом
          оферты, мы предлагаем Вам отказаться от покупки Товаров использования Услуг в нашем магазине.
        </p>
        <div className='mt-[65px] flex flex-col gap-5'>
          {terms_data.map(({ content, title, children }, idx) => (
            <div key={idx} className='sm:text-xl tablet:text-2xl text-gray'>
              <h3 className='font-bold sm:text-xl tablet:text-2xl text-white mb-[10px]'>{title}</h3>
              {content && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content, { ALLOWED_ATTR: ['target', 'class', 'href'] }),
                  }}
                ></p>
              )}
              <div className='flex flex-col gap-[30px] tablet:gap-[40px] items-start'>
                {children &&
                  children.map(({ content, title }, idx) => (
                    <div key={idx} className='[&_span]:text-success'>
                      <h4 className=''>{title}</h4>
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

export default TermsPage;
