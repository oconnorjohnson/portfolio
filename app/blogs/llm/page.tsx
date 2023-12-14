"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";

export default function Llm() {
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
              href="https://docs.google.com/document/d/1VNWHIbHKd7V-TEPVEcQU3SN8tHk1zwR5/edit?usp=sharing&ouid=116859036091790316317&rtpof=true&sd=true"
              className="pr-8 text-2xl text-zinc-100 hover:text-red-500 transition-colors  font-semibold"
            >
              resume
            </Link>

            <Link
              href="mailto:recruitme@danielojohnson.com"
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
                href="https://docs.google.com/document/d/1VNWHIbHKd7V-TEPVEcQU3SN8tHk1zwR5/edit?usp=sharing&ouid=116859036091790316317&rtpof=true&sd=true"
                className="text-6xl py-4 text-zinc-100 transition-colors  font-bold"
              >
                resume
              </Link>
              <Link
                href="mailto:recruitme@danielojohnson.com"
                className="text-6xl py-4 pb-10 text-zinc-100 transition-colors  font-bold"
              >
                contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        {/*---------HEADER-----------*/}
        <div className="flex flex-col rounded-3xl text-zinc-100">
          <div className="flex flex-row w-full">
            <div
              className="flex flex-col p-10 bg-zinc-800 text-6xl font-semibold items-center rounded-3xl my-4"
              style={{ display: "inline-block" }}
            >
              LLM <span className="text-red-500">Armies</span>
            </div>
            <div className="px-2" />
            <div className="flex items-center justify-start p-10 bg-zinc-800 text-2xl font-semibold rounded-3xl my-4 w-full">
              How my team and I are building
              <span className="text-red-500 px-2"> autonomous </span> public
              relations agents.
            </div>
          </div>
          <div className="flex flex-col w-full bg-zinc-800 rounded-3xl p-10">
            <h1 className="text-3xl font-semibold text-red-500">
              Introduction
            </h1>
            <div className="py-2" />
            <p className="text-2xl leading-relaxed font-light">
              PocketPR has been my passion project for the past 10 months. What
              we&apos;ve built so far is just the beginning. I&apos;ll talk some
              sh*t about something that I and a lot of developer&apos;s did in
              the first half of 2023, and then share what I learned in the
              process.{" "}
            </p>
            <div className="py-2" />
            <p className="text-2xl leading-relaxed font-light">
              GPT Wrapper: A product that wraps a fancy UI around a third-party
              LLM API and a custom system prompt. While the PocketPR MVP had a
              lot more going on in order to provide up to 25,000 YouTube
              comments to a single conversation with the GPT-4 API, the base was
              still rather value-less. We had built a feature (rather than a
              product) that Google could (and would) bake directly into YouTube.
            </p>
          </div>
          <div className="py-2" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{
              ease: "easeIn",
              type: "spring",
              duration: 0.8,
            }}
            className="flex flex-col w-full bg-zinc-800 rounded-3xl p-10"
          >
            <h1 className="text-3xl font-semibold text-red-500">
              Building Long-Term Value
            </h1>
            <div className="py-2" />
            <p className="text-2xl leading-relaxed font-light">
              Now, PocketPR was <i>never supposed to be just that.</i> The base
              idea was to build an autonomous, cross-platform PR assistant for
              content creators, influencers, businesses, and ultimately
              everybody. But exactly how we would achieve that wasn&apos;t
              always clear. It took a lot of sleepless nights, staring at
              failure, to get to where we are now.{" "}
            </p>
            <div className="py-2" />
            <p className="text-2xl leading-relaxed font-light">
              There were a few crucial points that accumulated to produce our
              current architecture, and without deluging so much that my CTO
              fires me, I want to lay out how we&apos;ve changed our
              perspectives on building products on-top of the OpenAI API. (Or,
              ideally, around it.) So, what helped us design a foundation for
              the longevity of PocketPR? There were 3 notable points:
            </p>
            <div className="py-2" />
            <p className="text-2xl leading-relaxed font-light pl-12">
              1. Hundreds of hours experimenting with ChatGPT. The most
              important lesson: the quality of output is proportional to the
              amount of context, and inversely proportional to the complexity &
              size of the task at hand.
            </p>
            <div className="py-2" />
            <p className="text-2xl leading-relaxed font-light pl-12">
              2. Function calling released. Consistently receive JSON to call
              traditional code? Now we&apos;re starting to see a path towards
              controlled autonomy.
            </p>
            <div className="py-2" />
            <p className="text-2xl leading-relaxed font-light pl-12">
              3. Assistants API released. From a logistics perspective, this
              didn&apos;t enable anything, but it certainly made the process
              easier. More importantly, it made me rethink how I viewed
              applications with AI functionality.
            </p>
          </motion.div>
          <div className="py-2" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{
              ease: "easeIn",
              type: "spring",
              duration: 0.8,
            }}
            className="flex flex-col w-full bg-zinc-800 rounded-3xl p-10"
          >
            <h1 className="text-3xl font-semibold text-red-500">
              Wrappers vs. Armies
            </h1>
            <div className="py-2" />
            <Image
              src="/diagram1.png"
              width="2000"
              height="2000"
              alt="diagram comparing GPT wrappers and LLM armies"
              className="rounded-3xl p-1"
            />
          </motion.div>
          <div className="py-2" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{
              ease: "easeIn",
              type: "spring",
              duration: 0.8,
            }}
            className="flex flex-col w-full bg-zinc-800 rounded-3xl p-10"
          >
            <h1 className="text-3xl font-semibold text-red-500">Our Future</h1>
            <div className="py-2" />
            <p className="text-2xl leading-relaxed font-light">
              So we broke down the goal of the product into a network of
              single-task assistants and traditional code functions. Rather than
              writing off 99% of the product&apos;s labor to an external API, we
              chose to deploy LLM technology only where it enabled that which
              wasn&apos;t possible without it. As language models, we use them
              where we need language understanding.{" "}
            </p>
            <div className="py-2" />
            <p className="text-2xl leading-relaxed font-light">
              The last thing I want to touch on is the safety guards that are
              enabled by this approach. Let&apos;s take for example an assistant
              that is asked to search a browser API based on a provided string
              of context (which would be passed from a previous assistant). With
              a task-based approach, we can easily add additional assistants
              following the search assistant who are instructed to check the
              relevance of the search results to the topic at hand, or to run a
              second and third browser search to fact-check the original result.
              This is only one example of how subdividing your language-needs
              into many small-task-based models as opposed to one large
              catch-all model not only increases overall capabilities but allows
              for a recursive solution where issues can easily be attended to
              via new task-models.{" "}
            </p>
            <div className="py-2" />
            <p className="text-2xl leading-relaxed font-light">
              More to come on this and more very soon. I wanted to get this out
              so I could beat my CTO to publishing my first blog post lol.
            </p>
            <div className="py-2" />
            <p className="text-2xl leading-relaxed font-light">- Daniel</p>
          </motion.div>
          <div className="py-2" />
        </div>
      </main>
    </>
  );
}
