import Container from "@/components/Container";

const Hero = () => {
  return (
    <section className="py-32">
      <Container>
        <h5 className="text-lg mb-4">Hello! I'm Usama.</h5>
        <p className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-[-0.2rem] md:tracking-[-0.3rem] lg:max-w-[80%] leading-[3rem] md:leading-[4rem] lg:leading-[5rem]">
          {/* A multidisciplinary designer focusing on digital experiences. */}
          Unleashing the power of code and algorithms, I engineer a future where
          Artificial Intelligence reigns supreme.
        </p>
      </Container>
    </section>
  );
};

export default Hero;
