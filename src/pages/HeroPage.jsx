import React from 'react';

const HeroPage = () => {
  return (
    <section
      className="
        flex flex-col md:flex-row
        py-16 px-6
        // {`bg-[url('/images/trylogo.png')] bg-cover bg-center`}
        bg-[#3B1E54]
        min-h-screen
        items-center justify-center
        gap-8
      "
    >
      {/* Text Content */}
      <div
        className="
          w-full md:w-[480px]
          bg-[#9B7EBD] bg-opacity-90 backdrop-blur-md
          p-8 md:p-12
          rounded-3xl
          shadow-lg
          text-center md:text-left
          text-white
        "
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
          Hi, I’m Williams Esther  <br /> Welcome to My World
        </h1>
        <p className="text-base md:text-lg text-rose-100 mb-8 leading-relaxed">
          This is a space where lifestyle meets storytelling. From everyday reflections to travel notes and creative tips, I’m sharing it all — one post at a time.
        </p>
        <button
          className="
            px-8 py-3
            bg-black bg-opacity-90
            text-white
            uppercase tracking-wider
            rounded-full
            hover:bg-gray-900
            transition
            font-semibold
            text-sm md:text-base
          "
        >
          Start Exploring
        </button>
      </div>

      {/* Image Gallery */}
      <div className="flex w-full md:w-[480px] h-64 md:h-96 gap-4 overflow-hidden rounded-3xl shadow-lg">
        {[
          '/images/ceo.jpeg',
          '/images/beauty.jpeg',
          '/images/food.jpeg',
        ].map((src, idx) => (
          <div
          
            key={idx}
            className="
              flex-1
              bg-cover bg-center
              rounded-xl
              transition-all duration-500
              cursor-pointer
              hover:flex-[3]
              hover:scale-105
              hover:z-10
            "
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroPage;
