import AuthLayout from '@/layouts/AuthLayout';
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Login = lazy(() => import('@/pages/auths/Login'));
const Register = lazy(() => import('@/pages/auths/Register'));
const MainLayout = lazy(() => import('@/layouts/MainLayout'));

// const children = <></>;

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <MainLayout></MainLayout>
    },
    {
      path: '/login',
      element: (
        <AuthLayout>
          <Login></Login>
        </AuthLayout>
      )
    },
    {
      path: '/register',
      element: (
        <AuthLayout>
          <Register></Register>
        </AuthLayout>
      )
    }
  ]);
  return routeElements;
}
