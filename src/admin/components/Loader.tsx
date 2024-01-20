import { FadeLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className='flex flex-grow justify-center items-center'>
      <FadeLoader color='#EA5252' />
    </div>
  );
};

export default Loader;
