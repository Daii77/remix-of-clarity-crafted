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
          <p className="text-sm">مساحة مخصصة لإضافة صورة المشروع</p>
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
          فتح المشروع <ExternalLink className="w-4 h-4" />
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm">
          [مكان مخصص لإضافة الرابط التشعبي]
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
    {subtitle && <p className="text-muted-foreground mb-6 mr-14">{subtitle}</p>}
    <div className="grid md:grid-cols-2 gap-6">{children}</div>
  </section>
);

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="max-w-3xl mb-12">
        <p className="text-accent font-semibold mb-2">المشاريع</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">معرض الأعمال</h1>
        <p className="text-lg text-muted-foreground leading-loose">
          مجموعة من المشاريع الأكاديمية والتطبيقية التي تعكس مساري في هندسة الشبكات وأنظمة الاتصالات.
        </p>
      </header>

      <Section icon={GraduationCap} title="مشروع التخرج" subtitle="مشروع بارز يلخّص رحلتي الأكاديمية">
        <ProjectCard
          featured
          project={{
            title: "[عنوان مشروع التخرج]",
            description:
              "صندوق مخصص لشرح فكرة المشروع، الأهداف، التقنيات المستخدمة، التحديات، والنتائج. يمكنكِ هنا توثيق تفاصيل المناقشة والإنجازات الرئيسية.",
            tags: ["شبكات", "أمن", "تصميم نظام"],
          }}
        />
      </Section>

      <Section icon={Briefcase} title="مشاريع التدريب" subtitle="نتاج فترة التدريب التعاوني (٧ أشهر)">
        <ProjectCard
          project={{
            title: "تطبيق ويب مركزي لإدارة وتسجيل البيانات",
            description:
              "تطوير منصة ويب لإدارة وتسجيل البيانات بشكل مركزي، تشمل واجهات للمستخدم، قواعد بيانات، وأدوات إدارية تسهّل سير العمل.",
            tags: ["Web App", "Database", "UI"],
          }}
        />
        <ProjectCard
          project={{
            title: "ملف تحليل بيانات مركز التدريب وتطوير الأنظمة",
            description:
              "تحليل شامل لبيانات المركز يهدف إلى استخراج مؤشرات أداء ورؤى تساعد في اتخاذ قرارات تشغيلية مدروسة.",
            tags: ["Data Analysis", "Reporting", "Insights"],
          }}
        />
      </Section>

      <Section icon={BookOpen} title="المشاريع الأكاديمية" subtitle="أبرز المشاريع خلال فترة الدراسة الجامعية">
        <ProjectCard project={{ title: "[مشروع شبكي ١]", description: "وصف موجز للمشروع: الهدف، التصميم، الأدوات، النتائج." }} />
        <ProjectCard project={{ title: "[مشروع شبكي ٢]", description: "وصف موجز للمشروع: الهدف، التصميم، الأدوات، النتائج." }} />
        <ProjectCard project={{ title: "[مشروع اتصالات]", description: "وصف موجز للمشروع: الهدف، التصميم، الأدوات، النتائج." }} />
        <ProjectCard project={{ title: "[مشروع أمن شبكات]", description: "وصف موجز للمشروع: الهدف، التصميم، الأدوات، النتائج." }} />
      </Section>
    </div>
  );
};

export default Projects;
