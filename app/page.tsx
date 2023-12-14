"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { MdArrowCircleRight, MdArrowCircleLeft } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Image from "next/legacy/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const sidebar = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  const testimonials = [
    {
      quote:
        "This is going to be a nice quote from Kevin. He works at Apple! Cool.",
      name: "Kevin Carney",
      position: "QA Engineer",
      company: "Apple, Inc.",
    },
    {
      quote:
        "I highly value Daniel's planning & engineering abilities. He's fun to work with & moves fluidly across the tech stack!",
      name: "Keegan Anglim",
      position: "Co-Founder & CTO",
      company: "PocketPR",
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
        {/* ------------------------------------HERO------------------------------------ */}
        <div className="lg:flex lg:flex-row lg:justify-between px-4 lg:px-0">
          {/*Hero Card*/}
          <div className="bg-zinc-800 my-4 flex flex-col justify-between rounded-3xl lg:w-2/3 p-10 lg:px-16 lg:py-20">
            <div className="text-3xl lg:text-4xl xl:text-5xl pb-6 sm:pb-8 xl:pb-0 text-start sm:text-center lg:text-start font-extralight text-zinc-300">
              Looking for a <span className="text-red-500">solution?</span>
            </div>
            <div className="text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl text-start sm:text-center lg:text-start font-bold text-zinc-100">
              I&apos;m a full-stack{" "}
              <span className="text-red-500">problem-solver.</span>
            </div>
          </div>
          {/*End Hero Card*/}
          <div className="px-2" />
          {/*Get In Touch Card*/}
          <div className="bg-zinc-800 my-4 flex flex-col justify-around items-center rounded-3xl lg:w-1/3 px-10 pt-10 lg:pt-20 xl:p-24">
            <div className="text-3xl lg:text-4xl xl:text-5xl text-center  font-extralight  text-zinc-300">
              Got a <span className="text-red-500">problem?</span>
            </div>
            <motion.div whileHover={{ scale: 0.9 }}>
              <button className="text-3xl lg:text-4xl xl:text-5xl bg-zinc-100 my-10 transition-colors p-8 rounded-3xl  font-bold text-zinc-800">
                Get In Touch
              </button>
            </motion.div>
          </div>

          {/*End Get In Touch Card*/}
        </div>

        {/* ------------------------------------ABOUT------------------------------------ */}
        <div className="lg:flex lg:flex-row lg:justify-between px-4 lg:px-0">
          {/*Born and Based Card*/}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{
              ease: "easeIn",
              type: "spring",
              duration: 0.8,
            }}
            className="hidden lg:flex bg-zinc-800 items-center text-center flex-col justify-center rounded-3xl lg:w-1/3 p-10 lg:p-12"
          >
            <div className="text-4xl lg:text-5xl leading-tight font-extralight  text-zinc-300">
              Born, Raised & <span className="text-red-500">Based</span> in
            </div>
            <div className="py-8" />
            <div className="text-5xl lg:text-6xl flex text-center px-10 leading-tight font-bold text-zinc-100">
              The Bay Area
            </div>
          </motion.div>
          {/*End Born and Based Card*/}
          <div className="hidden lg:block p-2" />
          <div className="flex flex-col lg:w-2/3">
            <div className="flex flex-row lg:px-0">
              {/*LinkedIn Card*/}

              <motion.div
                initial={{ opacity: 0, y: "10%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "all" }}
                transition={{
                  ease: "easeIn",
                  type: "spring",
                  duration: 0.8,
                }}
                className="bg-zinc-800 transition-colors flex items-center justify-center py-4 sm:py-6 md:py-8 lg:py-10 text-2xl font-bold rounded-3xl w-full"
              >
                <motion.div whileHover={{ scale: 0.9 }}>
                  <Link
                    href="https://www.linkedin.com/in/oconnorjohnson"
                    className="flex flex-row justify-center text-center px-3 sm:px-4 text-xl lg:text-2xl font-extralight text-zinc-800 rounded-3xl py-5 bg-zinc-100"
                  >
                    <FaLinkedin className="hidden sm:block pr-1 sm:pr-2 text-3xl" />
                    <div className="pt-0 lg:pt-0">LinkedIn</div>
                  </Link>
                </motion.div>
              </motion.div>

              {/*End LinkedIn Card*/}
              <div className="px-2" />
              {/*Github Card*/}
              <motion.div
                initial={{ opacity: 0, y: "10%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "all" }}
                transition={{
                  ease: "easeIn",
                  type: "spring",
                  duration: 0.8,
                }}
                className="bg-zinc-800 transition-colors flex items-center justify-center py-5 sm:py-6 md:py-8 lg:py-10 text-2xl font-bold rounded-3xl w-full"
              >
                <motion.div whileHover={{ scale: 0.9 }}>
                  <Link
                    href="https://www.github.com/oconnorjohnson"
                    className="flex flex-row justify-center text-center px-3 sm:px-4  text-xl lg:text-2xl font-extralight text-zinc-800 rounded-3xl py-5 bg-zinc-100"
                  >
                    <FaGithubSquare className="hidden sm:block pr-1 sm:pr-2 text-3xl" />
                    <div className="pt-0 lg:pt-0">Github</div>
                  </Link>
                </motion.div>
              </motion.div>

              {/*End Github Card*/}
            </div>
            <div className="py-2 lg:hidden" />
            {/*Born and Based Card*/}
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "all" }}
              transition={{
                ease: "easeIn",
                type: "spring",
                duration: 0.8,
              }}
              className="flex bg-zinc-800 text-center flex-col justify-center rounded-3xl lg:w-1/3 p-10 lg:p-12 lg:hidden"
            >
              <div className="text-3xl lg:text-4xl leading-tight font-extralight pb-6 text-zinc-300">
                Born, Raised & <span className="text-red-500">Based</span> in
              </div>
              <div className="py-1" />
              <div className="text-3xl lg:text-4xl px-10 rounded-3xl leading-tight font-bold text-zinc-100">
                The Bay Area
              </div>
            </motion.div>
            {/*End Born and Based Card*/}
            <div className="py-2" />
            {/*About Card*/}
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "all" }}
              transition={{
                ease: "easeIn",
                type: "spring",
                duration: 0.8,
              }}
              className="bg-zinc-800 rounded-3xl p-10 lg:p-12"
            >
              <div className="text-xl sm:text-2xl text-start sm:text-center lg:text-end lg:text-4xl leading-tight font-extralight pb-4 text-zinc-300">
                I work with Typescript, React, Next, SQL & Tailwind.{" "}
                <span className="text-red-500">
                  I love learning new languages.
                </span>{" "}
                Currently, I&apos;m studying Swift & Spanish.
              </div>
              <div className="text-2xl sm:text-3xl text-start sm:text-center lg:text-end lg:text-5xl leading-tight font-semibold text-zinc-100">
                Let&apos;s build robust & accessible solutions at the speed of
                light.
              </div>
            </motion.div>
            {/*End About Card*/}
          </div>
        </div>

        {/* ------------------------------------TESTIMONIAL------------------------------------ */}
        <div className="py-2" />
        <div className="flex flex-col lg:flex-row ">
          {/*Testimonial Card*/}
          <div className="px-4 lg:px-0 w-full">
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "all" }}
              transition={{
                ease: "easeIn",
                type: "spring",
                duration: 0.8,
              }}
              className="py-8 px-4 lg:p-12 w-full min-w-full rounded-3xl bg-zinc-800 flex flex-col items-center"
            >
              <div className="relative w-full flex items-center justify-between">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <button
                    className="text-6xl text-zinc-100  transition-colors"
                    aria-label="Previous quote"
                    onClick={prevTestimonial}
                  >
                    <MdArrowCircleLeft />
                  </button>
                </motion.div>
                <div className="flex flex-col justify-center items-center px-2 lg:px-4">
                  <AnimatePresence mode="wait">
                    <motion.blockquote
                      key={currentTestimonial}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className="text-xl sm:text-3xl lg:text-4xl text-center font-semibold leading-snug"
                    >
                      {testimonials[currentTestimonial].quote}
                    </motion.blockquote>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className="pt-2 lg:pt-6 flex text-center"
                    >
                      <div className="">
                        <h4 className="text-lg sm:text-xl md:text-2xl text-zinc-100">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <h4 className="text-sm sm:text-md md:text-lg text-zinc-300">
                          {testimonials[currentTestimonial].position}
                        </h4>
                        <p className="text-md sm:text-lg md:text-xl text-red-500">
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <button
                    className="text-6xl text-zinc-100  transition-colors"
                    aria-label="Next quote"
                    onClick={nextTestimonial}
                  >
                    <MdArrowCircleRight />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="px-2 lg:hidden" />

          {/*End Testimonial Card*/}
        </div>
        <div className="py-2" />

        {/* ------------------------------------PROJECTS------------------------------------ */}
        <div className="flex flex-col px-4 lg:px-0 w-full">
          {/*PocketPR Card*/}
          <Link href="/projects/pocket">
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{
                ease: "easeIn",
                type: "spring",
                duration: 0.8,
              }}
              whileHover={{ scale: 0.9 }}
              className="flex flex-col bg-zinc-800 hover:bg-zinc-800 rounded-3xl h-full p-12"
            >
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <h1 className="text-zinc-100 font-semibold text-3xl lg:text-4xl">
                    PocketPR
                  </h1>
                  <h2 className="font-ultralight text-xl lg:text-2xl pt-2 pb-4 text-zinc-300">
                    Co-Founder & CEO
                  </h2>
                </div>
              </div>
              <Image
                src="/pocketpr.png"
                width="2000"
                height="1250"
                alt="pocketpr screenshot"
                className="rounded-3xl object-cover"
              />
            </motion.div>
          </Link>
          {/*End PocketPR Card*/}
          <div className="py-2" />
          {/*Projects & Blog Grid*/}
          <div className="grid grid-col xl:grid-cols-2 gap-4 lg:w-full">
            <Link href="/blogs/llm">
              <motion.div
                initial={{ opacity: 0, y: "10%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "all" }}
                transition={{
                  ease: "easeIn",
                  type: "spring",
                  duration: 0.8,
                }}
                whileHover={{ scale: 0.9 }}
                className="bg-zinc-800 hover:bg-zinc-800 rounded-3xl h-full p-12"
              >
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1 className="text-zinc-100 font-semibold text-3xl lg:text-4xl">
                      LLM Armies
                    </h1>
                    <h2 className="font-ultralight text-xl lg:text-2xl pt-2 pb-4 text-zinc-300">
                      My first blog post!
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    alt="pocketpr screenshot"
                    className="rounded-xl"
                    src="/systems.png"
                    width="2000"
                    height="1250"
                  />
                </div>
              </motion.div>
            </Link>
            <Link href="/projects/cares">
              <motion.div
                initial={{ opacity: 0, y: "-10%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "all" }}
                transition={{
                  ease: "easeIn",
                  type: "spring",
                  duration: 0.8,
                }}
                whileHover={{ scale: 0.9 }}
                className="bg-zinc-800 hover:bg-zinc-800 rounded-3xl h-full p-12"
              >
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1 className="text-zinc-100 font-semibold text-3xl lg:text-4xl">
                      CARES
                    </h1>
                    <h2 className="font-ultralight text-xl lg:text-2xl pt-2 pb-4 text-zinc-300">
                      Co-Founder & CEO
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    alt="pocketpr screenshot"
                    className="rounded-xl"
                    src="/cares.png"
                    width="2000"
                    height="1250"
                  />
                </div>
              </motion.div>
            </Link>
          </div>
          {/*End Projects & Blog Grid Card*/}
        </div>
        <div className="py-2" />

        {/* ------------------------------------CONTACT-FORM------------------------------------ */}
        <div className="px-4 lg:px-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{
              ease: "easeIn",
              type: "spring",
              duration: 0.8,
            }}
            className="p-4 sm:p-8 grid grid-cols-1 2xl:grid-cols-2  rounded-3xl bg-zinc-800"
          >
            <div className="flex justify-start text-md sm:text-2xl lg:text-3xl xl:text-4xl 2xl:items-center mx-auto font-semibold">
              Interested in working{" "}
              <span className="text-red-500  pl-1 lg:pl-1 xl:pl-2">
                {" "}
                together?
              </span>
            </div>
            <div className="py-2 2xl:hidden" />
            <motion.div whileHover={{ scale: 0.9 }}>
              <Link
                href="mailto:recruitme@danielojohnson.com"
                className="flex justify-center text-sm sm:text-2xl lg:text-3xl xl:text-4xl text-red-500  rounded-3xl py-4 bg-zinc-100  transition-colors font-semibold"
              >
                recruitme@danielojohnson.com
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="py-2" />
        {/* ------------------------------------FOOTER------------------------------------ */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: "all" }}
          transition={{
            ease: "easeIn",
            type: "spring",
            duration: 0.8,
          }}
          className="mx-4 lg:mx-0 p-4 flex justify-between rounded-3xl bg-zinc-800"
        >
          <Link
            href="/"
            className="pl-4 text-md sm:text-2xl md:text-3xl 2xl:text-4xl text-zinc-100 hover:text-white transition-colors font-semibold"
          >
            daniel <span className="text-red-500 pl-0.5"> j.</span>
          </Link>
          <div className="pr-4 text-md sm:text-2xl md:text-3xl 2xl:text-4xl text-zinc-100 transition-colors font-semibold">
            Let&apos;s <span className="text-red-500">cook.</span>
          </div>
        </motion.div>
        <div className="py-2" />
      </main>
    </>
  );
}
