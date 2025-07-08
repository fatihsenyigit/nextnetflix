"use client";

import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {

  const currentUser = {displayName: 'fatih senyigit'}
  const [showBG, setShowBG] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const topOffSet = 60; 
      if(window.scrollY >= topOffSet) {
        setShowBG(true)
      } else {
        setShowBG(false);
      }
    }

    window.addEventListener('scroll', handleScroll)
  
    return () => { 
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  

  return (
    <Disclosure as="nav" className="text-white fixed top-0 z-20 w-full">
      <div
        className={`px-4 md:px-16 py-6 transition duration-500 ${
          showBG ? " bg-zinc-900 bg-opacity-75" : ""
        }`}
      >
        <div className="relative flex h-16 items-center justify-between">
          <Link href="/">
            <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
          </Link>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {currentUser && (
              <h5 className="mr-2 capitalize">{currentUser?.displayName}</h5>
            )}
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="user"
                    src={currentUser?.photoURL || "/images/default-slate.png"}
                    className="size-8 rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <Link
                    href="/register"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Register
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Login
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <span className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden cursor-pointer">
                    Log out
                  </span>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
