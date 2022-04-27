import { useState } from "react";
import "./App.css";
import hero from "./hero.png";
import axios from "axios";

function App() {
  const backUrl = "http://localhost:3000/questions";
  const [showIntro, setShowIntro] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loadingQns, setLoadingQns] = useState(false);
  const [count, setCount] = useState(0);
  const fetchQuestions = async () => {
    try {
      setLoadingQns(true);
      const result = await axios.get(backUrl);
      setCount(1);
      setLoadingQns(false);
      setQuestions(result.data);
      console.log("result", result);
    } catch (error) {
      setLoadingQns(false);
    }
  };
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
      }}
    >
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* Left Col */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              {questions.length === 0
                ? "Are you an introvert or an extrovert?"
                : count +
                  ": " +
                  questions.find((qn) => qn.id === count).question}
            </h1>
            {questions.length === 0 ? (
              <p className="leading-normal text-2xl mb-8">
                Take the Personality Test below and find out.
              </p>
            ) : (
              <div className="flex justify-center">
                <div>
                  {questions
                    .find((qn) => qn.id === count)
                    .answers.map((ans) => {
                      return (
                        <div className="form-check">
                          <input
                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="flexRadioDefault"
                            onChange={(e) => {}}
                            id={`flexRadioDefault${ans.score}`}
                          />
                          <label
                            className="form-check-label inline-block text-gray-800"
                            htmlFor={`flexRadioDefault${ans.score}`}
                          >
                            {ans.answer}
                          </label>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
            {questions.length === 0 ? (
              <button
                disabled={loadingQns}
                onClick={() => {
                  setShowIntro(!showIntro);
                  fetchQuestions();
                }}
                className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                {loadingQns ? (
                  <>
                    <svg
                      role="status"
                      className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      />
                    </svg>
                    Loading...
                  </>
                ) : (
                  <>Start Test</>
                )}
              </button>
            ) : (
              <div>
                <button
                  disabled={count === 1}
                  onClick={() => setCount(count - 1)}
                  type="button"
                  class={`py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 inline-flex items-center ${
                    count === 1 ? "" : "hover:bg-blue-700 hover:text-white"
                  }`}
                >
                  Previous Question
                </button>
                <button
                  onClick={() => {
                    if (questions.length === count) {
                      console.log("Submit");
                    } else {
                      setCount(count + 1);
                    }
                  }}
                  type="button"
                  class={`py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 inline-flex items-center ${
                    questions.length === count
                      ? "hover:bg-green-500 hover:text-white"
                      : "hover:bg-blue-700 hover:text-white"
                  }`}
                >
                  {questions.length === count ? "SUBMIT" : "Next Question"}
                </button>
              </div>
            )}
          </div>
          {/* Right Col */}
          <div className="w-full h-full md:w-3/5 py-6 text-center">
            <img
              className="w-full h-full md:w-3/4 z-50"
              alt="hero"
              src={hero}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
