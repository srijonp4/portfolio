import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Srijon Paul
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer{" "}
      </p>
      <p className="text-sm max-w-xl mb-6 font-semibold">
        I'm a passionate and skilled Software Engineer and Web Developer. I love
        coming up with creative solutions using various programming languages,
        frameworks, and web technologies. I'm always eager to learn and stay
        updated with the latest trends in technology, pushing myself to do even
        better.
        <br />
        <a
          href="https://drive.google.com/file/d/15XoVnad8MtTKILUvwboojEEq1BHH8tfK/view?usp=sharing"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="norefferer noopener"
        >
          🚀 Download My Resume 🚀
        </a>
      </p>
    </div>
  );
};

export default Intro;
