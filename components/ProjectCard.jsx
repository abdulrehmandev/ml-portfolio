import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ProjectCard = ({ img, title, category, to }) => {
  return (
    <section className="group">
      <div className="w-full aspect-square overflow-hidden rounded-3xl border-2">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 duration-500"
          // src="/temp-image.jpg"
          src={img}
          width={720}
          height={720}
          alt={title}
        />
      </div>
      <div className="py-4 px-2 flex gap-4 justify-between items-start">
        <div>
          <h5 className="text-3xl">{title}</h5>
          <p className="opacity-80 mt-1">{category}</p>
        </div>
        <Link
          className="border-black border-2 mt-2 rounded-full py-3 px-6 text-xl hover:bg-black hover:text-white transition"
          href={to}
          target="_blank"
        >
          <FiArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default ProjectCard;
