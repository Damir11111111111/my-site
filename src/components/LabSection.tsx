import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FlaskConical, ShieldCheck, Microscope, Award } from "lucide-react";
import labImage from "@/assets/brewery-lab.jpg";

const labFeatures = [
  { icon: Microscope, title: "Микробиологический контроль", desc: "Каждая партия проверяется на загрязнения" },
  { icon: FlaskConical, title: "Химический анализ", desc: "Профилирование pH, плотности и соединений" },
  { icon: ShieldCheck, title: "Чистота ингредиентов", desc: "Сертифицированное органическое сырьё без ГМО" },
  { icon: Award, title: "Сертификат ISO 22000", desc: "Международная система управления безопасностью" },
];

const LabSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="lab" className="section-padding bg-lab-bg">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-lab-fg/60">
            Контроль Качества
          </p>
          <h2 className="font-display text-4xl font-bold text-lab-fg md:text-5xl">
            Лаборатория
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-sm"
          >
            <img
              src={labImage}
              alt="Лаборатория контроля качества пивоварни"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {labFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="rounded-sm border border-lab-fg/10 bg-lab-fg/5 p-5 transition-all duration-300 hover:border-primary/30"
              >
                <feat.icon className="mb-3 h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mb-1 font-display text-sm font-bold text-lab-fg">
                  {feat.title}
                </h3>
                <p className="font-body text-xs text-lab-fg/60">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabSection;
