import { IRoutes } from '@/types/interfaces';
import { Suspense, lazy } from 'react';
import AdminLayout from '../layout/AdminLayout';
import Loader from '../components/Loader';
import { Navigate } from 'react-router-dom';
import ModeratorLayout from '../layout/ModeratorLayout';

const History = lazy(() => import('../pages/history/page'));
const Moderators = lazy(() => import('../pages/moderators/page'));
const Settings = lazy(() => import('../pages/settings/page'));
const Statistics = lazy(() => import('../pages/statistics/page'));
const ChangePassword = lazy(() => import('../pages/change-password/page'));
const ModeratorDashboard = lazy(() => import('../pages/moderators/orders/page'));
const ModeratorChat = lazy(() => import('../pages/moderators/chat/page'));

const adminSubRoutes: IRoutes[] = [
  { path: '', element: <Navigate to={'statistics'} replace /> },
  { path: 'history-orders', component: History },
  { path: 'moderators', component: Moderators },
  { path: 'settings', component: Settings },
  { path: 'statistics', component: Statistics },
  { path: 'change-password', component: ChangePassword },
  { path: '*', element: <Navigate to={'statistics'} replace /> },
];

const moderatorSubRoutes = [
  { path: '', component: ModeratorDashboard },
  { path: 'chat', component: ModeratorChat },
];

export const adminRoutes: IRoutes[] = [
  {
    path: '/admin',
    element: (
      <Suspense fallback={<Loader />}>
        <AdminLayout />
      </Suspense>
    ),
    children: adminSubRoutes,
  },
  {
    path: '/moderator',
    element: (
      <Suspense fallback={<Loader />}>
        <ModeratorLayout />
      </Suspense>
    ),
    children: moderatorSubRoutes,
  },
];
