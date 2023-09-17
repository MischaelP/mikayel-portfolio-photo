import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className='flex flex-col max-w-[1280px] mx-[300px] sm:pt-2 sm:flex-row h-[100px]'>
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      <p className="font-bold ">Log out</p>
    </button>
    </div>
  );
};

export default LogoutButton;