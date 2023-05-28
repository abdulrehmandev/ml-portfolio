import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section className="mb-10" id="work">
      <Container>
        <div className="flex items-center my-8 justify-between px-6">
          <h4 className="font-medium">Work</h4>
          <div className="flex gap-8 md:text-base">
            <span className="w-14 h-[2px] mt-3 bg-black"></span>
            <p className="font-medium">01</p>
          </div>
        </div>
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map(({ id, title, img, category, to }) => (
            <ProjectCard
              key={id}
              title={title}
              img={img}
              category={category}
              to={to}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
