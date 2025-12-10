import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-4 xl:pb-24 "
        >
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Full Stack Developer</span>

            <h1 className="h1 mb-6">
              Hello I'm
              <br />
              <span className="text-[#00ff99]">Ankush Kumayu</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a full stack developer with a passion for creating innovative
              solutions that solve real-world problems.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* <Button 
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
              >
                <FiDownload className="text-xl" />
                <span> Download CV </span>
              </Button> */}
              <a
                href="/AnkushResume002.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <FiDownload className="text-xl" />
                  <span> Download CV </span>
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerSytles="flex gap-6"
                  iconStyles="w-9 h-9 border border-[#00ff99] flex items-center justify-center rounded-full p-1 text-[#00ff99] hover:bg-[#00ff99] hover:text-white transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
