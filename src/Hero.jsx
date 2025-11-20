import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="relative h-[40vh] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1752224543110-35faed040b91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="content relative flex flex-col items-center justify-center gap-2 h-full text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono">Assignment Tracker</h1>
            <p>Stay on top of your deadlines</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
