import AddSettingModalTemplate from '../AddSettingModal';
import AddVideoForm from './AddVideoForm';

interface IProps {
  handleClose: (value: boolean) => void;
}

const AddVideoModal = ({ handleClose }: IProps) => {
  return (
    <AddSettingModalTemplate handleClose={handleClose} title='Добавить видео'>
      <AddVideoForm handleClose={handleClose} />
    </AddSettingModalTemplate>
  );
};

export default AddVideoModal;
