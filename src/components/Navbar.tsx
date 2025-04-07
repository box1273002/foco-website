"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";

function useNavSelection(navigation: string[], pathname: string): [string, (item: string) => void] {
  const getSelectedFromPath = (path: string | undefined): string => {
    const normPath = path?.replace("/", "").toLowerCase() || "";
    if (!normPath) return "";
    const matchedItem = navigation.find(item => item.toLowerCase() === normPath);
    return matchedItem || "";
  };

  // Initialize state using the pathname to find the selected item
  const [selected, setSelected] = useState<string>(() => getSelectedFromPath(pathname));

  // Function to set the selected nav item
  const selectNavItem = (item: string) => {
    setSelected(item || ""); // Fallback to an empty string if the item is falsy
  };

  return [selected, selectNavItem];
}


// Helper function to get menu styling
const getMenuStyle = (isSelected: Boolean) => {
  if (!isSelected) return "text-gray-200";
  return "text-purple-400 underline underline-offset-4 filter drop-shadow-[0_0_30px_rgba(153,209,250,1)]";
};

export const Navbar = () => {
  const navigation = ["Product", "Features", "Pricing", "Company"];
  const pathname = usePathname(); // Get current path with Next.js hook

  // Initialize selected state based on current path (server and client compatible)
  const [selected, selectNavItem] = useNavSelection(navigation, pathname);

  return (
    <div className="w-full sticky top-2 flex justify-center items-center px-4 my-4 z-10 overflow-hidden">
      <nav className="container   bg-trueGray-800 bg-opacity-60 rounded-xl backdrop-blur-lg shadow-lg flex flex-wrap items-center justify-between py-4 px-5 lg:justify-between xl:px-4 2xl:px-4 overflow-hidden">
        {/* Logo */}
        <Link href="/" onClick={() => selectNavItem("")}>
          <span className={`flex items-center space-x-2 text-2xl font-medium ${pathname === "/" ? "filter drop-shadow-[0_0_15px_rgba(185,163,186,0.8)]" : ""
            }`}>
            <Image
              src="/img/logo.png"
              width="40"
              height="40"
              alt="FOCO"
              className="w-10"
            />
            <span className="text-white">FOCO</span>
          </span>
        </Link>

        {/* Theme and Get Started */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1  rounded-md lg:hidden hover:text-indigo-500 text-gray-300 ">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              {/* Animated Panel */}
              <Transition
                show={open}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 transform scale-95"
                enterTo="opacity-100 transform scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 transform scale-100"
                leaveTo="opacity-0 transform scale-95"
              >
                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  {navigation.map((menu, index) => (
                    <Link
                      key={index}
                      href={`/${menu.toLowerCase()}`}
                      onClick={() => selectNavItem(menu)}
                      className={`inline-block px-4 w-full py-2 text-lg font-normal no-underline rounded-md ${getMenuStyle(selected === menu)}`}>
                      {menu}
                    </Link>
                  ))}
                  <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                    Get Started
                  </Link>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        {/* Desktop Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={`/${menu.toLowerCase()}`}
                  onClick={() => selectNavItem(menu)}
                  className={`inline-block px-4 py-2 text-lg font-normal no-underline rounded-md ${getMenuStyle(selected === menu)}`}>
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
