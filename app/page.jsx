"use client";

import Header from "@components/Header";
import { PreloadResources } from "./preload-res";
import { ButtonBase } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FolderIcon from "@mui/icons-material/Folder";
import Image from "next/image";
import GoogleImage from "@assets/googleImage.png";
import { useSession } from "next-auth/react";
// import Login from "@components/Login";
import { redirect } from "next/navigation";

PreloadResources();
export default function Home() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  return (
    <div>
      <Header session={session} />
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
            <Image src={GoogleImage} alt="new_doc" fill />
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
    </div>
  );
}
