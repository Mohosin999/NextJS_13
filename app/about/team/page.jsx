"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Team = () => {
  const router = useRouter();

  return (
    <div>
      <h2>Team :</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi beatae,
        quasi cupiditate accusantium alias maiores labore ea possimus debitis
        tempore minima veniam reprehenderit enim unde ipsam provident asperiores
        dolorem nostrum necessitatibus dolores ab magnam repellat. Ut quaerat,
        sapiente facilis alias sunt voluptate tempora exercitationem perferendis
        hic iure deleniti animi cupiditate.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, enim,
        temporibus qui deserunt blanditiis culpa itaque animi ipsam at facilis
        atque fugiat, perspiciatis amet perferendis consequatur non ipsum
        officiis id sit odio praesentium quidem cumque? Dolor dicta officiis
        ducimus similique mollitia quaerat voluptatem a necessitatibus,
        accusamus error nemo sed pariatur facilis voluptatibus. Ipsum laborum
        laudantium reiciendis. At esse quam quos adipisci eos incidunt libero
        vitae asperiores qui aspernatur pariatur maiores nulla ea, ducimus omnis
        fugiat dolor? Doloremque cum nulla provident modi rem, blanditiis
        explicabo corrupti vero minima delectus commodi asperiores ducimus
        voluptas ad officiis dolore maxime perferendis, esse repellendus ab
        eveniet dicta nam. Accusamus consequatur optio ullam qui, illo molestias
        non totam in alias aliquid cum? Excepturi recusandae et, id doloremque
        repellendus ea voluptates impedit esse aut nemo, enim odio magni
        dolorem. Ipsa illo ipsum officiis optio aspernatur molestias alias quam,
        nemo et porro aliquid, voluptatum ratione explicabo culpa sapiente in
        suscipit expedita. Voluptate aspernatur mollitia debitis exercitationem
        magnam quasi iusto, recusandae eos ab veniam asperiores in itaque
        facilis nesciunt laboriosam officiis! Soluta dolor reprehenderit quas
        assumenda accusantium commodi necessitatibus minima rem nostrum
        repudiandae, vel explicabo voluptatem, vero, optio quis error culpa
        dolores totam ea quia. Molestiae reprehenderit architecto iste!
      </p>

      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default Team;
