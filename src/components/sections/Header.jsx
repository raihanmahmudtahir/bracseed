"use client";
import React, { useState } from "react";
import Flex from "../ui/Flex";
import Image from "../ui/Image";
import Container from "../ui/Container";
import { navBar } from "../../utils/data";
import List from "../ui/List";
import ListItem from "../ui/ListItem";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="pt-8 pb-[50px]">
      <Container>
        <Flex className="items-center justify-between">
          {/* Logo */}
          <div>
            <Image src="/logo.svg" alt="bracseed" width={160} height={37} />
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {/* Icon for Hamburger Menu */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <List className={`hidden sm:flex font-dm text-base gap-9`}>
            {navBar.map(({ name, link }) => (
              <ListItem name={name} link={link} key={name} />
            ))}
          </List>

          {/* Language Switcher */}
          <div className="hidden sm:block cursor-pointer font-dm text-xs font-bold">
            <span className="bg-[#C0D72F] pl-4 pr-3 py-3 rounded-bl-full rounded-tl-full">
              English
            </span>
            <span className="bg-[#D9D9D9] pl-4 pr-3 py-3 rounded-br-full rounded-tr-full">
              বাংলা
            </span>
          </div>
        </Flex>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden mt-4">
            <List className="flex flex-col font-dm text-base gap-4">
              {navBar.map(({ name, link }) => (
                <ListItem name={name} link={link} key={name} />
              ))}
            </List>
            <div className="mt-4 cursor-pointer font-dm text-xs font-bold">
              <span className="bg-[#C0D72F] pl-4 pr-3 py-3 rounded-bl-full rounded-tl-full">
                English
              </span>
              <span className="bg-[#D9D9D9] pl-4 pr-3 py-3 rounded-br-full rounded-tr-full">
                বাংলা
              </span>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
