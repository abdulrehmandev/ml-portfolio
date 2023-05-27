import Container from "@/components/Container";
import LetsChatButton from "@/components/LetsChatButton";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="my-48">
          <LetsChatButton className="mx-auto font-medium text-3xl w-fit" />
        </div>
        <div className="flex justify-between items-start py-2 mb-4">
          <div className="flex flex-col gap-2 h-fit font-medium">
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Work</Link>
              </li>
            </ul>
            {/* <LetsChatButton /> */}
          </div>
          <div className="text-lg flex gap-4 p-2">
            <Link
              className="p-2 border-2 hover:bg-black hover:text-white transition rounded-full"
              href="/"
            >
              <BsGithub />
            </Link>
            <Link
              className="p-2 border-2 hover:bg-black hover:text-white transition rounded-full"
              href="/"
            >
              <BsLinkedin />
            </Link>
            <Link
              className="p-2 border-2 hover:bg-black hover:text-white transition rounded-full"
              href="/"
            >
              <BsTwitter />
            </Link>
          </div>
        </div>
      </Container>
      <div className="py-3 border-t">
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
