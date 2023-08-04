import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import Blog from './containers/Blog/Blog';
import SingleBlogPost from './containers/SingleBlogPost/SingleBlogPost';
import UserAuthentication from './containers/UserAuthentication/UserAuthentication';
import GoldSubscription from './containers/GoldSubscription/GoldSubscription';
import VideoIntegration from './containers/VideoIntegration/VideoIntegration';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';

import {
  createBrowserRouter,
  Outlet,
  useRouteError,
} from "react-router-dom";
import Profile from './pages/Profile';
import Navigation from './components/Header/Navigation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [

      {
        path: "/",
        element: <Home />,
        // loader: contactLoader
      },
      {
        path: "/blog",
        element: <Blog />,
        // loader: contactLoader,
        // action: editAction
      },
      {
        path: "/blog/:postId",
        element: <SingleBlogPost />,
        // loader: contactLoader,
        // action: editAction
      },
      {
        path: "/signup",
        element: <UserAuthentication />,
        // loader: contactLoader,
        // action: editAction
      },
      {
        path: "/signin",
        element: <UserAuthentication />,
        // loader: contactLoader,
        // action: editAction
      },
      // Protected Routes 
      {
        path: "/profile",
        element: <Profile />,
        // loader: contactLoader,
        // action: editAction
      },
      {
        path: "/subscription",
        element: <GoldSubscription />,
        // loader: contactLoader,
        // action: editAction
      },
      {
        path: "/video",
        element: <VideoIntegration />,
        // loader: contactLoader,
        // action: editAction
      },
      {        
        path: "/about",
        element: <About />,
        // loader: contactLoader,
        // action: editAction
      },
      {
        path: "/contact",
        element: <Contact />,
        // loader: contactLoader,
        // action: editAction
      },

    ]
  },
]);


export function Root() {


  return (
    <>
      <Navigation />
      <div id="detail">
        <Outlet />        
      </div>
    </>
  );
}

export function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default router;
