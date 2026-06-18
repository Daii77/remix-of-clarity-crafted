import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Network, ShieldCheck } from "lucide-react";
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
                Network & Communication Systems Engineer
              </span>
              <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                Hi, I'm
                <br />
                <span className="text-accent">[Your Full Name]</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                An ambitious engineer passionate about designing secure networks and building reliable
                communication systems. I believe every successful connection starts with precise engineering,
                a clear vision, and meticulous attention to detail.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/projects">
                    View My Projects
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            {/* Profile photo placeholder */}
            <div className="relative mx-auto">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-white/10 border-4 border-white/30 backdrop-blur flex items-center justify-center shadow-elev overflow-hidden">
                <div className="text-center px-6">
                  <div className="text-5xl mb-2">📷</div>
                  <p className="text-sm text-white/80">Your professional photo</p>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-accent text-accent-foreground rounded-full px-4 py-2 text-sm font-bold shadow-elev">
                Class of 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About highlights */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground leading-loose">
            A graduate of <strong className="text-foreground">University of Hail</strong>, majoring in
            Network & Communication Systems Engineering. My passion combines deep technical expertise with
            structured engineering thinking — always striving to build secure, efficient systems that serve the end user.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: GraduationCap, title: "Academically", desc: "B.Sc. in Network & Communication Systems Engineering — University of Hail" },
            { icon: Network, title: "Technically", desc: "Network design, protocols, and communication infrastructure" },
            { icon: ShieldCheck, title: "Security", desc: "Deep interest in network security and protecting infrastructure" },
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
