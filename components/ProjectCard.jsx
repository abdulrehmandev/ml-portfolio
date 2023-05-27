import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ProjectCard = ({ img, title, category, to }) => {
  return (
    <section className="group">
      <div className="w-full aspect-square overflow-hidden rounded-3xl ">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 duration-500"
          src="/temp-image.jpg"
          width={720}
          height={720}
          alt="h"
        />
      </div>
      <div className="py-4 px-2 flex justify-between items-center">
        <div>
          <h5 className="text-3xl">Frame.io</h5>
          <p className="opacity-80 mt-1">User Interface Design</p>
        </div>
        <Link
          className="border-black border-2 rounded-full py-3 px-6 text-xl hover:bg-black hover:text-white transition"
          href="/"
        >
          <FiArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default ProjectCard;
