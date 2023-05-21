"use client";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import ButtonBase from "@mui/material/ButtonBase";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";
import { signOut } from "next-auth/react";

const Header = ({ session }) => {
  return (
    <div className="flex items-center gap-2 sticky top-0 z-50 px-8 py-2 shadow-md bg-white">
      <ButtonBase centerRipple>
        <MenuIcon
          className="cursor-pointer"
          color="primary"
          fontSize="medium"
        />
      </ButtonBase>
      <ButtonBase centerRipple>
        <DescriptionIcon
          className="cursor-pointer"
          color="primary"
          fontSize="large"
        />
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
          <AppsIcon
            className="cursor-pointer"
            fontSize="large"
            color="disabled"
          />
        </ButtonBase>

        {session ? (
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
        )}
      </section>
    </div>
  );
};

export default Header;
