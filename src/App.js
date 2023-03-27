// home => <Home/>
// about => <About/>
// help => HelpLayout
// help/contact => Contact
// help/faq => Faq

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages

//pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact, contactAction } from "./pages/Contact";
import { Faq } from "./pages/Faq";
import { Users, usersLoader } from "./pages/users/Users";
import { UserDetails, UserDetailsLoader } from "./pages/users/UserDetails";
import { NotFound } from "./pages/NotFound";

//layouts
import { MainLayout } from "./layouts/MainLayout";
import { HelpLayout } from "./layouts/HelpLayout";
import { UsersLayout } from "./layouts/UsersLayout";
import UsersError from "./pages/users/UsersError";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "*", element: <NotFound /> },
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          { path: "contact", element: <Contact />, action: contactAction },
          { path: "faq", element: <Faq /> },
        ],
      },
      {
        path: "users",
        element: <UsersLayout />,
        errorElement:<UsersError/>,
        children: [
          { index: true, element: <Users />, loader: usersLoader },
          { path: ":id", element: <UserDetails />, loader: UserDetailsLoader, },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
