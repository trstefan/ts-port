import React from "react";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <div className="p-[2rem]">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p>Want to get in touch?</p>
      <p>Write me at hello[at]maximeheckel.com or shoot me a DM on Twitter</p>
      <Button> View more</Button>
    </div>
  );
};
