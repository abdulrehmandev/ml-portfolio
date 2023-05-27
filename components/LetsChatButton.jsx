import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const LetsChatButton = ({ className }) => {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 group min-w-[100px] ${
        className && className
      }`}
    >
      Let's chat
      <FiArrowRight
        className="-rotate-45 group-hover:rotate-0 transition duration-300"
        // size={18}
      />
    </Link>
  );
};

export default LetsChatButton;
