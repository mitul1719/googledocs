"use client";

import Header from "@components/Header";
import { useRef, useState } from "react";
import { PreloadResources } from "./preload-res";
import { useSession } from "next-auth/react";
import Provider from "@components/Provider";
import { redirect } from "next/navigation";
import HomePage from "./home/page";

PreloadResources();
export default function Home({ children }) {
  return (
    <Provider>
      <HomePage />
    </Provider>
  );
}
