import Button from '../../components/ui/Button';
import telegramIcon from '@svgs/help/telegram.svg';
import commentAltIcon from '@svgs/help/comment-alt.svg';

interface IProps {
  label: string;
}

const HelpButtons = ({ label }: IProps) => {
  function openLinkInNewTab(url: string) {
    window.open(url, '_blank');
  }

  return (
    <>
      <Button
        label={label}
        leftIcon={commentAltIcon}
        className='py-2 lg:py-[14px] justify-center px-6 rounded-[10px] gap-2'
        onClick={() => openLinkInNewTab('')}
      />
      <Button
        label='Телеграм'
        leftIcon={telegramIcon}
        className='py-2 lg:py-[14px] px-6 bg-header [&_p]:text-white justify-center rounded-[10px] gap-2'
        onClick={() => openLinkInNewTab('https://t.me/scrooge_china')}
      />
    </>
  );
};

export default HelpButtons;
