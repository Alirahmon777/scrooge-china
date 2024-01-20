import { Outlet } from 'react-router-dom';
import logo from '@svgs/admin/admin-logo.svg';
import { asideNav } from '../static/aside-nav';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Icons } from '../components/Icons';
import { Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className='flex flex-grow items-stretch gap-[32px]'>
      <aside className='relative w-[350px] overflow-y-auto'>
        <div className='fixed px-[32px] w-[350px] pt-10 pb-20 bg-header overflow-y-auto flex flex-col justify-between gap-10 h-full min-h-screen'>
          <div className='flex flex-col gap-[36px] items-start'>
            <Link to={'/admin'}>
              <img src={logo} alt='admin logo' />
            </Link>
            <nav className='flex flex-col gap-[50px]'>
              {asideNav.map(({ children, title }, idx) => (
                <div className='flex flex-col gap-10' key={idx}>
                  <p className='text-gray'>{title}</p>
                  <ul className='flex flex-col gap-[30px]'>
                    {children.map(({ label, icon: Icon, path }, idx) => (
                      <li key={idx}>
                        <NavLink
                          to={path}
                          className={({ isActive }) =>
                            cn('flex gap-[10px]', { 'text-[#EA5252] [&_path]:stroke-[#EA5252]': isActive })
                          }
                        >
                          {<Icon />}
                          {label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
          <button className='flex items-center gap-[10px]'>
            <Icons.logOut />
            <p>Выйти из аккаунта</p>
          </button>
        </div>
      </aside>
      <main className='min-h-full'>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
