import React from "react";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <div className="p-[2rem]">
      <h1 className="text-4xl font-bold">About</h1>

      <div className="flex mb-2">
        <div>
          <p>
            I've been building UIs for container management tools since 2013. I
            started hacking and building web services around Docker as soon as
            it came out. My experiments eventually got me my first job out of
            college at Tutum. I moved from Eastern France to Madrid in Spain to
            start my career in software engineering and shortly after I got the
            opportunity to move to San Francisco, CA, after the acquisition of
            Tutum by Docker.
          </p>
        </div>
        <div>
          <p>
            I've been building UIs for container management tools since 2013. I
            started hacking and building web services around Docker as soon as
            it came out. My experiments eventually got me my first job out of
            college at Tutum. I moved from Eastern France to Madrid in Spain to
            start my career in software engineering and shortly after I got the
            opportunity to move to San Francisco, CA, after the acquisition of
            Tutum by Docker.
          </p>
        </div>
      </div>
      <Button> View more</Button>
    </div>
  );
};
