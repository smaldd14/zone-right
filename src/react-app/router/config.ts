import HomePage from '@pages/Home';
import { ComponentType } from 'react';
import SupportPage from '../pages/Support';
import PrivacyPage from '../pages/Privacy';
import BlogPage from '../pages/Blog';

export type RouteType = {
  path?: string;
  key: string;
  component: ComponentType<object>; 
  children?: RouteType[];
  index?: boolean;
  props?: Record<string, object>;
};

export type RoutesConfig = RouteType[];

const routes: RoutesConfig = [
  {
    path: "/",
    key: "Root",
    component: HomePage,
    index: true,
  },
  {
    path: "/support",
    key: "Support",
    component: SupportPage,
  },
  {
    path: "/privacy",
    key: "Privacy",
    component: PrivacyPage,
  },
  {
    path: "/blog",
    key: "Blog",
    component: BlogPage,
  },
];

export default routes;