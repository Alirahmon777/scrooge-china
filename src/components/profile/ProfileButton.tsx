import { useMediaQuery } from 'usehooks-ts';
import Button from '../ui/Button';

interface IProps {
  icon: string;
  label: string;
  imageClass?: string;
}

const ProfileButton = ({ icon, label, imageClass }: IProps) => {
  const isMobile = useMediaQuery('not all and (min-width: 350px)');
  return (
    <Button
      label={isMobile ? undefined : label}
      imageClass={isMobile ? undefined : imageClass}
      leftIcon={icon}
      className='bg-transparent gap-[10px] items-center [&_p]:text-gray font-medium'
    />
  );
};

export default ProfileButton;
