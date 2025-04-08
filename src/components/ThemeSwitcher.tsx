// app/components/ThemeSwitcher.tsx
"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { GrSystem } from "react-icons/gr";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <Dropdown className="min-w-max">
        <DropdownTrigger className="min-w-max">
          <Button
            variant="bordered"
            className="min-w-max text-background bg-background-500 border-2 border-background"
          >
            {theme === "light" ? (
              <MdOutlineLightMode />
            ) : theme === "dark" ? (
              <FiMoon />
            ) : (
              <GrSystem />
            )}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Static Actions"
        >
          <DropdownItem
            className=""
            onPress={() => setTheme("light")}
            key="light"
          >
            <MdOutlineLightMode className="inline-flex mr-4" />
            light Mode
          </DropdownItem>
          <DropdownItem
            className="inline-flex gap-2"
            onPress={() => setTheme("dark")}
            key="dark"
          >
            <FiMoon className="inline-flex mr-4" /> dark Mode
          </DropdownItem>
          <DropdownItem
            className="inline-flex gap-2"
            onPress={() => setTheme("system")}
            key="system"
          >
            <GrSystem className="inline-flex mr-4" /> system
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
