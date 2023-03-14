import React, { lazy, Suspense } from 'react';const Login = lazy(() => import('../pages/Login/Login'));
const Main = lazy(() => import('../pages/Main/Main'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieInfo = lazy(() => import('../pages/MovieInfo/MovieInfo'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));

const routes = [
  {
    path: '/',
    element: (
      <Suspense>
        <Main />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/signup',
    element: (
      <Suspense>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: '/movies',
    element: (
      <Suspense>
        <Movies />
      </Suspense>
    ),
  },
  {
    path: 'movies/:id',
    element: (
      <Suspense>
        <MovieInfo />
      </Suspense>
    ),
  },
  {
    path: '/favorites',
    element: (
      <Suspense>
        <Favorites />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense>
        <Movies />
      </Suspense>
    ),
  },
];

export default routes;
