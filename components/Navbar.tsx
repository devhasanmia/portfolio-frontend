"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/Navbar-Menu";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-black-100 shadow-md">
      <Menu setActive={setActive}>
        {/* Home */}
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        {/* About */}
        <MenuItem setActive={setActive} active={active} item="About">
          <HoveredLink href="/about">Learn About Us</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blog"></MenuItem>
        {/* Contact */}
        <MenuItem setActive={setActive} active={active} item="Contact">
          <HoveredLink href="/contact">Get in Touch</HoveredLink>
        </MenuItem>
      </Menu>
    </header>
  );
};

export default Navbar;
