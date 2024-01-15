import { GridLoader } from 'react-spinners';

const Loader = () => {
  return (
    <section className='flex flex-grow'>
      <div className='container h-full flex justify-center items-center'>
        <GridLoader color='#52EA73' />
      </div>
    </section>
  );
};

export default Loader;
