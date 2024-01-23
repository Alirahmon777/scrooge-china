import Button from '../ui/Button';

interface IProps {
  icon: string;
  label: string;
}

const ProfileButton = ({ icon, label }: IProps) => {
  return (
    <Button
      label={label}
      leftIcon={icon}
      className='bg-transparent gap-[10px] items-center [&_p]:text-gray font-medium'
    />
  );
};

export default ProfileButton;
