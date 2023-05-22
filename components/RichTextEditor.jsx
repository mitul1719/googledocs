"use client";

import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import dynamic from "next/dynamic";
const Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), { ssr: false });

const RichTextEditor = ({ name, docHandler }) => {
  return (
    <div className="p-8 m-8 bg-[#F8F9FA] pb-16" style={{ height: "50rem" }}>
      <div className="flex items-center gap-4 font-bold">
        <ArrowBackIcon className="cursor-pointer" color="primary" fontSize="large" onClick={() => docHandler(false)} />
        <h1>{`Editing ${name.toUpperCase()}`}</h1>
      </div>
      <Editor toolbarClassName="flex sticky top-0 z-50 !justify-center mx-52" editorClassName="mt-16 bg-white shadow-lg max-w-6xl mx-auto mb-12 border p-2 h-1/2" editorStyle={{ height: "60vh" }} />
    </div>
  );
};

export default RichTextEditor;
