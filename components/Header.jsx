"use client";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import ButtonBase from "@mui/material/ButtonBase";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
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
        <ButtonBase centerRipple>
          <AccountCircleIcon
            className="cursor-pointer"
            color="disabled"
            fontSize="large"
          />
        </ButtonBase>
      </section>
    </div>
  );
};

export default Header;
