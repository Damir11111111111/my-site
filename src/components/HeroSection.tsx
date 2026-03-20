import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/brewery-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Интерьер пивоварни Amber & Steel с танками из нержавеющей стали"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Крафтовая пивоварня • С 2012 года
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Искусство
            <br />
            <span className="text-gradient-amber">Чистого Пивоварения</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-lg font-body text-base font-light leading-relaxed text-muted-foreground"
        >
          Где традиции встречаются с точностью. Каждая партия создана с
          безупречным вниманием к деталям.
        </motion.p>

        <motion.a
          href="#brews"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-4 rounded-sm border border-primary bg-primary/10 px-8 py-3 font-display text-sm font-semibold uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          Наша Коллекция
        </motion.a>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
