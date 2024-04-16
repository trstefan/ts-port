import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
export default function Home() {
  return (
    <div>
      <header>
        <div className="p-[2rem] bg-red-500">
          <p className="text-2xl">Hello, my name is Stef and</p>
          <h1 className="text-4xl font-bold">
            I build things that live on the internet.
          </h1>
          <p className="text-2xl">
            I thoughtfully design digital interfaces for the web and mobile
            devices.
          </p>
        </div>
      </header>
      <About />
      <Work />
      <Contact />
    </div>
  );
}
