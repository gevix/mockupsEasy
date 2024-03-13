import React from "react";

export default function Banner() {
  return (
    <section className="w-full">
      <div className="relative w-full aspect-[3/1] overflow-hidden">
        <img
          alt="Banner"
          className="object-cover object-center"
          height="640"
          src="/placeholder.svg"
          style={{
            aspectRatio: "1920/640",
            objectFit: "cover",
          }}
          width="1920"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
          <div className="grid gap-4 text-center">
            <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Welcome to the Platform
            </h1>
            <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The all-in-one platform for building, deploying, and collaborating
              on web apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
