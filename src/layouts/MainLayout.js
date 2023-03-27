import React from "react";
import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Loading from "../pages/Loading";



export const MainLayout = () => {

  const navigation = useNavigation()
  return (
    <div className="main-layout">
      <header className="container">
        <h1><NavLink to='/'>React Router</NavLink></h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/help">Help</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
      </header>
      <main className="container">
        <Outlet/>
        {navigation.state === "loading" && <Loading/>}      
      </main>
    </div>
  );
};
