"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { MdArrowCircleRight, MdArrowCircleLeft } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const testimonials = [
    {
      quote:
        "This is going to be a nice quote from Kevin. He works at Apple! Cool.",
      name: "Kevin Carney",
      position: "QA Engineer @ Apple",
    },
    {
      quote:
        "This is going to be a nice quote from Keegan. He works at PocketPR!",
      name: "Keegan Anglim",
      position: "CTO @ PocketPR",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (currentTestimonial - 1 + testimonials.length) % testimonials.length
    );
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
            daniel{" "}
            <span className="text-cyan-400 hover:text-cyan-400 pl-0.5">
              {" "}
              j.
            </span>
          </Link>
          <div className="hidden md:flex md:justify-end">
            <Link
              href="#"
              className="pr-8 text-2xl text-zinc-200 transition-colors hover:text-white font-semibold"
            >
              works
            </Link>
            <Link
              href="#"
              className="pr-4 text-2xl text-zinc-200 transition-colors hover:text-white font-semibold"
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
              works
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
              <span className="text-cyan-400">solution?</span>
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
              Got an <span className="text-cyan-400">idea?</span>
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
              Born & <span className="text-cyan-400">Based</span> in
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
            <div className="bg-zinc-900 rounded-3xl p-10 md:p-12">
              <div className="text-2xl text-start md:text-end md:text-4xl leading-tight font-extralight pb-4 text-zinc-400">
                I work with Typescript, React, Next, PostgreSQL & Tailwind CSS.{" "}
                <span className="text-cyan-400">
                  I love learning new languages.
                </span>{" "}
                Currently, I&apos;m studying Swift, Objective-C, Spanish &
                French.
              </div>
              <div className="text-3xl text-start md:text-end md:text-5xl leading-tight font-semibold text-zinc-200">
                Let&apos;s build robust & *accessible* solutions <br /> at the
                speed of light.
              </div>
            </div>
            {/*End About Card*/}
          </div>
        </div>

        {/* ------------------------------------TESTIMONIAL------------------------------------ */}
        <div className="py-2" />
        <div className="flex flex-col md:flex-row ">
          {/*Testimonial Card*/}
          <div className="px-4 md:px-0 w-full">
            <div className="p-10 md:p-12 w-full min-w-full rounded-3xl bg-zinc-900 flex flex-col items-center">
              <div className="flex flex-col-3">
                <div className="text-left">
                  <blockquote className="mt-2 text-zinc-200 font-semibold text-3xl md:text-4xl w-full">
                    {testimonials[currentTestimonial].quote}
                  </blockquote>
                  <div className="py-4" />
                  <div className="flex flex-col md:grid md:grid-cols-3">
                    <button
                      onClick={prevTestimonial}
                      className="hidden md:flex flex-col items-center justify-center text-6xl hover:text-cyan-600"
                    >
                      <MdArrowCircleLeft />
                    </button>
                    <div className="flex flex-row justify-center">
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
                          {testimonials[currentTestimonial].name}
                        </h2>
                        <div className="py-1" />
                        <p className="text-xl md:text-2xl text-zinc-400">
                          {testimonials[currentTestimonial].position}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={nextTestimonial}
                      className="hidden md:flex flex-col items-center justify-center text-6xl hover:text-cyan-600"
                    >
                      <MdArrowCircleRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row text-6xl md:hidden">
                <button onClick={prevTestimonial}>
                  <MdArrowCircleLeft className="pr-4" />
                </button>
                <button onClick={nextTestimonial}>
                  <MdArrowCircleRight className="pr-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="px-2 md:hidden" />

          {/*End Testimonial Card*/}
        </div>
        <div className="py-2" />

        {/* ------------------------------------PROJECTS------------------------------------ */}
        <div className="flex flex-col md:flex-row px-4 md:px-0">
          {/*PocketPR Card*/}
          <Link href="/">
            <div className="flex flex-col bg-zinc-900 hover:bg-zinc-800 rounded-3xl h-full p-12">
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <h1 className="text-zinc-200 font-semibold text-3xl md:text-4xl">
                    PocketPR
                  </h1>
                  <h2 className="font-ultralight text-xl md:text-2xl pt-2 pb-4 text-zinc-400">
                    Co-Founder & CEO
                  </h2>
                </div>
              </div>
              <Image
                height="250"
                width="500"
                alt="pocketpr screenshot"
                className="rounded-3xl"
                src="/pocketpr.png"
              />
            </div>
          </Link>
          {/*End PocketPR Card*/}
          <div className="px-2" />
          <div className="py-2 md:hidden" />
          {/*Projects & Blog Grid*/}
          <div className="grid grid-col md:grid-cols-2 gap-4 md:w-2/3">
            <Link href="/">
              <div className="bg-zinc-900 hover:bg-zinc-800 rounded-3xl h-full p-12">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1 className="text-zinc-200 font-semibold text-3xl md:text-4xl">
                      PocketPR
                    </h1>
                    <h2 className="font-ultralight text-xl md:text-2xl pt-2 pb-4 text-zinc-400">
                      Co-Founder & CEO
                    </h2>
                  </div>
                </div>
                <Image
                  height="250"
                  width="500"
                  alt="pocketpr screenshot"
                  className="rounded-3xl"
                  src="/pocketpr.png"
                />
              </div>
            </Link>
            <Link href="/">
              <div className="bg-zinc-900 hover:bg-zinc-800 rounded-3xl h-full p-12">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1 className="text-zinc-200 font-semibold text-3xl md:text-4xl">
                      PocketPR
                    </h1>
                    <h2 className="font-ultralight text-xl md:text-2xl pt-2 pb-4 text-zinc-400">
                      Co-Founder & CEO
                    </h2>
                  </div>
                </div>
                <Image
                  height="250"
                  width="500"
                  alt="pocketpr screenshot"
                  className="rounded-3xl"
                  src="/pocketpr.png"
                />
              </div>
            </Link>
            <Link href="/">
              <div className="bg-zinc-900 hover:bg-zinc-800 rounded-3xl h-full p-12">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1 className="text-zinc-200 font-semibold text-3xl md:text-4xl">
                      PocketPR
                    </h1>
                    <h2 className="font-ultralight text-xl md:text-2xl pt-2 pb-4 text-zinc-400">
                      Co-Founder & CEO
                    </h2>
                  </div>
                </div>
                <Image
                  height="250"
                  width="500"
                  alt="pocketpr screenshot"
                  className="rounded-3xl"
                  src="/pocketpr.png"
                />
              </div>
            </Link>
            <Link href="/">
              <div className="bg-zinc-900 hover:bg-zinc-800 rounded-3xl h-full p-12">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1 className="text-zinc-200 font-semibold text-3xl md:text-4xl">
                      PocketPR
                    </h1>
                    <h2 className="font-ultralight text-xl md:text-2xl pt-2 pb-4 text-zinc-400">
                      Co-Founder & CEO
                    </h2>
                  </div>
                </div>
                <Image
                  height="250"
                  width="500"
                  alt="pocketpr screenshot"
                  className="rounded-3xl"
                  src="/pocketpr.png"
                />
              </div>
            </Link>
          </div>
          {/*End Projects & Blog Grid Card*/}
        </div>
        <div className="py-2" />

        {/* ------------------------------------CONTACT-FORM------------------------------------ */}
        <div className="px-4 md:px-0">
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 text-xl md:text-3xl rounded-3xl bg-zinc-900">
            <div className="flex justify-start py-2 md:p-4 mx-auto font-semibold">
              Interested in working{" "}
              <span className="text-cyan-400 hover:text-cyan-400 pl-2">
                {" "}
                together?
              </span>
            </div>
            <Link
              href="mailto:recruitme@danielojohnson.com"
              className="flex justify-center text-xl md:text-3xl text-cyan-600 rounded-3xl py-4 px-8 hover:text-black bg-zinc-200 transition-colors font-semibold"
            >
              recruitme@danielojohnson.com
            </Link>
          </div>
        </div>
        <div className="py-2" />
        {/* ------------------------------------FOOTER------------------------------------ */}

        <div className="mx-4 lg:mx-0 p-4 flex justify-center rounded-3xl bg-zinc-900">
          <Link
            href="/"
            className="pl-4 text-2xl text-zinc-200 hover:text-white transition-colors font-semibold"
          >
            daniel{" "}
            <span className="text-cyan-500 hover:text-cyan-400 pl-0.5">
              {" "}
              j.
            </span>
          </Link>
        </div>
        <div className="py-2" />
      </main>
    </>
  );
}
