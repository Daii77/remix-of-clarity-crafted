import { useState } from "react";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "الرجاء إدخال الاسم").max(100),
  email: z.string().trim().email("البريد الإلكتروني غير صالح").max(255),
  message: z.string().trim().min(1, "الرجاء كتابة رسالة").max(1000, "الحد الأقصى 1000 حرف"),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("تم إرسال رسالتك بنجاح، سأتواصل معك قريباً ✨");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="max-w-3xl mb-12">
        <p className="text-accent font-semibold mb-2">تواصلي معي</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">لنبدأ محادثة</h1>
        <p className="text-lg text-muted-foreground leading-loose">
          سواء لفرصة عمل، تعاون في مشروع تقني، أو نقاش في هندسة الشبكات — يسعدني تواصلك.
        </p>
      </header>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
        {/* Contact info */}
        <aside className="space-y-4">
          <a href="mailto:your.email@example.com" className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl shadow-soft hover:shadow-elev transition-shadow">
            <div className="w-11 h-11 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">البريد الإلكتروني</p>
              <p className="font-semibold break-all">your.email@example.com</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl shadow-soft hover:shadow-elev transition-shadow">
            <div className="w-11 h-11 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground shrink-0">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
              <p className="font-semibold">linkedin.com/in/yourprofile</p>
            </div>
          </a>

          <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl shadow-soft">
            <div className="w-11 h-11 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">الموقع</p>
              <p className="font-semibold">المملكة العربية السعودية</p>
            </div>
          </div>
        </aside>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">الاسم</label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="اسمك الكامل"
              maxLength={100}
            />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">البريد الإلكتروني</label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="example@email.com"
              maxLength={255}
            />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">الرسالة</label>
            <Textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="اكتبي رسالتك هنا..."
              rows={6}
              maxLength={1000}
            />
            {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
          </div>
          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
            إرسال الرسالة
            <Send className="w-4 h-4 mr-2" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
