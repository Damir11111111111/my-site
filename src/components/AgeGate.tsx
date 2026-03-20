import { motion, AnimatePresence } from "framer-motion";
import { Beer } from "lucide-react";

interface AgeGateProps {
  onConfirm: () => void;
}

const AgeGate = ({ onConfirm }: AgeGateProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-charcoal" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative z-10 flex flex-col items-center gap-8 px-6 text-center"
        >
          <div className="flex items-center gap-3">
            <Beer className="h-8 w-8 text-primary" />
            <h1 className="font-display text-3xl font-bold tracking-wider text-foreground">
              AMBER <span className="text-gradient-amber">&</span> STEEL
            </h1>
          </div>

          <div className="h-px w-24 bg-primary/40" />

          <p className="font-display text-lg font-light tracking-wide text-muted-foreground">
            Вам уже исполнилось 18 лет?
          </p>

          <div className="flex gap-4">
            <button
              onClick={onConfirm}
              className="rounded-sm border border-primary bg-primary/10 px-10 py-3 font-display text-sm font-semibold uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Да, мне 18+
            </button>
            <button
              onClick={() => window.location.replace("https://google.com")}
              className="rounded-sm border border-border px-10 py-3 font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:border-muted-foreground"
            >
              Нет
            </button>
          </div>

          <p className="max-w-sm text-xs text-muted-foreground/60">
            Входя на этот сайт, вы подтверждаете, что достигли совершеннолетия
            в вашей стране проживания.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AgeGate;
