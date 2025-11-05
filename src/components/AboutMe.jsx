import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer & Systems Engineering Student
            </h3>

            <p className="text-muted-foreground">
              I’m a <strong>Full-Stack Web Developer</strong> and{" "}
              <strong>Systems Engineering student</strong> passionate about
              crafting modern, dynamic, and visually engaging web experiences.
              Over the past few years, I’ve worked as a freelancer, helping
              clients bring their ideas to life through clean code and thoughtful design.
            </p>

            <p className="text-muted-foreground">
              My main stack is <strong>MERN (MongoDB, Express, React, Node.js)</strong>,
              but I also enjoy exploring other technologies and languages like{" "}
              <strong>JavaScript (ES6+), TypeScript, Python, HTML5, and CSS3</strong>.
              I’ve worked with frameworks and tools such as{" "}
              <strong>Angular, Bootstrap, Tailwind CSS, and Astro</strong>,
              which allow me to adapt to different environments and project needs.
            </p>

            <p className="text-muted-foreground">
              Studying Systems Engineering has strengthened my understanding of
              software architecture, algorithms, and problem-solving, giving me
              a solid foundation to design efficient and scalable applications.
            </p>

            <p className="text-muted-foreground">
              I love building projects from scratch — turning concepts into
              functional and beautiful products — while constantly learning and
              improving along the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-blue-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable web applications using the MERN stack and
                    other modern technologies — from backend APIs to dynamic,
                    responsive UIs.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-blue-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Front-End Design</h4>
                  <p className="text-muted-foreground">
                    Crafting intuitive and visually appealing interfaces using React,
                    Tailwind CSS, and Astro — always with a focus on user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-blue-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Freelance Experience</h4>
                  <p className="text-muted-foreground">
                    Managing end-to-end freelance projects — collaborating with clients,
                    designing solutions, and delivering results that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
