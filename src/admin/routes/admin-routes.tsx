import { IRoutes } from '@/types/interfaces';
import { Suspense, lazy } from 'react';
import AdminLayout from '../layout/AdminLayout';
import Loader from '../components/Loader';

const Dashboard = lazy(() => import('../page'));
const History = lazy(() => import('../pages/history/page'));
const Moderators = lazy(() => import('../pages/moderators/page'));
const Settings = lazy(() => import('../pages/settings/page'));
const Statistics = lazy(() => import('../pages/statistics/page'));
const ChangePassword = lazy(() => import('../pages/change-password/page'));

const adminSubRoutes = [
  { path: '', component: Dashboard },
  { path: 'history-orders', component: History },
  { path: 'moderators', component: Moderators },
  { path: 'settings', component: Settings },
  { path: 'statistics', component: Statistics },
  { path: 'change-password', component: ChangePassword },
];

export const adminRoutes: IRoutes[] = [
  {
    path: '/admin',
    element: (
      <Suspense fallback={<Loader />}>
        <AdminLayout />
      </Suspense>
    ),
    children: [...adminSubRoutes],
  },
];
