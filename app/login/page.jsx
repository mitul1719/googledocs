"use client";

import { signIn, signOut } from "next-auth/react";

const Login = () => {
  return <button onClick={signIn}>Sign In</button>;
};

export default Login;
