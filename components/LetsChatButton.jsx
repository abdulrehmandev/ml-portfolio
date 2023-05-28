import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const LetsChatButton = ({ className }) => {
  return (
    <Link
      href="https://docs.google.com/forms/d/e/1FAIpQLSc2wswIbdrHEu6vCyjESYkqL25CIbwQrFahWPtcIG-fTsahxw/viewform?usp=sf_link"
      className={`flex items-center gap-2 md:border-2 border-black group min-w-[100px] ${
        className
          ? className
          : "md:rounded-full md:px-4 md:py-2 md:hover:bg-black md:hover:text-white"
      }`}
      target="_blank"
    >
      Let's chat
      <FiArrowRight className="-rotate-45 group-hover:rotate-0 transition duration-300" />
    </Link>
  );
};

export default LetsChatButton;
