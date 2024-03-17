import { Suspense, lazy } from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import { routes } from './routes_data';
import { v4 } from 'uuid';
import { IRoutes } from '@/types/interfaces';
import Loader from '@/components/ui/Loader';
import Layout from '@/layout/layout';
import { useMediaQuery } from 'usehooks-ts';
import ModeratorLayout from '@/admin/layout/ModeratorLayout';

const ChatPage = lazy(() => import('../pages/payment/chat/page'));
const ModeratorChat = lazy(() => import('../admin/pages/moderators/chat/page'));

const renderRoutes = (routes: IRoutes[]): React.ReactNode => {
  return routes.map(({ path, component, children, element }) => (
    <Route key={v4()} path={path} Component={component} element={element}>
      {children && renderRoutes(children)}
    </Route>
  ));
};

export const Routes = () => {
  const notTablet = useMediaQuery('(min-width: 1024px)');
  return (
    <Suspense
      fallback={
        <Layout hasChildren flex>
          <Loader />
        </Layout>
      }
    >
      <BrowserRoutes>
        {renderRoutes(routes)}
        {!notTablet && (
          <>
            <Route
              path='ru/payment-chat'
              element={
                <Layout hasChildren>
                  <ChatPage />
                </Layout>
              }
            />
            <Route
              path='en/payment-chat'
              element={
                <Layout hasChildren>
                  <ChatPage />
                </Layout>
              }
            />
            <Route
              path='/moderator/chat'
              element={
                <ModeratorLayout>
                  <ModeratorChat />
                </ModeratorLayout>
              }
            />
          </>
        )}
      </BrowserRoutes>
    </Suspense>
  );
};
