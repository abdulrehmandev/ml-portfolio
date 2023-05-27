import Container from "@/components/Container";
import Link from "next/link";
import LetsChatButton from "@/components/LetsChatButton";

const Header = () => {
  return (
    <div className="py-4 border-b">
      <Container>
        <nav className="py-2 flex gap-2 justify-between">
          <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between w-full md:max-w-md lg:max-w-lg">
            <Link href="/" className="font-medium">
              Jhon Doe
            </Link>
            <div className="flex gap-6 text-sm md:text-base">
              <span className="w-4 md:w-8 h-[1px] mt-3 bg-black"></span>
              <p className="max-w-[150px] md:max-w-[250px] opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>

          {/* navigation */}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 h-fit font-medium">
            <ul className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Work</Link>
              </li>
            </ul>
            <LetsChatButton />
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
