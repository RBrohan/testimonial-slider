import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ review }) => {
  return (
    <div className="md:relative flex flex-col">
      <div className="absolute top-[-100px] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-25"
          src={review.image}
        />
        <div className="absolute w-[140px] h-[140px] bg-violet-500 rounded-full top-[-6px] z-[-10] left-[10px]"></div>
      </div>

      <div className="text-center mt-[10px]">
        <p className="font-bold text-2xl capitalize tracking-wider">
          {review.name}
        </p>
        <p className="text-violet-400 uppercase text-sm">{review.job}</p>
      </div>

      <div className="text-violet-500 mx-auto mt-[15px]">
        <FaQuoteLeft />
      </div>

      <div className="text-center my-[30px] text-slate-500">{review.text}</div>

      <div className="text-violet-500 mx-auto mb-[15px] ">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
