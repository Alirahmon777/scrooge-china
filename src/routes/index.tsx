import { Suspense } from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import { routes } from './routes_data';
import { v4 } from 'uuid';
import { IRoutes } from '@/types/interfaces';
import Loader from '@/components/ui/Loader';
import Layout from '@/layout/layout';

const renderRoutes = (routes: IRoutes[]): React.ReactNode => {
  return routes.map(({ path, component, children, element }) => (
    <Route key={v4()} path={path} Component={component} element={element}>
      {children && renderRoutes(children)}
    </Route>
  ));
};

export const Routes = () => {
  return (
    <Suspense
      fallback={
        <Layout hasChildren flex>
          <Loader />
        </Layout>
      }
    >
      <BrowserRoutes>{renderRoutes(routes)}</BrowserRoutes>
    </Suspense>
  );
};
