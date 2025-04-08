"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import toast from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";
import { Subscribe } from "@/app/api/Payment";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    if (!email) {
      toast.error("Kindly enter your email");
      return;
    }
    if (!email.includes("@")) {
      toast.error("An Invalid Email");
      return;
    }

    const result = await Subscribe(email);
    if (result) {
      toast.success("Subscribe Successfully");
    } else {
      toast.error("Already");
    }
  };
  return (
    <div>
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <strong className="block text-center text-xl font-bold text-white sm:text-2xl dark:text-white">
              Want us to mail you with our latest room update?
            </strong>
            <form
              className="mt-6"
              onSubmit={(e: React.FormEvent<Element>) => handleSubscribe(e)}
            >
              <div className="relative max-w-lg">
                <label className="sr-only">Email</label>
                <input
                  className="w-full rounded-full border-2 border-carton p-4 pe-32 text-sm font-medium text-default-800"
                  id="email"
                  type="email"
                  placeholder="john@doe.com"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-carton px-5 py-3 text-sm font-medium text-black transition hover:bg-carton-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <p className="mt-4 text-center text-gray-200 lg:text-left lg:text-lg dark:text-gray-400">
                Welcome to Crystal Hotel, your gateway to luxury and comfort.
                Explore our elegant rooms, world-class amenities, and seamless
                booking experience. Whether for business or leisure, we ensure a
                stay filled with relaxation and exceptional service.
              </p>
              <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                <Link href={"https://oluyemi.vercel.app"}>
                  <FaFacebookF color="white" size={25} />
                </Link>
                <Link href={"https://wa.me/2347042188482?text=Hello%20Oluyemi"}>
                  <FaWhatsapp color="white" size={25} />
                </Link>
                <Link href={"https://instagram.com/adedokunoluyemi"}>
                  <FaInstagram color="white" size={25} />
                </Link>
                <Link href={"https://x.com/AdedokunOluyem2"}>
                  <FaXTwitter color="white" size={25} />
                </Link>
                <Link href={"https://github.com/Oluyemi29?tab=repositories"}>
                  <FaGithub color="white" size={25} />
                </Link>
                <Link href={"https://oluyemi.vercel.app"}>
                  <TbWorld color="white" size={25} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
              <div>
                <strong className="font-medium text-white dark:text-white">
                  Services
                </strong>
                <ul className="mt-6 space-y-1">
                  <li>
                    <Link
                      className="text-gray-200 transition hover:text-gray-200/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-200 transition hover:text-gray-200/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Pool
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-200 transition hover:text-gray-200/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Spa
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-200 transition hover:text-gray-200/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Free Wifi
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <strong className="font-medium text-white dark:text-white">
                  About
                </strong>
                <ul className="mt-6 space-y-1">
                  <li>
                    <Link
                      className="text-gray-200 transition hover:text-gray-200/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-200 transition hover:text-gray-200/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      All Rooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-200 transition hover:text-gray-200/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      History
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-200 transition hover:text-gray-200/75 dark:text-white dark:hover:text-white/75"
                      href="https://oluyemi.vercel.app"
                    >
                      Our Team
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <strong className="font-medium text-white dark:text-white">
                  Support
                </strong>
                <ul className="mt-6 space-y-1">
                  <li>
                    <Link
                      className="text-gray-200 transition hover:text-gray-200/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-200 transition hover:text-gray-200/75 dark:text-white dark:hover:text-white/75"
                      href="https://oluyemi.vercel.app"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-200 transition hover:text-gray-200/75 dark:text-white dark:hover:text-white/75"
                      href="https://wa.me/2347042188482?text=Hello%20Oluyemi"
                    >
                      Live Chat
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800">
            <p className="text-center text-xs/relaxed text-gray-200 dark:text-gray-400">
              &copy; Devoluyemi 2025. All rights reserved.
              <br />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
