import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Droplets, Leaf, Recycle, Sun } from "lucide-react";

const initiatives = [
  {
    icon: Droplets,
    title: "Рециркуляция воды",
    description: "85% нашей технологической воды перерабатывается через современные системы фильтрации.",
  },
  {
    icon: Leaf,
    title: "Программа отработанного зерна",
    description: "Вся дробина передаётся местным фермам в качестве питательного корма для скота.",
  },
  {
    icon: Sun,
    title: "Солнечная энергия",
    description: "40% нашей энергии обеспечивается солнечными панелями на крышах предприятия.",
  },
  {
    icon: Recycle,
    title: "Цель — Ноль Отходов",
    description: "К 2027 году планируем получить сертификат «Ноль отходов» по всем операциям.",
  },
];

const SustainabilitySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sustainability" className="section-padding bg-charcoal-light">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Наши Обязательства
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Экология
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 rounded-sm border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
