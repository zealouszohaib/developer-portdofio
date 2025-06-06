import HeroImg from "@/assets/images/2.jpg";


export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Crafting-Code. Shaping-Ideas. Solving-Problems. Exploring-AI.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-bold text-white">Muhammad Zohaib</span>, a passionate Full-Stack Developer with a love for AI and real-time systems. I specialize in building smart, scalable web applications that solve real-world problems.{" "}
                <span className="font-bold text-white">
                  From real time communication solutions to AI-powered apps, I'm dedicated to pushing the boundaries of technology.
                </span>
              </p>
              <p className="text-white">
                My journey encompasses full-stack development with a strong focus on React for front-end interfaces and Node.js for backend systems. I have hands-on experience with real-time communication using WebSockets. Currently, I am expanding my expertise in AI and machine learning, leveraging technologies such as OpenAI, Pinecone, and large language models (LLMs) to build intelligent solutions. I also work with cloud platforms like Microsoft Azure and AWS to ensure scalable and efficient deployments.  </p>

              <div className="pt-1">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I’m a lifelong learner, constantly exploring new technologies to craft efficient, user-friendly experiences. Whether it’s real-time tracking systems or legal AI assistants, I’m always working on innovative projects that empower others.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Muhammad Zohaib, Developer & Innovator
                    </cite>
                    <div className="flex items-center gap-2">

                      <span className="text-white">AI & Real-Time Solutions</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
