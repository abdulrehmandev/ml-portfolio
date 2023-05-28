import Container from "@/components/Container";
import Certificate from "@/components/Certificate";

import Image from "next/image";
// import ProjectCard from "@/components/ProjectCard";

const About = () => {
  return (
    <section className="my-32">
      <Container>
        <div className="flex items-center mb-10 justify-between">
          <h4 className="font-medium">About</h4>
          <div className="flex gap-8 md:text-base">
            <span className="w-14 h-[2px] mt-3 bg-black"></span>
            <p className="font-medium">02</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="flex flex-col gap-6 col-span-4">
            <p>
              I am thrilled to present my achievements and aspirations in the
              dynamic domains of machine learning, deep learning, and artificial
              intelligence. As an eager learner, I have recently embarked on a
              transformative journey to acquire a comprehensive understanding of
              these cutting-edge fields.
            </p>
            <p>
              Through rigorous coursework and self-study, I have immersed myself
              in the theoretical foundations and practical applications of
              machine learning, deep learning, and artificial intelligence. I
              actively engage in hands-on projects, collaborate with like-minded
              peers, and continuously explore emerging technologies and
              methodologies. By embracing a growth mindset, I aim to
              continuously refine my skills, ensuring that I remain at the
              forefront of this rapidly evolving field.
            </p>
            <p>
              In this portfolio, you will find a showcase of my projects,
              research endeavors, and academic accomplishments. These artifacts
              demonstrate my dedication, progress, and adaptability as I venture
              into the realms of machine learning, deep learning, and artificial
              intelligence.
            </p>
            <p>
              Thank you for taking the time to learn more about me and my
              aspirations in this exciting field. I am open to new
              opportunities, collaborations, and experiences that will further
              enhance my skills and enable me to contribute meaningfully to the
              advancement of machine learning, deep learning, and artificial
              intelligence.
            </p>
          </div>
          <div className="max-w-[250px] w-full row-start-1 md:row-auto md:ml-auto aspect-square rounded-3xl overflow-hidden col-span-2">
            <Image
              className="w-full h-full object-cover"
              src="/img-personal.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>

        {/* skills */}
        <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2">
          <div>
            <h3 className="font-medium text-3xl mb-4">Expertise</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-4 text-lg max-w-sm">
              <li>Dart</li>
              <li>Flutter</li>
              <li>Firebase</li>
              <li>Kotlin</li>
              <li>SQL</li>
              <li>Java</li>
              <li>Python</li>
              <li>Numpy</li>
              <li>ScikitLearn</li>
              <li>TensorFlow</li>
              <li>Machine Learning</li>
              <li>Deep Neural Network</li>
              <li>Basic Data Science</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-3xl mb-4">Tools</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-4 text-lg max-w-sm">
              <li>VS Code</li>
              <li>Android Studio</li>
              <li>Jupyter Notebook</li>
              <li>Google Collaboratory</li>
              <li>Qt Creater</li>
              <li>SQL Server</li>
              <li>Git</li>
              <li>IBM Watson Studio</li>
            </ul>
          </div>
        </div>
        {/* certifications */}
        {/* <div>
          <Certificate />
          <Certificate />
          <Certificate />
        </div> */}
      </Container>
    </section>
  );
};

export default About;
