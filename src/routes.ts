import Views from './containers';
import AuthLayout from './layouts/AuthLayout';
import DefaultLayout from "./layouts/DefaultLayout";

const routes = [
  {
    path: "/login",
    layout: AuthLayout,
    component: Views.Login
  },
  {
    path: "/",
    layout: DefaultLayout,
    component: Views.Home
  },
  {
    path: "/members",
    layout: DefaultLayout,
    component: Views.Members
  },
  {
    path: "*",
    layout: DefaultLayout,
    component: Views.Login
  },

];

export default routes;