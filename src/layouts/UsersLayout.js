import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../pages/Loading";

export const UsersLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="users-layout">
      <h2>Users</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
        expedita nisi. Praesentium, adipisci placeat reprehenderit quod facilis
        aliquid eaque culpa nobis recusandae, sequi obcaecati. Aliquam beatae
        vero animi quaerat laborum.
      </p>
      {navigation.state === "loading" && <Loading />}
      <Outlet />
    </div>
  );
};
