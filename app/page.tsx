"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <main className="mx-auto lg:w-2/3">
        <div>
          <div className="mt-8 mx-4 p-4 flex justify-between grid-col-3 rounded-full bg-zinc-900">
            <Link href="/" className="pl-4 text-xl font-bold">
              daniel j
            </Link>
            <div className="hidden md:flex md:justify-end">
              <Link href="#" className="px-12 text-xl font-bold">
                projects
              </Link>
              <Link href="#" className="pr-4 text-xl font-bold">
                contact
              </Link>
            </div>
            <button
              onClick={toggleSidebar}
              className="flex justify-end pr-4 text-3xl md:hidden"
            >
              <HiMenu />
            </button>
          </div>
        </div>
        {isSidebarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-zinc-900 flex flex-col items-start pl-10 justify-end">
            <button onClick={toggleSidebar} className="mb-4">
              <IoIosCloseCircle className="absolute top-8 right-8 text-6xl" />
            </button>
            <Link href="#" className="text-6xl py-4 font-bold">
              home
            </Link>
            <Link href="#" className="text-6xl py-4 font-bold">
              projects
            </Link>
            <Link href="#" className="text-6xl py-4 pb-10 font-bold">
              contact
            </Link>
          </div>
        )}
        <div className="flex-col md:flex-col-2"></div>
      </main>
    </>
  );
}
