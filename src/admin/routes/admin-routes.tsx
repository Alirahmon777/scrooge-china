import { IRoutes } from '@/types/interfaces';
import { Suspense, lazy } from 'react';
import AdminLayout from '../layout/AdminLayout';
import Loader from '../components/Loader';
import { Navigate } from 'react-router-dom';
import ModeratorLayout from '../layout/ModeratorLayout';
import ProtectedRoute from '@/routes/protected-route';

const History = lazy(() => import('../pages/history/page'));
const HistoryChat = lazy(() => import('../pages/history-chat/page'));
const Blacklist = lazy(() => import('../pages/blacklist/page'));
const Moderators = lazy(() => import('../pages/moderators/page'));
const Settings = lazy(() => import('../pages/settings/page'));
const Statistics = lazy(() => import('../pages/statistics/page'));
const ChangePassword = lazy(() => import('../pages/change-password/page'));
const ModeratorDashboard = lazy(() => import('../pages/moderators/dashboard/page'));
const ModeratorOrderPage = lazy(() => import('../pages/moderators/orders/page'));
const LoginPage = lazy(() => import('../pages/login/page'));

const adminSubRoutes: IRoutes[] = [
  { path: '', element: <Navigate to={'statistics'} replace /> },
  { path: 'history-orders', component: History },
  { path: 'history-chat', component: HistoryChat },
  { path: 'history-chat/:id', component: HistoryChat },
  { path: 'blacklist', component: Blacklist },
  { path: 'moderators', component: Moderators },
  { path: 'settings', component: Settings },
  { path: 'statistics', component: Statistics },
  { path: 'change-password', component: ChangePassword },
  { path: '*', element: <Navigate to={'statistics'} replace /> },
];

const moderatorSubRoutes = [
  { path: '', component: ModeratorOrderPage },
  { path: 'assign', component: ModeratorDashboard },
];

export const adminRoutes: IRoutes[] = [
  {
    path: '/admin',
    element: (
      <ProtectedRoute isAdmin>
        <Suspense fallback={<Loader />}>
          <AdminLayout />
        </Suspense>
      </ProtectedRoute>
    ),
    children: adminSubRoutes,
  },
  {
    path: '/moderator',
    element: (
      <ProtectedRoute isModerator>
        <Suspense fallback={<Loader />}>
          <ModeratorLayout />
        </Suspense>
      </ProtectedRoute>
    ),
    children: moderatorSubRoutes,
  },
  {
    path: '/admin/login',
    element: (
      <Suspense fallback={<Loader />}>
        <LoginPage />
      </Suspense>
    ),
  },
];
