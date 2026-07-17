const experiences = [
  {
    period: "2024 - Present",
    title: "Freelance Developer",
    company: "Self Employed",
    description:
      "Developing and maintaining web applications for various clients, ensuring responsive design and optimal performance.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Wordpress",
    ],
    current: true,
  },
  {
    period: "May 2025 - August 2025",
    title: "Intern Frontend Developer",
    company: "FlexiSaf Edusoft Limited",
    description:
      "Worked on the frontend development of web applications, implementing user interfaces and ensuring cross-browser compatibility.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Git", "GitHub"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Journey
          </span>
          <span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 animate-fade-in animation-delay-200">
              Experience
            </h2>
          </span>
          <p className="text-lg text-muted-foreground mt-4 animate-fade-in animation-delay-400">
            Here's a brief overview of my professional journey and the
            experiences that have shaped my career.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className=" timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,170,0.8)] " />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in "
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-primary/50 z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Experience Content */}
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-300`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{exp.title}</h3>
                    <p className="text-muted-foreground mb-4">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                    <div>
                      {exp.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mr-2 mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
