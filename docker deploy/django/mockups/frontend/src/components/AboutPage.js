import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-1/2 lg:mr-8">
            <h1 className="text-3xl font-bold mb-4 m-2">About</h1>
            <div className="prose">
              <p>
                Welcome to MockupsEasy.com! I'm Denis, the brains behind the
                AI-generated mockup templates you see here. Need a custom mockup
                or want to report a bug? Just shoot me a message via Telegram{" "}
                <a href="https://t.me/gevix">@gevix</a>.
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
