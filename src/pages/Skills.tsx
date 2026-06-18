import { Cpu, Network, ShieldCheck, Users, Briefcase, CheckCircle2 } from "lucide-react";

const skillGroups = [
  {
    icon: Cpu,
    title: "مهارات تقنية",
    items: ["Python", "Linux / CLI", "تحليل البيانات", "SQL", "Git & GitHub", "أساسيات تطوير الويب"],
  },
  {
    icon: Network,
    title: "هندسة الشبكات",
    items: ["تصميم الشبكات (LAN/WAN)", "Cisco IOS", "Routing & Switching", "بروتوكولات TCP/IP", "VLAN & VPN", "محاكاة Packet Tracer / GNS3"],
  },
  {
    icon: ShieldCheck,
    title: "أمن الشبكات",
    items: ["مبادئ Cybersecurity", "Firewalls & IDS/IPS", "تحليل الثغرات", "تشفير الاتصالات", "إدارة الهوية والصلاحيات"],
  },
  {
    icon: Users,
    title: "مهارات ناعمة وإدارية",
    items: ["إدارة المشاريع التقنية", "العمل ضمن فريق", "حل المشكلات", "التواصل الفعّال", "التوثيق التقني", "العرض والتقديم"],
  },
];

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="max-w-3xl mb-12">
        <p className="text-accent font-semibold mb-2">المهارات والخبرات</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">قدرات هندسية متكاملة</h1>
        <p className="text-lg text-muted-foreground leading-loose">
          مزيج من المهارات التقنية المتخصصة في الشبكات والاتصالات، إلى جانب القدرات الإدارية والناعمة التي تدعم نجاح أي مشروع تقني.
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
          <h2 className="text-3xl font-bold">الخبرات العملية</h2>
        </div>

        <div className="relative border-r-2 border-accent/30 pr-6 md:pr-8">
          <div className="relative mb-8">
            <span className="absolute -right-[34px] md:-right-[42px] top-1 w-4 h-4 rounded-full bg-accent ring-4 ring-background" />
            <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold">التدريب التعاوني (Co-op)</h3>
                <span className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground">٧ أشهر</span>
              </div>
              <p className="text-muted-foreground mb-4">
                مركز التدريب وتطوير الأنظمة — تدريب ميداني مكثّف
              </p>
              <ul className="space-y-2">
                {[
                  "المشاركة في تصميم وتطوير تطبيق ويب مركزي لإدارة وتسجيل البيانات.",
                  "العمل على ملف تحليل بيانات خاص بالمركز واستخراج رؤى تشغيلية.",
                  "دعم البنية الشبكية واختبار إعدادات الأجهزة وحلول الاتصال.",
                  "توثيق العمليات التقنية وإعداد تقارير دورية للفريق.",
                  "التعاون مع مهندسين متعددي التخصصات ضمن بيئة عمل احترافية.",
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
