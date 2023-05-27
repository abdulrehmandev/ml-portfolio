import Container from "@/components/Container";
import Image from "next/image";
// import ProjectCard from "@/components/ProjectCard";

const About = () => {
  return (
    <section className="my-32">
      <Container>
        <div className="flex items-center mb-8 justify-between">
          <h4 className="font-medium">About</h4>
          <div className="flex gap-8 md:text-base">
            <span className="w-14 h-[2px] mt-3 bg-black"></span>
            <p className="font-medium">02</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="flex flex-col gap-6 col-span-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
          <div className="max-w-[250px] w-full row-start-1 md:row-auto md:ml-auto aspect-square rounded-3xl overflow-hidden col-span-2">
            <Image
              className="w-full h-full object-cover"
              src="/temp-image.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2">
          <div>
            <h3 className="font-medium text-3xl mb-4">Expertise</h3>
            <ul className="flex flex-wrap gap-4 text-xl max-w-xs">
              <li>Web Design</li>
              <li>Web Design</li>
              <li>Web Design</li>
              <li>Web Design</li>
              <li>Web Design</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-3xl mb-4">Expertise</h3>
            <ul className="flex flex-wrap gap-4 text-xl max-w-xs">
              <li>Web Design</li>
              <li>Web Design</li>
              <li>Web Design</li>
              <li>Web Design</li>
              <li>Web Design</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
