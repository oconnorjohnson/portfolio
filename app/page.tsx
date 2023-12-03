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
        <div className="mt-8 mx-4 lg:mx-0 p-4 flex justify-between grid-col-3 rounded-3xl bg-zinc-900">
          <Link href="/" className="pl-4 text-xl text-zinc-200 font-bold">
            daniel j.
          </Link>
          <div className="hidden md:flex md:justify-end">
            <Link href="#" className="px-10 text-xl text-zinc-200 font-bold">
              projects
            </Link>
            <Link href="#" className="pr-8 text-xl text-zinc-200 font-bold">
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

        {isSidebarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-zinc-900 flex flex-col items-start pl-10 justify-end">
            <button onClick={toggleSidebar} className="mb-4">
              <IoIosCloseCircle className="absolute top-8 right-8 text-6xl" />
            </button>
            <Link href="#" className="text-6xl py-4 text-zinc-200 font-bold">
              home
            </Link>
            <Link href="#" className="text-6xl py-4 text-zinc-200 font-bold">
              projects
            </Link>
            <Link
              href="#"
              className="text-6xl py-4 pb-10 text-zinc-200 font-bold"
            >
              contact
            </Link>
          </div>
        )}
        <div className="md:flex md:flex-row md:justify-between px-4 md:px-0">
          <div className="bg-zinc-900 my-4 rounded-3xl md:w-2/3 p-10 md:p-12">
            <div className="text-4xl md:text-5xl leading-tight font-extralight pb-4 text-zinc-200">
              Are you looking for a solution?
            </div>
            <div className="text-5xl md:text-6xl leading-tight font-semibold text-zinc-200">
              Well, I&apos;m a full-stack problem-solver.
            </div>
          </div>
          <div className="px-2" />
          <div className="bg-zinc-900 my-4 text-center rounded-3xl md:w-1/3 p-10 md:p-12">
            <div className="text-4xl md:text-5xl leading-tight font-extralight pb-6 pt-2 text-zinc-200">
              Got an idea?
            </div>
            <div className="py-1" />
            <div className="text-3xl md:text-4xl bg-zinc-200 py-8 px-4 rounded-3xl leading-tight font-semibold text-zinc-900">
              Get in touch.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
