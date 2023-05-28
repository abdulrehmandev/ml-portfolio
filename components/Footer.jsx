import Container from "@/components/Container";
import LetsChatButton from "@/components/LetsChatButton";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="my-64">
          <LetsChatButton className="mx-auto border-2 rounded-full hover:bg-black hover:text-white px-10 transition duration-300 py-6 font-medium text-3xl w-fit" />
        </div>
        <div className="flex justify-between items-start py-2 mb-4">
          <div className="flex flex-col gap-2 h-fit font-medium">
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/#work">Work</Link>
              </li>
            </ul>
            {/* <LetsChatButton /> */}
          </div>
          <div className="text-lg flex gap-4 p-2">
            <Link
              className="p-2 border-2 hover:bg-black hover:text-white transition rounded-full"
              href="https://github.com/Usama-Amjad"
              target="_blank"
            >
              <BsGithub />
            </Link>
            <Link
              className="p-2 border-2 hover:bg-black hover:text-white transition rounded-full"
              href="https://www.linkedin.com/in/usama-amjad-a28b6a253/"
              target="_blank"
            >
              <BsLinkedin />
            </Link>
          </div>
        </div>
      </Container>
      <div className="py-3">
        <p className="text-[0.7rem] text-center">
          Designed & Developed by{" "}
          <Link
            href="https://github.com/abdulrehmandev/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            abdulrehmandev
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
