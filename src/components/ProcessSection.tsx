import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wheat, Flame, Thermometer, Timer, Package } from "lucide-react";

const steps = [
  {
    icon: Wheat,
    title: "Помол",
    description:
      "Премиальный солод точно измельчается для оптимального извлечения крахмала.",
  },
  {
    icon: Thermometer,
    title: "Затирание",
    description:
      "Горячая вода добавляется для преобразования крахмала в сбраживаемые сахара в наших заторных чанах.",
  },
  {
    icon: Flame,
    title: "Кипячение",
    description:
      "Сусло кипятится с тщательно отобранным хмелем, придавая горечь, вкус и аромат.",
  },
  {
    icon: Timer,
    title: "Брожение",
    description:
      "Фирменные штаммы дрожжей превращают сахара в алкоголь на протяжении недель в герметичных ёмкостях.",
  },
  {
    icon: Package,
    title: "Упаковка",
    description:
      "Каждая партия проходит лабораторный контроль, карбонизацию и упаковку в бескислородных условиях.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-background">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-primary">
            От Зерна до Бокала
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Процесс
          </h2>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:gap-6 md:overflow-visible md:pb-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex min-w-[240px] flex-col items-center gap-4 rounded-sm border border-border bg-card p-6 text-center md:min-w-0"
            >
              <span className="absolute -top-3 left-4 rounded-sm bg-primary px-2 py-0.5 font-display text-xs font-bold text-primary-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>

              <step.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <h3 className="font-display text-base font-bold uppercase tracking-wider text-foreground">
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-primary/30 md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
