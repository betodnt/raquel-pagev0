"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ModalForm } from "@/app/pages/modalForm/page";
import { Spin as Hamburger } from "hamburger-react";
import {
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoMailOutline,
} from "react-icons/io5";

export const DropdownMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative sm:hidden">
      <Hamburger
        size={48}
        rounded
        hideOutline={false}
        color="#daa520"
        toggled={isMenuOpen}
        toggle={toggle}
      />
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 z-10"
            onClick={toggle}
          ></div>
          <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white shadow-lg flex flex-col gap-2 p-4 justify-center items-center z-20">
            <ul className="list-inside text-base">
              <li className="my-2">
                <Link
                  href="https://wa.me/5518991518387"
                  target="_blank"
                  passHref
                  className="flex items-center cursor-pointer"
                >
                  <IoLogoWhatsapp size={32} className="text-[#112d3b]" />
                  <span className="ml-1 md:ml-2">
                    <span className="hidden md:inline">WhatsApp: </span>(18)
                    99151-8387
                  </span>
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="https://www.instagram.com/raquelrgsmasson"
                  target="_blank"
                  passHref
                  className="flex items-center cursor-pointer"
                >
                  <IoLogoInstagram size={32} className="text-[#112d3b]" />
                  <span className="ml-1 md:ml-2">
                    <span className="hidden md:inline">Instagram: </span>
                    @raquelrgsmasson
                  </span>
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="mailto:?subject=Tenho uma dúvida&body=Corpo do e-mail"
                  target="_blank"
                  passHref
                  className="flex items-center cursor-pointer"
                >
                  <IoMailOutline size={32} className="text-[#112d3b]" />
                  <span className="ml-1 md:ml-2">
                    <span className="hidden md:inline">E-mail: </span>
                    contato@raquelrgsmasson.com.br
                  </span>
                </Link>
              </li>
              <li className="mt-8 mb-2 text-center">
                <ModalForm />
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
