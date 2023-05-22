"use client";

import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = ({ name }) => {
  console.log(name);
  return (
    <div className="p-8 m-8 bg-[#F8F9FA] pb-16" style={{ height: "50rem" }}>
      <Editor
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-52"
        editorClassName="mt-16 bg-white shadow-lg max-w-6xl mx-auto mb-12 border p-2 h-1/2"
        editorStyle={{ height: "60vh" }}
      />
    </div>
  );
};

export default RichTextEditor;
