// components/Footer.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import logo from "@/public/conacylogo.svg";
import {
  faTwitter,
  faFacebook,
  faPinterest,
  faGithub,
  faWhatsapp,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { Potta_One } from "next/font/google";
library.add(
  faTwitter,
  faFacebook,
  faPinterest,
  faGithub,
  faWhatsapp,
  faInstagram,
  faHouse,
  faUser,
  faXTwitter
);
const pottaone = Potta_One({ weight: ["400"], subsets: ["latin-ext"] });

const Footer = () => {
  return (
    <footer className="text-gray-900 bg-gray-300 dark:bg-black dark:text-gray-300 py-12">
      <div className="container flex flex-wrap justify-between items-start px-5">
      <div className="w-full md:w-2/5 p-5 md:pb-0 flex flex-col items-center">
          <div className="flex">
            <Image src={logo} alt="" className="h-16 w-16"></Image>
            <span className={pottaone.className + " text-5xl"}>onacy</span>
          </div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <ul className="flex space-x-4 dark:text-gray-300 text-gray-900">
            <li>
              <a href="#" className=" hover:text-white">
                <FontAwesomeIcon icon={faFacebook} className="h-5" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faXTwitter} className="h-5" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faInstagram} className="h-5" />
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="w-full md:w-1/5 mb-8 md:mb-0 p-5 md:pb-0">
          <h2 className="text-lg font-semibold mb-4">About Conacy</h2>
          <p className="text-sm">
            Conacy prioritizes your privacy. Customize your social experience
            with our visibility settings.
          </p>
        </div> */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0 p-5">
          <h2 className="text-lg font-semibold mb-4 md:pb-0">Quick Links</h2>
          <ul className="text-sm">
            <li className="mb-2">
              <Link href="/">Home</Link>
            </li>
            <li className="mb-2">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="mb-2">
              <Link href="/login">Login</Link>
            </li>
            <li className="mb-2">
              <Link href="/register">Register</Link>
            </li>
            <li className="mb-2">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0 p-5 md:pb-0">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <ul className="text-sm">
            <li className="mb-2">Email: info@conacy.com</li>
            <li className="mb-2">Phone: +1234567890</li>
            <li className="mb-2">Address: 123 Conacy St, City, Country</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Conacy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
