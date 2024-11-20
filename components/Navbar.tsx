"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/Navbar-Menu";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <header className="sticky top-0 z-50 bg-black-100 shadow-md rounded-full">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blog"></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact"
        ></MenuItem>
      </Menu>
    </header>
  );
};

export default Navbar;
