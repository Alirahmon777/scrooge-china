import { useMediaQuery } from 'usehooks-ts';
import Button from '@components/ui/Button';

interface IProps {
  icon: string;
  label: string;
  imageClass?: string;
  onClick?: () => void;
}

const ProfileButton = ({ icon, label, imageClass, onClick }: IProps) => {
  const isMobile = useMediaQuery('not all and (min-width: 350px)');
  return (
    <Button
      label={isMobile ? undefined : label}
      imageClass={isMobile ? undefined : imageClass}
      leftIcon={icon}
      onClick={onClick}
      variant='ghost'
    />
  );
};

export default ProfileButton;
