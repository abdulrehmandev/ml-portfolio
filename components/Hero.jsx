import Container from "@/components/Container";

const Hero = () => {
  return (
    <section className="py-32">
      <Container>
        <h5 className="text-lg mb-4">Hello! I'm Jhon.</h5>
        <p className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] tracking-[-0.2rem] md:tracking-[-0.3rem] lg:max-w-[80%] leading-[3rem] sm:leading-[4rem] md:leading-[5rem] lg:leading-[6rem]">
          A multidisciplinary designer focusing on digital experiences.
        </p>
      </Container>
    </section>
  );
};

export default Hero;
