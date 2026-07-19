import { ArrowRight, DownloadCloud } from "lucide-react";
import Button from "../components/Button";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TailwindCSS",
  "Render",
  "Git",
  "GitHub",
  "Wordpress",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Floating Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer * MERN stack
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-200">
                Building{" "}
                <span className="text-primary glow-text">web applications</span>
                <br />
                that solve
                <br />
                <span className="font-serif italic font-normal text-white">
                  real-world problems.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                Hi, I am Taofeek Jide-Idowu, a Software Engineer specializing in
                the MERN stack. I build scalable, high-performance web
                applications that solve complex real-world problems.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight />{" "}
                </Button>
              </a>
              <a
                href="/Jide-Idowu Taofeek2.pdf"
                target="_blank"
                class="btn primary"
              >
                <AnimatedBorderButton>
                  My CV <DownloadCloud />
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}

            <div className="flex items-center gap-4 animate-fade-in animation-delay-500">
              <span className="text-sm text-muted-foreground">
                Follow me on:
              </span>
              {[
                { Icon: FaGithub, href: "https://github.com/taofeekjide" },
                {
                  Icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/taofeek-jide-idowu-0530692b4/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Picture */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-full p-2 glow-border w-full h-full">
                <img
                  src="/profile-pic.png"
                  alt="Taofeek Jide-Idowu"
                  className="w-full h-full object-cover rounded-full"
                />

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className=" flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Open To Work</span>
                  </div>
                </div>
                {/* Stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">
                    Detail-Oriented
                  </div>
                  <div className="text-xs text-muted-foreground">Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-lg text-muted-foreground mb-6 text-center">
            Technologies I Use
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-carousel">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
