"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("https://fonts.googleapis.com/icon?family=Material+Icons", {
    crossOrigin: true,
    as: "font",
  });

  return null;
}
