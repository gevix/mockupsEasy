import React from "react";

export default function Banner() {
  return (
    <section className="w-full">
      <div className="relative w-full aspect-[3/1] overflow-hidden">
        <img
          alt="Banner"
          className="object-cover object-center"
          height="640"
          src="static/images/Banner.png"
          style={{
            aspectRatio: "1920/640",
            objectFit: "cover",
          }}
          width="1920"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
          <div className="grid gap-4 text-center">
            <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-2xl">
              Transform Your Ideas into Stunning Products!
            </h1>
            <p className="mx-auto max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-2xl">
              Unleash Your Creativity with Our Free Mockup Generator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
