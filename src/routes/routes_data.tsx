import HelpLayout from '@/layout/HelpLayout';
import Layout from '@/layout/layout';
import NotFoundPage from '@/pages/not-found/page';
import { IRoutes } from '@/types/interfaces';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { adminRoutes } from '@admin/routes/admin-routes';

const HomePage = lazy(() => import('../pages/home/page'));
const ReviewPage = lazy(() => import('../pages/review/page'));
const RatingsPage = lazy(() => import('../pages/ratings/page'));
const ProfilePage = lazy(() => import('../pages/profile/page'));
const ContactsPage = lazy(() => import('../pages/contacts/page'));
const HelpPage = lazy(() => import('../pages/help/page'));
const HowItWorks = lazy(() => import('../pages/help/how-it-works/page'));
const GuaranteesPage = lazy(() => import('../pages/help/guarantees/page'));
const PrivacyPage = lazy(() => import('../pages/help/privacy/page'));
const TermPage = lazy(() => import('../pages/help/terms/page'));

const helpRoutes = [
  { path: '', component: HelpPage },
  { path: 'how-it-works', component: HowItWorks },
  { path: 'guarantees', component: GuaranteesPage },
  { path: 'privacy', component: PrivacyPage },
  { path: 'terms', component: TermPage },
];

const baseRoutes = [
  { path: '', component: HomePage },
  { path: 'reviews', component: ReviewPage },
  { path: 'ratings', component: RatingsPage },
  { path: 'profile', component: ProfilePage },
  {
    path: 'contacts',
    element: (
      <HelpLayout hasChildren>
        <ContactsPage />
      </HelpLayout>
    ),
  },
];

const generateLanguageRoutes = (language: string) => [
  {
    path: `/${language}`,
    component: Layout,
    children: [
      ...baseRoutes,
      {
        path: 'help',
        component: HelpLayout,
        children: helpRoutes.map((route) => ({ ...route, path: route.path })),
      },
    ],
  },
];

export const routes: IRoutes[] = [
  ...generateLanguageRoutes('en'),
  ...generateLanguageRoutes('ru'),
  ...adminRoutes,
  { path: '/', element: <Navigate to={'/ru'} replace /> },
  { path: '*', component: NotFoundPage },
];
