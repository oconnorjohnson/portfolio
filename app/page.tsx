"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <main className="mx-auto lg:w-3/4 2xl:w-2/3">
        {/* ------------------------------------NAVBAR------------------------------------ */}
        <div className="mt-8 mx-4 lg:mx-0 p-4 flex justify-between grid-col-3 rounded-3xl bg-zinc-900">
          <Link
            href="/"
            className="pl-4 text-2xl text-zinc-200 hover:text-white transition-colors font-semibold"
          >
            daniel <span className="text-red-600 hover:text-red-400">j.</span>
          </Link>
          <div className="hidden md:flex md:justify-end">
            <Link
              href="#"
              className="pr-2 text-2xl text-zinc-200 transition-colors hover:text-white font-semibold"
            >
              projects
            </Link>
            <Link
              href="#"
              className="px-10 text-2xl text-zinc-200 transition-colors hover:text-white font-semibold"
            >
              blog
            </Link>
            <Link
              href="#"
              className="pr-8 text-2xl text-zinc-200 transition-colors hover:text-white font-semibold"
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

        {/* ------------------------------------TOGGLE-MENU------------------------------------ */}
        {isSidebarOpen && (
          <div className="fixed rounded-3xl top-0 left-0 w-full h-full bg-zinc-900 flex flex-col items-start pl-10 justify-end">
            <button onClick={toggleSidebar} className="mb-4">
              <IoIosCloseCircle className="absolute top-8 right-8 text-6xl" />
            </button>
            <Link
              href="#"
              className="text-6xl py-4 text-zinc-200 transition-colors hover:text-white font-bold"
            >
              projects
            </Link>
            <Link
              href="#"
              className="text-6xl py-4 text-zinc-200 transition-colors hover:text-white font-bold"
            >
              blog
            </Link>
            <Link
              href="#"
              className="text-6xl py-4 pb-10 text-zinc-200 transition-colors hover:text-white font-bold"
            >
              contact
            </Link>
          </div>
        )}

        {/* ------------------------------------HERO------------------------------------ */}
        <div className="md:flex md:flex-row md:justify-between px-4 md:px-0">
          {/*Hero Card*/}
          <div className="bg-zinc-900 my-4 flex flex-col justify-between rounded-3xl md:w-2/3 p-10 md:px-16 md:py-20">
            <div className="text-4xl md:text-6xl leading-tight font-extralight pb-4 text-zinc-400">
              Are you looking for a{" "}
              <span className="text-red-600">solution?</span>
            </div>
            <div className="text-6xl md:text-7xl leading-tight font-bold text-zinc-200">
              <span className="font-extralight text-zinc-400">Well, </span>
              I&apos;m a full-stack problem-solver.
            </div>
          </div>
          {/*End Hero Card*/}
          <div className="px-2" />
          {/*Get In Touch Card*/}
          <div className="bg-zinc-900 my-4 text-center rounded-3xl md:w-1/3 p-10 md:p-24">
            <div className="text-4xl md:text-5xl leading-tight font-extralight pb-6 pt-2 text-zinc-400">
              Got an <span className="text-red-600">idea?</span>
            </div>
            <div className="py-1" />
            <button className="text-3xl md:text-4xl bg-zinc-200 transition-colors hover:bg-white py-8 px-10 rounded-3xl leading-tight font-bold text-zinc-900">
              Get In Touch
            </button>
          </div>
          {/*End Get In Touch Card*/}
        </div>

        {/* ------------------------------------ABOUT------------------------------------ */}
        <div className="md:flex md:flex-row md:justify-between px-4 md:px-0">
          {/*Born and Based Card*/}
          <div className="bg-zinc-900 text-center flex flex-col justify-center rounded-3xl md:w-1/3 p-10 md:p-12">
            <div className="text-3xl md:text-4xl leading-tight font-extralight pb-6 text-zinc-400">
              Born & Based in
            </div>
            <div className="py-1" />
            <div className="text-3xl md:text-4xl bg-zinc-200 py-8 px-10 rounded-3xl leading-tight font-bold text-zinc-900">
              The Bay Area
            </div>
          </div>
          {/*End Born and Based Card*/}
          <div className="p-2" />
          <div className="flex flex-col md:w-2/3">
            <div className="flex flex-row justify-between md:px-0">
              {/*LinkedIn Card*/}
              <Link
                href="https://www.linkedin.com/in/oconnorjohnson"
                className="bg-zinc-900 transition-colors hover:bg-zinc-800 flex flex-row justify-center text-center px-4 sm:px-10 md:px-24 text-2xl font-extralight text-zinc-200 rounded-3xl py-6 w-full"
              >
                <FaLinkedin className="pr-2 text-3xl" />
                <div>LinkedIn</div>
              </Link>
              {/*End LinkedIn Card*/}
              <div className="px-2" />
              {/*Github Card*/}
              <Link
                href="https://www.github.com/oconnorjohnson"
                className="bg-zinc-900 flex flex-row justify-center transition-colors hover:bg-zinc-800 text-center px-4 sm:px-10 md:px-24 text-2xl font-extralight text-zinc-200 rounded-3xl py-6 w-full"
              >
                <FaGithubSquare className="pr-2 text-3xl" />
                <div>Github</div>
              </Link>
              {/*End Github Card*/}
            </div>
            <div className="py-2" />
            {/*About Card*/}
            <div className="bg-zinc-900 rounded-3xl p-10 md:p-10">
              <div className="text-2xl text-end md:text-3xl leading-tight font-extralight pb-4 text-zinc-400">
                I currently work with Typescript, React, Next, PostgreSQL &
                Tailwind CSS. However, more than anything,{" "}
                <span className="text-red-600">
                  I love learning new languages.{" "}
                </span>{" "}
                Right now, I&apos;m studying Swift, Objective-C, Spanish &
                French.
              </div>
              <div className="text-3xl text-end md:text-4xl leading-tight font-semibold text-zinc-200">
                Let&apos;s build robust and *accessible* solutions at the speed
                of light.
              </div>
            </div>
            {/*End About Card*/}
          </div>
        </div>

        {/* ------------------------------------TESTIMONIAL------------------------------------ */}
        <div className="py-2" />
        <div className="flex flex-row">
          {/*Testimonial Card*/}
          <div className="px-2 md:hidden" />
          <div className="p-6 md:p-12 mx-auto w-full rounded-3xl bg-zinc-900 flex items-center">
            <div className="flex flex-col-3">
              {/* <div className="flex flex-col justify-center">
              <MdArrowBackIos />
            </div>
            <div className="px-6" /> */}
              <div className="text-left">
                <blockquote className="mt-2 text-zinc-200 font-semibold text-3xl md:text-4xl">
                  &quot;This is going to be a nice quote from Kevin. He works at
                  Apple! Cool.&quot;
                </blockquote>
                <div className="py-4" />
                <div className="flex flex-row">
                  <div className="flex flex-col justify-center">
                    <div className="h-14 w-14 mr-4">
                      <Image
                        height="100"
                        width="100"
                        alt="User avatar"
                        src="/avatar.png"
                      />
                    </div>
                  </div>
                  <div className="px-2" />
                  <div className="flex flex-col">
                    <h2 className="text-2xl md:text-3xl text-zinc-200">
                      Kevin Carney
                    </h2>
                    <div className="py-1" />
                    <p className="text-xl md:text-2xl text-zinc-400">
                      QA Engineer @{" "}
                      <span className="text-red-600">Apple, Inc.</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="px-6" />
            <div className="flex flex-col justify-center">
              <MdArrowForwardIos />
            </div> */}
            </div>
          </div>
          <div className="px-2 md:hidden" />
          {/*Testimonial Card*/}
        </div>
        <div className="py-2" />

        {/* ------------------------------------PROJECTS------------------------------------ */}

        {/* ------------------------------------BLOG-CAROUSEL------------------------------------ */}

        {/* ------------------------------------CONTACT-FORM------------------------------------ */}
      </main>
    </>
  );
}
