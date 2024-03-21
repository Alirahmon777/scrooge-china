import { IChildProps } from '@/types/interfaces';
import { Outlet } from 'react-router-dom';
import logo from '@svgs/admin/admin-logo.svg';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { Icons } from '../components/Icons';
import { handleAdminLogout } from '@/utils/handleLogout';
import { useMediaQuery } from 'usehooks-ts';
import { cn } from '@/lib/utils';

const ModeratorLayout = ({ children }: Partial<IChildProps>) => {
  const mobile = useMediaQuery('(max-width:600px)');
  const tablet = useMediaQuery('(max-width:820px)');
  const small = useMediaQuery('(max-width:475px)');
  return (
    <>
      <header className='bg-[#151716]'>
        <div className='container'>
          <div className='max-w-[1380px] mx-auto py-[10px] flex items-center justify-between'>
            <Link to={'/moderator'}>
              <img src={logo} className={cn({ 'w-32': mobile })} alt='moderator logo' />
            </Link>
            <Link to={'/moderator/assign'} className='text-gray'>
              {small ? 'Заказы' : tablet ? 'Назначить заказ' : 'Перейти и назначить заказ'}
            </Link>
            <Button
              variant='ghost'
              LeftSvg={<Icons.logOut />}
              label={!mobile ? 'Выйти из аккаунта' : 'Выйти'}
              className='[&_p]:text-white'
              onClick={handleAdminLogout}
            />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
        {children && children}
      </main>
    </>
  );
};

export default ModeratorLayout;
