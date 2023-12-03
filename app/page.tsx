"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <main className="mx-auto lg:w-2/3">
        {/* ------------------------------------NAVBAR------------------------------------ */}
        <div className="mt-8 mx-4 lg:mx-0 p-4 flex justify-between grid-col-3 rounded-3xl bg-zinc-900">
          <Link href="/" className="pl-4 text-2xl text-zinc-200 font-semibold">
            daniel j.
          </Link>
          <div className="hidden md:flex md:justify-end">
            <Link
              href="#"
              className="px-10 text-2xl text-zinc-200 font-semibold"
            >
              projects
            </Link>
            <Link
              href="#"
              className="pr-8 text-2xl text-zinc-200 font-semibold"
            >
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

        {/* ------------------------------------TOGGLE MENU------------------------------------ */}
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

        {/* ------------------------------------HERO------------------------------------ */}
        <div className="md:flex md:flex-row md:justify-between px-4 md:px-0">
          <div className="bg-zinc-900 my-4 rounded-3xl md:w-2/3 p-10 md:p-12">
            <div className="text-4xl md:text-5xl leading-tight font-extralight pb-4 text-zinc-200">
              Are you looking for a solution?
            </div>
            <div className="text-5xl md:text-6xl leading-tight font-bold text-zinc-200">
              Well, I&apos;m a full-stack problem-solver.
            </div>
          </div>
          <div className="px-2" />
          <div className="bg-zinc-900 my-4 text-center rounded-3xl md:w-1/3 p-10 md:p-12">
            <div className="text-4xl md:text-5xl leading-tight font-extralight pb-6 pt-2 text-zinc-200">
              Got an idea?
            </div>
            <div className="py-1" />
            <button className="text-3xl md:text-4xl bg-zinc-200 py-8 px-10 rounded-3xl leading-tight font-bold text-zinc-900">
              Get in touch.
            </button>
          </div>
        </div>

        {/* ------------------------------------SOCIALS------------------------------------ */}
        <div className="md:flex md:flex-row md:justify-between px-4 md:px-0">
          <div className="flex flex-row justify-center text-2xl font-extralight text-zinc-200 bg-zinc-900 rounded-3xl py-6 w-full">
            <FaLinkedin className="pr-2 text-3xl" />
            <div>LinkedIn</div>
          </div>
          <div className="py-2 px-0 md:py-0 md:px-2" />
          <div className="flex flex-row justify-center text-2xl font-extralight text-zinc-200 bg-zinc-900 rounded-3xl py-6 w-full">
            <FaGithubSquare className="pr-2 text-3xl" />
            <div>Github</div>
          </div>
          <div className="py-2 px-0 md:py-0 md:px-2" />
          <div className="flex flex-row justify-center text-2xl font-extralight text-zinc-200 bg-zinc-900 rounded-3xl py-6 w-full">
            <FaTwitter className="pr-2 text-3xl" />
            <div>Twitter</div>
          </div>
        </div>

        {/* ------------------------------------ABOUT------------------------------------ */}
        <div className="md:flex md:flex-row md:justify-between px-4 md:px-0">
          <div className="bg-zinc-900 my-4 text-center rounded-3xl md:w-1/3 p-10 md:p-12">
            <div className="text-3xl md:text-4xl leading-tight font-extralight pb-6 pt-2 text-zinc-200">
              Born & Based in
            </div>
            <div className="py-1" />
            <button className="text-3xl md:text-4xl bg-zinc-200 py-8 px-10 rounded-3xl leading-tight font-bold text-zinc-900">
              The Bay Area.
            </button>
          </div>
          <div className="px-2" />
          <div className="bg-zinc-900 my-4 rounded-3xl md:w-2/3 p-10 md:p-12">
            <div className="text-3xl text-end md:text-4xl leading-tight font-extralight pb-4 text-zinc-200">
              I work with Typescript, React, Next, PostgreSQL & TailwindCSS.
            </div>
            <div className="text-4xl text-end md:text-5xl leading-tight font-semibold text-zinc-200">
              Let&apos;s build *accessible* solutions at the speed of light.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
