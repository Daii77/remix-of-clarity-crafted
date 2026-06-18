import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Network, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px, 60px 60px"
        }} />

        <div className="container relative mx-auto px-4 py-20 md:py-28 text-primary-foreground">
          <div className="grid md:grid-cols-[1fr_auto] items-center gap-12">
            <div className="space-y-6 animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm">
                مهندسة شبكات وأنظمة اتصالات
              </span>
              <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                مرحباً، أنا
                <br />
                <span className="text-accent">[الاسم الكامل]</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                مهندسة طموحة شغوفة بتصميم وتأمين الشبكات وبناء أنظمة اتصالات موثوقة.
                أؤمن أن كل اتصال ناجح يبدأ بهندسة دقيقة، ورؤية واضحة، وتفاصيل محكمة.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/projects">
                    استعرضي مشاريعي
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white">
                  <Link to="/contact">تواصلي معي</Link>
                </Button>
              </div>
            </div>

            {/* Profile photo placeholder */}
            <div className="relative mx-auto">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-white/10 border-4 border-white/30 backdrop-blur flex items-center justify-center shadow-elev overflow-hidden">
                <div className="text-center px-6">
                  <div className="text-5xl mb-2">📷</div>
                  <p className="text-sm text-white/80">مساحة الصورة الشخصية</p>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-accent text-accent-foreground rounded-full px-4 py-2 text-sm font-bold shadow-elev">
                خريجة 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About highlights */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">نبذة عني</h2>
          <p className="text-lg text-muted-foreground leading-loose">
            خريجة <strong className="text-foreground">جامعة حائل</strong> في تخصص هندسة الشبكات وأنظمة الاتصالات.
            شغفي يجمع بين الجانب التقني العميق والتفكير الهندسي المنظم،
            وأسعى دائماً لتطوير أنظمة آمنة وفعّالة تخدم المستخدم النهائي.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: GraduationCap, title: "أكاديمياً", desc: "بكالوريوس هندسة الشبكات وأنظمة الاتصالات - جامعة حائل" },
            { icon: Network, title: "تقنياً", desc: "تصميم الشبكات، البروتوكولات، والبنية التحتية للاتصالات" },
            { icon: ShieldCheck, title: "أمنياً", desc: "اهتمام عميق بأمن الشبكات وحماية البنية التحتية" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-elev transition-shadow">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
