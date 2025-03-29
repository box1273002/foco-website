"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";

function useNavSelection(navigation, pathname) {
    const getSelectedFromPath = (path) => {
        const normPath = path?.replace("/", "").toLowerCase() || "";
        if (!normPath) return "";
        const matchedItem = navigation.find(item => item.toLowerCase() === normPath);
        return matchedItem || "";
    };

    const [selected, setSelected] = useState(() => getSelectedFromPath(pathname));

    const selectNavItem = (item) => {
        setSelected(item || "");
    };

    return [selected, selectNavItem];
}

export const Navbar = () => {
    const navigation = ["Product", "Features", "Pricing", "Company"];
    const pathname = usePathname(); // Get current path with Next.js hook

    // Initialize selected state based on current path (server and client compatible)
    const [selected, selectNavItem] = useNavSelection(navigation, pathname);

    return (
        <div className="w-full sticky top-2 flex justify-center items-center px-4 my-4 z-10 overflow-hidden">
            <nav className="container bg-indigo-200 bg-opacity-50 dark:bg-trueGray-800 dark:bg-opacity-60 rounded-xl backdrop-blur-lg shadow-lg flex flex-wrap items-center justify-between py-4 px-5 lg:justify-between xl:px-4 2xl:px-4">
                {/* Logo */}
                <Link href="/" onClick={() => selectNavItem("")}>
                    <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                        <Image
                            src="/img/logo.svg"
                            width="32"
                            height="32"
                            alt="N"
                            className="w-8"
                        />
                        <span>Nextly</span>
                    </span>
                </Link>

                {/* Theme and Get Started */}
                <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
                    <ThemeChanger />
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
                                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 dark:text-gray-300 ">
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
                                    {navigation.map((item, index) => (
                                        <Link
                                            key={index}
                                            href="/"
                                            onClick={() => selectNavItem(item)}
                                            className={`w-full px-4 py-2 -ml-4 rounded-md text-gray-500 dark:text-gray-300 hover:text-indigo-500`}>
                                            {item}
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
                                    className={`inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 ${selected === menu
                                        ? "shadow-[0px_0px_135px_0px_rgba(68,17,95,1)] dark:shadow-[0px_0px_135px_0px_rgba(185,163,186,1)]"
                                        : ""
                                        }`}>
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
