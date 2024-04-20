import React, { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="md:px-[10rem] p-[2rem] bg-[#EDF1FA] dark:bg-[#1D2333]"
    >
      <h1 className="text-4xl font-bold mb-[2rem] font-header">About</h1>
      <div className="flex flex-col md:flex-row mb-2 text-[#04052F] dark:text-[#E8E8FD] font-bold font-text">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quis fuga sunt dignissimos delectus atque accusantium optio
            asperiores vel illo facilis excepturi est, nostrum corporis sint id
            placeat quos recusandae ex commodi itaque molestias veritatis?
            Doloremque quaerat sed nihil, enim odio pariatur, tempora molestias
            laudantium quod, soluta harum quos vitae.
          </p>
        </div>
        <div>
          <p className="mt-[1rem] md:m-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            veritatis illo, veniam explicabo nostrum tempore nam iure dicta
            vitae debitis iusto? Quia repellat tempora facilis quasi similique
            ab possimus sed totam, eius architecto quas suscipit delectus
            laborum modi, ex enim assumenda molestiae, nostrum obcaecati. Modi
            maiores ipsum vero eaque cupiditate.
          </p>
        </div>
      </div>
      <Link href="/about">
        <Button> View more</Button>
      </Link>
    </div>
  );
});

export default About;
