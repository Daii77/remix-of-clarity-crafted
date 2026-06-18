import { Shield, Radio, Cpu, Briefcase, Award, Sparkles } from "lucide-react";

const passions = [
  { icon: Shield, title: "أمن الشبكات", desc: "حماية البنية التحتية للشبكات، تحليل التهديدات، وبناء طبقات دفاع متعددة." },
  { icon: Radio, title: "تقنيات الجيل الخامس 5G", desc: "البنية التحتية، الـ Slicing، والاتصالات منخفضة الكمون عالية الموثوقية." },
  { icon: Cpu, title: "إنترنت الأشياء IoT", desc: "تصميم منظومات الأجهزة المتصلة، وتأمين بروتوكولات الاتصال بينها." },
  { icon: Briefcase, title: "إدارة المشاريع التقنية", desc: "ربط الجانب الهندسي بالإدارة لتسليم مشاريع تقنية ناجحة وفي وقتها." },
];

const certifications = [
  "Cisco Certified Network Associate (CCNA)",
  "CompTIA Security+",
  "Certified Ethical Hacker (CEH)",
  "Project Management Professional (PMP)",
  "AWS Certified Solutions Architect – Associate",
];

const Passions = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="max-w-3xl mb-12">
        <p className="text-accent font-semibold mb-2">الاهتمامات والتطوير الشخصي</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">شغفي ومجالات تطويري</h1>
        <p className="text-lg text-muted-foreground leading-loose">
          مجالات أولي لها اهتماماً خاصاً، وأرى مستقبلي المهني فيها، إلى جانب الشهادات التي أخطط للحصول عليها لتعزيز مساري.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 mb-16">
        {passions.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="relative overflow-hidden bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-elev transition-shadow">
            <div className="absolute -left-10 -top-10 w-32 h-32 rounded-full gradient-hero opacity-10" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-6 h-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-bold">شهادات أخطط لإنجازها</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {certifications.map((cert) => (
            <div key={cert} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors">
              <Sparkles className="w-5 h-5 text-accent shrink-0" />
              <span className="font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Passions;
