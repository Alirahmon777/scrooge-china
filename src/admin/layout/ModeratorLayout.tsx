import { IChildProps } from '@/types/interfaces';
import { Outlet } from 'react-router-dom';
import logo from '@svgs/admin/admin-logo.svg';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { Icons } from '../components/Icons';
import { handleAdminLogout } from '@/utils/handleLogout';

const ModeratorLayout = ({ children }: Partial<IChildProps>) => {
  return (
    <>
      <header className='bg-[#151716]'>
        <div className='max-w-[1380px] mx-auto py-[10px] flex items-center justify-between'>
          <Link to={'/moderator'}>
            <img src={logo} alt='moderator logo' />
          </Link>
          <Button
            variant='ghost'
            LeftSvg={Icons.logOut}
            label='Выйти из аккаунта'
            className='[&_p]:text-white'
            onClick={handleAdminLogout}
          />
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
