import hero from "./hero.png";
import "./App.css";

function App() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
      }}
    >
      <div class="pt-24">
        <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* Left Col */}
          <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 class="my-4 text-5xl font-bold leading-tight">
              Are you an introvert or an extrovert?
            </h1>
            <p class="leading-normal text-2xl mb-8">
              Take the Personality Test below and find out.
            </p>
            <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Start Test
            </button>
          </div>
          {/* Right Col */}
          <div class="w-full h-full md:w-3/5 py-6 text-center">
            <img class="w-full h-full md:w-3/4 z-50" alt="hero" src={hero} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
