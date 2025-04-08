"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { IsAdmin } from "@/app/api/Action";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const getRole = async () => {
      const role = await IsAdmin();
      setIsAdmin(role);
    };
    getRole();
  }, []);

  const menuItems = ["Home", "Rooms", "Reservation"];
  return (
    <div>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="text-background shadow-sm shadow-default-800 bg-foreground"
      >
        <NavbarContent>
          <NavbarBrand className="">
            <Link href={"/"} className="mr-2 cursor-pointer">
              <Image
                src={"/crystal.jpg"}
                alt="brand"
                width={30}
                height={30}
                priority
                quality={100}
                className="rounded-md"
              />
            </Link>
            <Link href={"/"} className="cursor-pointer">
              <p className="font-bold text-background">CRYSTAL</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive={pathName === "/" ? true : false}>
            <Link className="" color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathName.startsWith("/rooms") ? true : false}>
            <Link className="" aria-current="page" href="/rooms">
              Rooms
            </Link>
          </NavbarItem>
          {isAdmin && (
            <>
              <NavbarItem
                isActive={pathName.startsWith("/admin") ? true : false}
              >
                <Link className="" color="foreground" href="/admin">
                  Admin Page
                </Link>
              </NavbarItem>
            </>
          )}
          <NavbarItem
            isActive={pathName.startsWith("/reservation") ? true : false}
          >
            <Link className="" color="foreground" href="/reservation">
              Reservation
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          {user ? (
            <>
              <UserButton />
            </>
          ) : (
            <>
              <NavbarItem className="hidden lg:flex">
                <Link className="" href="/sign-in">
                  Login
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Button
                  as={Link}
                  href="/sign-up"
                  variant="flat"
                  className="text-background bg-foreground/500 border-2 border-background"
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          )}
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden text-white p-1 rounded-md"
            />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              isActive={
                pathName.startsWith("/reservation")
                  ? true
                  : pathName.startsWith("/rooms")
                  ? true
                  : pathName === "/"
                  ? true
                  : false
              }
              key={`${item}-${index}`}
            >
              <Link
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="w-full"
                href={
                  item === "Home"
                    ? "/"
                    : item === "Rooms"
                    ? "/rooms"
                    : item === "Reservation"
                    ? "/reservation"
                    : ""
                }
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default Header;
