"use client";

import RichTextEditor from "@components/RichTextEditor";
import { useSearchParams } from "next/navigation";

const EditorWindow = () => {
  const params = useSearchParams();

  console.log(params.get("name"));
  return (
    <div>
      <RichTextEditor />
    </div>
  );
};

export default EditorWindow;
