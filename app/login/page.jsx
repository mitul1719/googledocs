"use client";

import { signIn } from "next-auth/react";
import DescriptionIcon from "@mui/icons-material/Description";
import Google from "@mui/icons-material/Google";
import { ButtonBase } from "@mui/material";

const Login = () => {
  const attmeptSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col gap-4">
      <DescriptionIcon className="cursor-pointer h-100 w-100" color="primary" fontSize="large" style={{ width: "20rem", height: "30rem" }} />
      <h2 className="text-gray-700 font-bold" style={{ fontSize: "4.5rem" }}>
        Docs
      </h2>
      <ButtonBase centerRipple className="rounded-full bg-black text-white p-4 w-2/3" onClick={attmeptSignIn}>
        <Google className="cursor-pointer h-100 w-100 mr-2" color="error" fontSize="large" />
        Sign In
      </ButtonBase>
    </div>
  );
};

export default Login;
