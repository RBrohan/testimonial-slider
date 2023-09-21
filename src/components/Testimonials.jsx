import Card from "./Card";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = ({ reviews }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleLeftShift = () => {
    if (currentCard - 1 < 0) {
      setCurrentCard(reviews.length - 1);
    } else {
      setCurrentCard(currentCard - 1);
    }
  };

  const handleRightShift = () => {
    if (currentCard + 1 >= reviews.length) {
      setCurrentCard(0);
    } else {
      setCurrentCard(currentCard + 1);
    }
  };

  const surpriseHandler = () => {
    const randomUser = Math.floor(Math.random() * reviews.length);
    setCurrentCard(randomUser);
  };
  return (
    <div className="w-[70vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-[10px] p-10 transition-all duration-700 hover:shadow-lg">
      <Card key={reviews.id} review={reviews[currentCard]} />

      <div className="flex text-3xl mt-[15px] gap-3 text-violet-500 font-bold justify-center">
        <button
          className="cursor-pointer hover:text-violet-600"
          onClick={handleLeftShift}
        >
          <FiChevronLeft />
        </button>
        <button
          className="cursor-pointer hover:text-violet-600"
          onClick={handleRightShift}
        >
          <FiChevronRight />
        </button>
      </div>

      <div>
        <button
          className="bg-violet-500 hover:bg-violet-600 mt-[15px] transition-all duration-200
         cursor-pointer px-10 py-2 rounded-md text-white text-lg"
          onClick={surpriseHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
