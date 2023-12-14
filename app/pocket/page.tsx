"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

export default function Pocket() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <main className="mx-auto lg:w-3/4 2xl:w-2/3 overflow-x-hidden">
        {/* ------------------------------------NAVBAR------------------------------------ */}
        <div className="mt-8 mx-4 lg:mx-0 p-4 flex justify-between grid-col-3 rounded-3xl bg-zinc-800">
          <Link
            href="/"
            className="pl-4 text-2xl text-zinc-100 hover:text-red-500 transition-colors font-semibold"
          >
            daniel <span className="text-red-500  pl-0.5"> j.</span>
          </Link>

          <div className="hidden lg:flex lg:justify-end">
            <Link
              href="#"
              className="pr-8 text-2xl text-zinc-100 hover:text-red-500 transition-colors  font-semibold"
            >
              works
            </Link>

            <Link
              href="#"
              className="pr-4 text-2xl text-zinc-100 hover:text-red-500 transition-colors  font-semibold"
            >
              contact
            </Link>
          </div>

          <motion.button
            onClick={toggleSidebar}
            className="flex justify-end pr-4 text-3xl lg:hidden"
            whileHover={{ rotate: "180deg" }}
            whileTap={{ scale: 0.9 }}
          >
            <HiMenu />
          </motion.button>
        </div>

        {/* ------------------------------------TOGGLE-MENU------------------------------------ */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 75,
                duration: 0.1,
              }}
              className="z-50 fixed rounded-3xl top-0 left-0 w-full h-full min-w-screen min-h-screen bg-zinc-800 flex flex-col items-start pl-10 pt-24 justify-start"
            >
              <button onClick={toggleSidebar} className="mb-4">
                <IoIosCloseCircle className="absolute top-8 right-8 text-6xl" />
              </button>
              <Link
                href="#"
                className="text-6xl py-4 text-zinc-100 transition-colors  font-bold"
              >
                works
              </Link>
              <Link
                href="#"
                className="text-6xl py-4 pb-10 text-zinc-100 transition-colors  font-bold"
              >
                contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
