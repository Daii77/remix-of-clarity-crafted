import { Cpu, Network, ShieldCheck, Users, Briefcase, CheckCircle2 } from "lucide-react";

const skillGroups = [
  {
    icon: Cpu,
    title: "Technical Skills",
    items: ["Python", "Linux / CLI", "Data Analysis", "SQL", "Git & GitHub", "Web Development Basics"],
  },
  {
    icon: Network,
    title: "Network Engineering",
    items: ["LAN / WAN Design", "Cisco IOS", "Routing & Switching", "TCP/IP Protocols", "VLAN & VPN", "Packet Tracer / GNS3"],
  },
  {
    icon: ShieldCheck,
    title: "Network Security",
    items: ["Cybersecurity Principles", "Firewalls & IDS/IPS", "Vulnerability Analysis", "Communication Encryption", "Identity & Access Management"],
  },
  {
    icon: Users,
    title: "Soft & Management Skills",
    items: ["Technical Project Management", "Teamwork", "Problem Solving", "Effective Communication", "Technical Documentation", "Presentation"],
  },
];

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="max-w-3xl mb-12">
        <p className="text-accent font-semibold mb-2">Skills & Experience</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Well-Rounded Engineering Capabilities</h1>
        <p className="text-lg text-muted-foreground leading-loose">
          A blend of specialized technical skills in networking and communications, alongside the management
          and soft skills that drive any successful technical project.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 mb-16">
        {skillGroups.map(({ icon: Icon, title, items }) => (
          <div key={title} className="bg-card border border-border rounded-2xl p-6 shadow-soft">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-6 h-6 text-accent" />
          <h2 className="text-3xl font-bold">Professional Experience</h2>
        </div>

        <div className="relative border-l-2 border-accent/30 pl-6 md:pl-8">
          <div className="relative mb-8">
            <span className="absolute -left-[34px] md:-left-[42px] top-1 w-4 h-4 rounded-full bg-accent ring-4 ring-background" />
            <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold">Cooperative Training (Co-op)</h3>
                <span className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground">7 months</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Training & Systems Development Center — intensive field training
              </p>
              <ul className="space-y-2">
                {[
                  "Contributed to designing and developing a centralized web application for managing and recording data.",
                  "Worked on a data-analysis file for the center, extracting actionable operational insights.",
                  "Supported the network infrastructure and tested device configurations and connectivity solutions.",
                  "Documented technical processes and prepared periodic reports for the team.",
                  "Collaborated with multidisciplinary engineers in a professional work environment.",
                ].map((task) => (
                  <li key={task} className="flex gap-2 text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
