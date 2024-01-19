import HelpLayout from '@/layout/HelpLayout';
import Layout from '@/layout/layout';
import NotFoundPage from '@/pages/not-found/page';
import { IRoutes } from '@/types/interfaces';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const ReviewPage = lazy(() => import('../pages/review/page'));
const StatisticsPage = lazy(() => import('../pages/ratings/page'));
const ProfilePage = lazy(() => import('../pages/profile/page'));
const ContactsPage = lazy(() => import('../pages/contacts/page'));
const HelpPage = lazy(() => import('../pages/help/page'));
const HowItWorks = lazy(() => import('../pages/help/how-it-works/page'));
const GuaranteesPage = lazy(() => import('../pages/help/guarantees/page'));
const PrivacyPage = lazy(() => import('../pages/help/privacy/page'));
const TermPage = lazy(() => import('../pages/help/terms/page'));

export const routes: IRoutes[] = [
  {
    path: '/en',
    component: Layout,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'help',
        component: HelpLayout,
        children: [
          {
            path: '',
            component: HelpPage,
          },
          { path: 'how-it-works', component: HowItWorks },
          { path: 'guarantees', component: GuaranteesPage },
          { path: 'privacy', component: PrivacyPage },
          { path: 'terms', component: TermPage },
        ],
      },
      { path: 'reviews', component: ReviewPage },
      { path: 'statistics', component: StatisticsPage },
      { path: 'profile', component: ProfilePage },
      {
        path: 'contacts',
        element: (
          <HelpLayout hasChildren>
            <ContactsPage />
          </HelpLayout>
        ),
      },
    ],
  },
  {
    path: '/ru',
    component: Layout,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'help',
        component: HelpLayout,
        children: [
          {
            path: '',
            component: HelpPage,
          },
          { path: 'how-it-works', component: HowItWorks },
          { path: 'guarantees', component: GuaranteesPage },
          { path: 'privacy', component: PrivacyPage },
          { path: 'terms', component: TermPage },
        ],
      },
      { path: 'reviews', component: ReviewPage },
      { path: 'statistics', component: StatisticsPage },
      { path: 'profile', component: ProfilePage },
      {
        path: 'contacts',
        element: (
          <HelpLayout hasChildren>
            <ContactsPage />
          </HelpLayout>
        ),
      },
    ],
  },
  { path: '/', element: <Navigate to={'/ru'} replace /> },
  { path: '*', element: <NotFoundPage /> },
];
