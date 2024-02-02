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
          <p>Укажите Trade URL и выберите скины, которые хотите продать.</p>
        </li>
        <li className='flex flex-col gap-[10px]'>
          <h4>Шаг 3</h4>
          <p>Выберите удобную платежную систему, укажите реквизиты и готово!</p>
        </li>
      </ul>
      <div className='tablet:flex-[460px] bg-white max-mobile:h-[250px] min-h-[250px] mobile:min-h-full'></div>
    </div>
  );
};

export default HowItWorksInstructions;
