import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heritageImage from "@/assets/brewery-heritage.jpg";

const HeritageSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="heritage" className="section-padding bg-background">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-sm"
        >
          <img
            src={heritageImage}
            alt="Производственный цех пивоварни Amber & Steel"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Наше Наследие
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Традиции и
            <br />
            <span className="text-gradient-amber">Современные Технологии</span>
          </h2>
          <div className="h-px w-16 bg-primary/40" />
          <p className="font-body text-base leading-relaxed text-muted-foreground">
            Основанная в 2012 году, Amber & Steel родилась из простого убеждения:
            великое пиво требует бескомпромиссных стандартов. Наше современное
            предприятие сочетает вековые традиции пивоварения с передовыми
            технологиями.
          </p>
          <p className="font-body text-base leading-relaxed text-muted-foreground">
            Каждый ингредиент подобран с умыслом. Каждый процесс контролируется
            с точностью. Результат? Пиво, которое чтит ремесло и расширяет его
            границы.
          </p>
          <div className="mt-4 flex gap-12">
            {[
              { value: "12+", label: "Лет" },
              { value: "50K", label: "Бочек/Год" },
              { value: "6", label: "Сортов" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeritageSection;
