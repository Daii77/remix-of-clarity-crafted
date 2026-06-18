import { ExternalLink, GraduationCap, Briefcase, BookOpen, ImageIcon } from "lucide-react";

type Project = {
  title: string;
  description: string;
  link?: string;
  image?: string;
  tags?: string[];
};

const ProjectCard = ({ project, featured = false }: { project: Project; featured?: boolean }) => (
  <article
    className={`group bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-elev transition-all ${
      featured ? "md:col-span-2" : ""
    }`}
  >
    <div className={`relative ${featured ? "aspect-[16/8]" : "aspect-[16/10]"} bg-secondary flex items-center justify-center overflow-hidden`}>
      {project.image ? (
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      ) : (
        <div className="text-center text-muted-foreground">
          <ImageIcon className="w-10 h-10 mx-auto mb-2 opacity-60" />
          <p className="text-sm">Space for project image</p>
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className={`font-bold mb-2 ${featured ? "text-2xl" : "text-xl"}`}>{project.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
      {project.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{t}</span>
          ))}
        </div>
      )}
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent font-semibold hover:underline">
          Open Project <ExternalLink className="w-4 h-4" />
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm">
          [Space to add project link]
        </span>
      )}
    </div>
  </article>
);

const Section = ({
  icon: Icon,
  title,
  subtitle,
  children,
}: {
  icon: any;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section className="mb-16">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-11 h-11 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground">
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
    </div>
    {subtitle && <p className="text-muted-foreground mb-6 ml-14">{subtitle}</p>}
    <div className="grid md:grid-cols-2 gap-6">{children}</div>
  </section>
);

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="max-w-3xl mb-12">
        <p className="text-accent font-semibold mb-2">Projects</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio of Work</h1>
        <p className="text-lg text-muted-foreground leading-loose">
          A collection of academic and applied projects that reflect my journey in network and communication systems engineering.
        </p>
      </header>

      <Section icon={GraduationCap} title="Graduation Project" subtitle="A flagship project capturing my academic journey">
        <ProjectCard
          featured
          project={{
            title: "[Graduation Project Title]",
            description:
              "A dedicated space to describe the project's idea, objectives, technologies, challenges, and results. Document defense highlights and main achievements here.",
            tags: ["Networking", "Security", "System Design"],
          }}
        />
      </Section>

      <Section icon={Briefcase} title="Training Projects" subtitle="Output from the 7-month cooperative training">
        <ProjectCard
          project={{
            title: "Centralized Web Application for Data Management",
            description:
              "Developed a centralized web platform for managing and recording data, including user interfaces, databases, and admin tools that streamline workflows.",
            tags: ["Web App", "Database", "UI"],
          }}
        />
        <ProjectCard
          project={{
            title: "Training Center Data Analysis Report",
            description:
              "A comprehensive analysis of the center's data aimed at extracting performance indicators and insights to support informed operational decisions.",
            tags: ["Data Analysis", "Reporting", "Insights"],
          }}
        />
      </Section>

      <Section icon={BookOpen} title="Academic Projects" subtitle="Highlights from my university coursework">
        <ProjectCard project={{ title: "[Networking Project 1]", description: "Brief description: goal, design, tools, and results." }} />
        <ProjectCard project={{ title: "[Networking Project 2]", description: "Brief description: goal, design, tools, and results." }} />
        <ProjectCard project={{ title: "[Communications Project]", description: "Brief description: goal, design, tools, and results." }} />
        <ProjectCard project={{ title: "[Network Security Project]", description: "Brief description: goal, design, tools, and results." }} />
      </Section>
    </div>
  );
};

export default Projects;
