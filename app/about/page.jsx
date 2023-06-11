"use client";
import React from "react";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h2>This is About Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio accusamus
        delectus repellat vero beatae corrupti veritatis sequi, quis culpa
        veniam dolorem debitis ea voluptatibus laboriosam molestiae enim modi
        ducimus maiores consectetur necessitatibus, quas aperiam saepe esse
        aliquam. Sed reprehenderit similique ex doloremque doloribus?
        Exercitationem voluptatem porro omnis corporis. Sapiente, nobis!
      </p>

      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default About;
