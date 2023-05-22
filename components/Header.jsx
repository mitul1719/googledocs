"use client";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import ButtonBase from "@mui/material/ButtonBase";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FunctionsIcon from "@mui/icons-material/Functions";
import Link from "next/link";

const Header = ({ session, children }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="flex items-center gap-2 sticky top-0 z-50 px-8 py-2 shadow-md bg-white">
        <ButtonBase centerRipple>
          <MenuIcon className="cursor-pointer" color="primary" fontSize="medium" onClick={() => setShowNav(!showNav)} />
        </ButtonBase>
        <ButtonBase centerRipple>
          <DescriptionIcon className="cursor-pointer" color="primary" fontSize="large" onClick={() => redirect("/")} />
        </ButtonBase>
        <h1 className="ml-2 text-gray-700 text-2xl"> Docs</h1>
        <section className="flex px-5 py-2 rounded-lg flex-grow  justify-center ">
          <SearchIcon className="cursor-pointer m-2" />
          <input
            type="search"
            name="search"
            id="global_search"
            placeholder="Search"
            className="border-0 focus:border-0 bg-gray-100 outline-0 w-1/2 text-gray-600 rounded-lg p-2 focus-within:shadow-md"
          />
        </section>
        <section className="flex w-8 justify-center gap-2">
          <ButtonBase centerRipple>
            <AppsIcon className="cursor-pointer" fontSize="large" color="disabled" />
          </ButtonBase>

          {/* {session ? (
            <Image
              src={session?.user?.image}
              alt="profile"
              height={50}
              width={50}
              className="rounded-full cursor-pointer"
              onClick={signOut}
            />
          ) : (
            <AccountCircleIcon
              className="cursor-pointer"
              color="disabled"
              fontSize="large"
            />
          )} */}
        </section>
      </div>
      {showNav ? (
        <div className="nav bg-white w-64 h-screen absolute z-50 ">
          <div className="flex flex-col gap-7 items-start px-8 py-4">
            <Link href="https://drive.google.com/drive/u/0/" target="blank">
              <ButtonBase centerRipple>
                <AddToDriveIcon className="cursor-pointer" color="primary" fontSize="medium" />
                Drive
              </ButtonBase>
            </Link>
            <Link href="https://slides.google.com/" target="blank">
              <ButtonBase centerRipple>
                <SlideshowIcon className="cursor-pointer" color="primary" fontSize="medium" />
                Slides
              </ButtonBase>
            </Link>{" "}
            <Link href="https://forms.google.com/" target="blank">
              <ButtonBase centerRipple>
                <FormatAlignJustifyIcon className="cursor-pointer" color="primary" fontSize="medium" />
                Forms
              </ButtonBase>{" "}
            </Link>{" "}
            <Link href="https://sheets.google.com/" target="blank">
              <ButtonBase centerRipple>
                <FunctionsIcon className="cursor-pointer" color="primary" fontSize="medium" />
                Sheets
              </ButtonBase>
            </Link>{" "}
          </div>
        </div>
      ) : null}

      {children}
    </>
  );
};

export default Header;
