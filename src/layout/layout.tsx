import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import { IChildProps } from '@/types/interfaces';
import { Outlet } from 'react-router-dom';

interface IProps extends Partial<IChildProps> {
  hasChildren?: boolean;
  flex?: boolean;
}
const Layout = ({ hasChildren, children, flex }: IProps) => {
  return (
    <>
      <Header />
      <main className={flex ? 'flex' : ''}>
        <Outlet />
        {hasChildren && children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
