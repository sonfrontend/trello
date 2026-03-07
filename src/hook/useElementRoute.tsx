import AuthLayout from '@/layouts/AuthLayout';
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Login = lazy(() => import('@/pages/auths/Login'));
const Register = lazy(() => import('@/pages/auths/Register'));

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <>Home</>
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
