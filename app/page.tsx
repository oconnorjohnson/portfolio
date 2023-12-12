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
        "This is going to be a nice quote from Keegan. He works at PocketPR!",
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
      <main className="mx-auto lg:w-3/4 2xl:w-2/3">
        {/* ------------------------------------NAVBAR------------------------------------ */}
        <div className="mt-8 mx-4 lg:mx-0 p-4 flex justify-between grid-col-3 rounded-3xl bg-zinc-800">
          <Link
            href="/"
            className="pl-4 text-2xl text-zinc-100 hover:text-red-500 transition-colors font-semibold"
          >
            daniel <span className="text-red-500  pl-0.5"> j.</span>
          </Link>

          <div className="hidden md:flex md:justify-end">
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
            className="flex justify-end pr-4 text-3xl md:hidden"
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
              className="z-50 fixed rounded-3xl top-0 left-0 w-full h-full min-w-screen min-h-screen bg-zinc-800 flex flex-col items-start pl-10 justify-end"
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
        <div className="md:flex md:flex-row md:justify-between px-4 md:px-0">
          {/*Hero Card*/}
          <div className="bg-zinc-800 my-4 flex flex-col justify-between rounded-3xl md:w-2/3 p-10 md:px-16 md:py-20">
            <div className="text-4xl md:text-6xl pb-8 leading-tight font-extralight text-zinc-300">
              Looking for a <span className="text-red-500">solution?</span>
            </div>
            <div className="text-6xl md:text-8xl leading-tight font-bold text-zinc-100">
              I&apos;m a full-stack{" "}
              <span className="text-red-500">problem-solver.</span>
            </div>
          </div>
          {/*End Hero Card*/}
          <div className="px-2" />
          {/*Get In Touch Card*/}
          <div className="bg-zinc-800 my-4 flex flex-col justify-between text-center rounded-3xl md:w-1/3 p-10 md:p-24">
            <div className="text-4xl md:text-6xl text-center leading-tight font-extralight pb-10 md:pb-0 text-zinc-300">
              Got an <span className="text-red-500">idea?</span>
            </div>
            <motion.div whileHover={{ scale: 1.3 }}>
              <button className="text-4xl md:text-5xl bg-zinc-100 transition-colors py-8 rounded-3xl leading-tight font-bold text-zinc-800">
                Get In Touch
              </button>
            </motion.div>
          </div>

          {/*End Get In Touch Card*/}
        </div>

        {/* ------------------------------------ABOUT------------------------------------ */}
        <div className="md:flex md:flex-row md:justify-between px-4 md:px-0">
          {/*Born and Based Card*/}
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{
              ease: "easeIn",
              type: "spring",
              duration: 0.8,
              delay: 0.4,
            }}
            className="hidden md:flex bg-zinc-800 text-center flex-col justify-center rounded-3xl md:w-1/3 p-10 md:p-12"
          >
            <div className="text-4xl md:text-5xl leading-tight font-extralight  text-zinc-300">
              Born, Raised & <span className="text-red-500">Based</span> in
            </div>

            <div className="text-5xl md:text-6xl  pt-12 px-10 leading-tight font-bold text-zinc-100">
              The Bay Area
            </div>
          </motion.div>
          {/*End Born and Based Card*/}
          <div className="hidden md:block p-2" />
          <div className="flex flex-col md:w-2/3">
            <div className="flex flex-row justify-between md:px-0">
              {/*LinkedIn Card*/}

              <motion.div
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "all" }}
                transition={{
                  ease: "easeIn",
                  type: "spring",
                  duration: 0.8,
                  delay: 1.0,
                }}
                className="bg-zinc-800 transition-colors  flex flex-row justify-center text-center px-4 sm:px-10 md:px-24 text-2xl font-bold text-zinc-100 rounded-3xl py-6 w-full"
              >
                <motion.div whileHover={{ scale: 1.3 }}>
                  <Link
                    href="https://www.linkedin.com/in/oconnorjohnson"
                    className="flex flex-row justify-center text-center px-4  text-lg md:text-2xl font-extralight text-zinc-800 rounded-3xl py-6 bg-zinc-100  transition-colors"
                  >
                    <FaLinkedin className="pr-2 text-3xl" />
                    <div>LinkedIn</div>
                  </Link>
                </motion.div>
              </motion.div>

              {/*End LinkedIn Card*/}
              <div className="px-2" />
              {/*Github Card*/}
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "all" }}
                transition={{
                  ease: "easeIn",
                  type: "spring",
                  duration: 0.8,
                  delay: 1.5,
                }}
                className="bg-zinc-800 flex flex-row justify-center transition-colors text-center px-4 sm:px-10 md:px-24 text-2xl font-bold   text-zinc-100 rounded-3xl py-6 w-full"
              >
                <motion.div whileHover={{ scale: 1.3 }}>
                  <Link
                    href="https://www.github.com/oconnorjohnson"
                    className="flex flex-row justify-center text-center px-4 text-lg md:text-2xl font-extralight text-zinc-800 rounded-3xl py-6 bg-zinc-100  transition-colors"
                  >
                    <FaGithubSquare className="pr-2 text-3xl" />
                    <div>Github</div>
                  </Link>
                </motion.div>
              </motion.div>

              {/*End Github Card*/}
            </div>
            <div className="py-2 md:hidden" />
            {/*Born and Based Card*/}
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: "all" }}
              transition={{
                ease: "easeIn",
                type: "spring",
                duration: 0.8,
                delay: 0,
              }}
              className="flex bg-zinc-800 text-center flex-col justify-center rounded-3xl md:w-1/3 p-10 md:p-12 md:hidden"
            >
              <div className="text-3xl md:text-4xl leading-tight font-extralight pb-6 text-zinc-300">
                Born, Raised & <span className="text-red-500">Based</span> in
              </div>
              <div className="py-1" />
              <div className="text-3xl md:text-4xl px-10 rounded-3xl leading-tight font-bold text-zinc-100">
                The Bay Area
              </div>
            </motion.div>
            {/*End Born and Based Card*/}
            <div className="py-2" />
            {/*About Card*/}
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: "all" }}
              transition={{
                ease: "easeIn",
                type: "spring",
                duration: 0.8,
                delay: 0,
              }}
              className="bg-zinc-800 rounded-3xl p-10 md:p-12"
            >
              <div className="text-2xl text-start md:text-end md:text-4xl leading-tight font-extralight pb-4 text-zinc-300">
                I work with Typescript, React, Next, PostgreSQL & Tailwind CSS.{" "}
                <span className="text-red-500">
                  I love learning new languages.
                </span>{" "}
                Currently, I&apos;m studying Swift, Objective-C, Spanish &
                French.
              </div>
              <div className="text-3xl text-start md:text-end md:text-5xl leading-tight font-semibold text-zinc-100">
                Let&apos;s build robust & accessible solutions{" "}
                <br className="hidden lg:block" /> at the speed of light.
              </div>
            </motion.div>
            {/*End About Card*/}
          </div>
        </div>

        {/* ------------------------------------TESTIMONIAL------------------------------------ */}
        <div className="py-2" />
        <div className="flex flex-col md:flex-row ">
          {/*Testimonial Card*/}
          <div className="px-4 md:px-0 w-full">
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: "all" }}
              transition={{
                ease: "easeIn",
                type: "spring",
                duration: 0.8,
                delay: 0,
              }}
              className="py-8 px-4 md:p-12 w-full min-w-full rounded-3xl bg-zinc-800 flex flex-col items-center"
            >
              <div className="relative w-full flex items-center justify-between">
                <motion.div whileHover={{ scale: 1.3 }}>
                  <button
                    className="text-6xl text-zinc-100  transition-colors"
                    aria-label="Previous quote"
                    onClick={prevTestimonial}
                  >
                    <MdArrowCircleLeft />
                  </button>
                </motion.div>
                <div className="flex flex-col justify-center items-center px-2 md:px-4">
                  <blockquote className="text-xl md:text-4xl text-center font-semibold leading-snug">
                    {testimonials[currentTestimonial].quote}
                  </blockquote>
                  <div className="pt-2 md:pt-6 flex text-center">
                    <div className="">
                      <h4 className="text-lg md:text-xl text-zinc-100">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <h4 className="text-sm md:text-md text-zinc-300">
                        {testimonials[currentTestimonial].position}
                      </h4>
                      <p className="text-md md:text-lg text-red-500">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.3 }}>
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

          <div className="px-2 md:hidden" />

          {/*End Testimonial Card*/}
        </div>
        <div className="py-2" />

        {/* ------------------------------------PROJECTS------------------------------------ */}
        <div className="flex flex-col md:flex-row px-4 md:px-0">
          {/*PocketPR Card*/}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: "all" }}
              transition={{
                ease: "easeIn",
                type: "spring",
                duration: 0.8,
                delay: 0,
              }}
              className="flex flex-col bg-zinc-800 hover:bg-zinc-800 rounded-3xl h-full p-12"
            >
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <h1 className="text-zinc-100 font-semibold text-3xl md:text-4xl">
                    PocketPR
                  </h1>
                  <h2 className="font-ultralight text-xl md:text-2xl pt-2 pb-4 text-zinc-300">
                    Co-Founder & CEO
                  </h2>
                </div>
              </div>
              <Image
                height="650"
                width="500"
                alt="pocketpr screenshot"
                className="rounded-3xl"
                src="/pocketpr.png"
              />
            </motion.div>
          </Link>
          {/*End PocketPR Card*/}
          <div className="px-2" />
          <div className="py-2 md:hidden" />
          {/*Projects & Blog Grid*/}
          <div className="grid grid-col md:grid-cols-2 gap-4 md:w-2/3">
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "all" }}
                transition={{
                  ease: "easeIn",
                  type: "spring",
                  duration: 0.8,
                  delay: 0,
                }}
                className="bg-zinc-800 hover:bg-zinc-800 rounded-3xl h-full p-12"
              >
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1 className="text-zinc-100 font-semibold text-3xl md:text-4xl">
                      Blog Post One
                    </h1>
                    <h2 className="font-ultralight text-xl md:text-2xl pt-2 pb-4 text-zinc-300">
                      Co-Founder & CEO
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative h-32 w-64">
                    <Image
                      layout="fill"
                      alt="pocketpr screenshot"
                      className="rounded-xl"
                      src="/systems.png"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "all" }}
                transition={{
                  ease: "easeIn",
                  type: "spring",
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="bg-zinc-800 hover:bg-zinc-800 rounded-3xl h-full p-12"
              >
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1 className="text-zinc-100 font-semibold text-3xl md:text-4xl">
                      CARES
                    </h1>
                    <h2 className="font-ultralight text-xl md:text-2xl pt-2 pb-4 text-zinc-300">
                      Co-Founder & CEO
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative h-32 w-64">
                    <Image
                      layout="fill"
                      alt="pocketpr screenshot"
                      className="rounded-xl"
                      src="/cares.png"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "all" }}
                transition={{
                  ease: "easeIn",
                  type: "spring",
                  duration: 0.8,
                  delay: 0,
                }}
                className="bg-zinc-800 hover:bg-zinc-800 rounded-3xl h-full p-12"
              >
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1 className="text-zinc-100 font-semibold text-3xl md:text-4xl">
                      Portfolio
                    </h1>
                    <h2 className="font-ultralight text-xl md:text-2xl pt-2 pb-4 text-zinc-300">
                      Co-Founder & CEO
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative h-32 w-64">
                    <Image
                      layout="fill"
                      alt="pocketpr screenshot"
                      className="rounded-xl"
                      src="/portfolio.png"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "all" }}
                transition={{
                  ease: "easeIn",
                  type: "spring",
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="bg-zinc-800 hover:bg-zinc-800 rounded-3xl h-full p-12"
              >
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1 className="text-zinc-100 font-semibold text-3xl md:text-4xl">
                      Blog Post Two
                    </h1>
                    <h2 className="font-ultralight text-xl md:text-2xl pt-2 pb-4 text-zinc-300">
                      Co-Founder & CEO
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative h-32 w-64">
                    <Image
                      layout="fill"
                      alt="pocketpr screenshot"
                      className="rounded-xl"
                      src="/embeddings.png"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
          {/*End Projects & Blog Grid Card*/}
        </div>
        <div className="py-2" />

        {/* ------------------------------------CONTACT-FORM------------------------------------ */}
        <div className="px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{
              ease: "easeIn",
              type: "spring",
              duration: 0.8,
              delay: 0.2,
            }}
            className="p-8 grid grid-cols-1 md:grid-cols-2 text-md md:text-3xl rounded-3xl bg-zinc-800"
          >
            <div className="flex justify-start pb-4 md:p-4 mx-auto font-semibold">
              Interested in working{" "}
              <span className="text-red-500  pl-2"> together?</span>
            </div>
            <Link
              href="mailto:recruitme@danielojohnson.com"
              className="flex justify-center text-sm md:text-3xl text-red-500 hover:text-zinc-100 rounded-3xl py-4 px-12 bg-zinc-100 hover:bg-zinc-800 transition-colors font-semibold"
            >
              recruitme@danielojohnson.com
            </Link>
          </motion.div>
        </div>
        <div className="py-2" />
        {/* ------------------------------------FOOTER------------------------------------ */}

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: "all" }}
          transition={{
            ease: "easeIn",
            type: "spring",
            duration: 0.8,
            delay: 0.4,
          }}
          className="mx-4 lg:mx-0 p-4 flex justify-between rounded-3xl bg-zinc-800"
        >
          <Link
            href="/"
            className="pl-4 text-lg md:text-2xl text-zinc-100 hover:text-white transition-colors font-semibold"
          >
            daniel <span className="text-red-500 pl-0.5"> j.</span>
          </Link>
          <div className="pr-4 text-lg md:text-2xl text-zinc-100 transition-colors font-semibold">
            Let&apos;s build, <span className="text-red-500">quickly.</span>
          </div>
        </motion.div>
        <div className="py-2" />
      </main>
    </>
  );
}
