"use client";

import { Button, Card } from "flowbite-react";
import Image from "next/image";

export default function MyCard() {
  return (
    <Card
      className="max-w-sm" // Change this to a larger maximum width if necessary
      renderImage={() => (
        <Image width={500} height={500} src="/image-1.webp" alt="image 1" />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Template Name
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Template description
      </p>
      <Button>
        Edit this template
      </Button>
    </Card>
  );
}