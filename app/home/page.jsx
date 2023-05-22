"use client";

import { ButtonBase } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FolderIcon from "@mui/icons-material/Folder";
import Image from "next/image";
import GoogleImage from "@assets/googleImage.png";
import Link from "next/link";
import Header from "@components/Header";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import { redirect } from "next/navigation";
import RichTextEditor from "@components/RichTextEditor";

const HomePage = ({ children }) => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  const dialogRef = useRef(null);
  const [docName, setDocName] = useState("");
  const [showDocPage, setShowDocPage] = useState(false);

  const handleNewDoc = () => {
    dialogRef?.current?.showModal();
  };
  return (
    <div>
      <Header session={session} />

      {showDocPage ? (
        // <RichTextEditor name={docName} />
        <h1>hello</h1>
      ) : (
        <>
          <section className="bg-[#dadce0] pb-10 px-10">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between py-6">
                <h2 className="text-gray-700 text-lg">Start a new document</h2>
                <ButtonBase centerRipple>
                  <MoreVertIcon
                    className="cursor-pointer"
                    color="disabled"
                    fontSize="large"
                  />
                </ButtonBase>
              </div>
              <div className="cursor-pointer relative h-52 w-40 border-2 hover:border-blue-700">
                <Image
                  src={GoogleImage}
                  alt="new_doc"
                  fill
                  onClick={handleNewDoc}
                />
                <dialog
                  ref={dialogRef}
                  className="border-0 rounded-md outline-0"
                >
                  <input
                    type="text"
                    placeholder="Enter Document Name"
                    value={docName}
                    onChange={(e) => setDocName(e.target.value)}
                    className="border-0 rounded-md outline-0 p-2 mb-4"
                  />

                  <div className="flex justify-between">
                    <ButtonBase
                      centerRipple
                      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow"
                      type="button"
                      onClick={() => dialogRef.current.close()}
                    >
                      Close
                    </ButtonBase>

                    <ButtonBase
                      centerRipple
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                      type="button"
                      onClick={() => setShowDocPage(true)}
                    >
                      Create
                    </ButtonBase>
                  </div>
                </dialog>
              </div>
              <p className="text-xs font-semibold	mt-2 text-gray-700">Blank</p>
            </div>
          </section>

          <section className="bg-white px-10 md:px-0">
            <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
              <div className="flex items-center justify-between pb-5">
                <h2 className="font-medium flex-grow">My Documents</h2>
                <p className="mr-12">Date Created</p>
                <FolderIcon
                  className="cursor-pointer"
                  color="disabled"
                  fontSize="large"
                />
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default HomePage;
