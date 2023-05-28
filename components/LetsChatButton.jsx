import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const LetsChatButton = ({ className }) => {
  return (
    <Link
      href="https://docs.google.com/forms/d/e/1FAIpQLSc2wswIbdrHEu6vCyjESYkqL25CIbwQrFahWPtcIG-fTsahxw/viewform?usp=sf_link"
      className={`flex items-center gap-2 border-2 border-black rounded-full px-4 py-2 hover:bg-black hover:text-white group min-w-[100px] ${
        className && className
      }`}
      target="_blank"
    >
      Let's chat
      <FiArrowRight className="-rotate-45 group-hover:rotate-0 transition duration-300" />
    </Link>
  );
};

export default LetsChatButton;
