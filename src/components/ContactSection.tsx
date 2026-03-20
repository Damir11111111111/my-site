import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Свяжитесь с Нами
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Контакты и Экскурсии
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            <input
              type="text"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <input
              type="email"
              placeholder="Ваш email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <textarea
              placeholder="Ваше сообщение"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="resize-none rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 rounded-sm border border-primary bg-primary/10 px-8 py-3 font-display text-sm font-semibold uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Отправить
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-5">
              {[
                { icon: MapPin, text: "ул. Промышленная, 42, Москва, 115432" },
                { icon: Phone, text: "+7 (495) 555-01-87" },
                { icon: Mail, text: "hello@amberandsteel.com" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <item.icon className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                  <span className="font-body text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-border" />

            <div className="rounded-sm border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-bold text-foreground">
                  Запись на экскурсию
                </h3>
              </div>
              <p className="mb-4 font-body text-sm text-muted-foreground">
                Приглашаем вас на 90-минутную экскурсию по производственному цеху,
                лаборатории и дегустационному залу. Экскурсии проводятся каждую субботу
                в 11:00 и 14:00.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {["Сб 11:00", "Сб 14:00", "Частная"].map((slot) => (
                  <button
                    key={slot}
                    onClick={() => toast.info(`Запись на «${slot}» — скоро!`)}
                    className="rounded-sm border border-border py-2 font-body text-xs uppercase tracking-wider text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
