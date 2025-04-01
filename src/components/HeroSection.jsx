"use client";

import Image from "next/image";
import React from "react";
import Container from "./Container";

import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <Container className="mt-16">
      <section className="grid grid-cols-1 sm:grid-cols-12">
        <section className="col-span-7 place-self-center">
          <h1 className="text-white text-center sm:text-left text-4xl sm:text-5xl mb-4 lg:text-6xl font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500">
              Hello, I'm
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Benz Brown",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web developer",
                1000,
                "Mobile developer",
                1000,
                "iOS developer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-500 lg:text-xl text-lg mb-6">
            I'm a full-stack developer and graphic designer. I specialize in
            JavaScript, React, and CSS.
          </p>
          <section className="space-y-2 space-x-2">
            <button className="bg-white w-full sm:w-fit px-4 py-2 rounded-md hover:bg-blue-300 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500">
              Hire me
            </button>
            <button className="bg-transparent w-full sm:w-fit border border-white p-1 rounded-md hover:bg-gray-400 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500">
              <span className="bg-slate-800 block p-1 rounded-md">
                Download CV
              </span>
            </button>
          </section>
        </section>
        <section className="col-span-5 place-self-center mt-4 lg:mt-0">
          <section className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] p-4 relative">
            <Image
              src="/images/hero-image.png"
              width={300}
              height={300}
              alt="hero image"
            />
          </section>
        </section>
      </section>
    </Container>
  );
}
