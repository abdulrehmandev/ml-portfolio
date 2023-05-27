import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <section className="mb-10">
      <Container>
        <div className="flex items-center mb-8 justify-between px-6">
          <h4 className="font-medium">Work</h4>
          <div className="flex gap-8 md:text-base">
            <span className="w-14 h-[2px] mt-3 bg-black"></span>
            <p className="font-medium">01</p>
          </div>
        </div>
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Container>
    </section>
  );
};

export default Projects;
