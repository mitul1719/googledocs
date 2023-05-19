"use client";

import Header from "@components/Header";
import { PreloadResources } from "./preload-res";
PreloadResources();
export default function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}
