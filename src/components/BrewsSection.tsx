import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X } from "lucide-react";
import beerLager from "@/assets/beer-lager.jpg";
import beerIpa from "@/assets/beer-ipa.jpg";
import beerStout from "@/assets/beer-stout.jpg";

const beers = [
  {
    name: "Golden Forge Lager",
    type: "Лагер",
    abv: "4.8%",
    image: beerLager,
    description:
      "Чистый, освежающий лагер с мягкой солодовой сладостью и бодрящим финишем. Сварен с баварским хмелем и выдержан при низких температурах шесть недель.",
    notes: {
      аромат: "Лёгкий цветочный, свежий хлеб",
      вкус: "Чистый солод, мёд, тонкая хмелевая горечь",
      финиш: "Чистый, сухой, освежающий",
      сочетание: "Морепродукты на гриле, лёгкие салаты, выдержанные сыры",
    },
  },
  {
    name: "Copper Rebellion IPA",
    type: "IPA",
    abv: "6.5%",
    image: beerIpa,
    description:
      "Дерзкий, хмелевой IPA с взрывными нотами цитрусов и тропических фруктов. Сухое охмеление сортами Citra и Mosaic для максимального аромата.",
    notes: {
      аромат: "Грейпфрут, манго, сосновая смола",
      вкус: "Яркие цитрусы, карамельная основа, смолистый хмель",
      финиш: "Долгая горечь, косточковые фрукты",
      сочетание: "Острая тайская кухня, барбекю, крепкий голубой сыр",
    },
  },
  {
    name: "Midnight Anvil Stout",
    type: "Стаут",
    abv: "7.2%",
    image: beerStout,
    description:
      "Богатый, полнотелый имперский стаут со слоями жареного кофе, тёмного шоколада и шелковистой текстурой.",
    notes: {
      аромат: "Тёмная обжарка кофе, какао, ваниль",
      вкус: "Эспрессо, тёмный шоколад, поджаренный овёс",
      финиш: "Бархатный, согревающий, долгий",
      сочетание: "Десерты с тёмным шоколадом, копчёное мясо, выдержанная гауда",
    },
  },
];

const BrewsSection = () => {
  const [selectedBeer, setSelectedBeer] = useState<(typeof beers)[0] | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section id="brews" className="section-padding bg-charcoal-light">
        <div ref={ref} className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Наша Коллекция
            </p>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Наше Пиво
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {beers.map((beer, i) => (
              <motion.div
                key={beer.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group cursor-pointer overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:border-primary/30"
                onClick={() => setSelectedBeer(beer)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={beer.image}
                    alt={beer.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 rounded-sm bg-primary/20 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                    {beer.abv} ABV
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-1 font-body text-xs uppercase tracking-widest text-muted-foreground">
                    {beer.type}
                  </p>
                  <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                    {beer.name}
                  </h3>
                  <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {beer.description}
                  </p>
                  <span className="font-body text-xs font-medium uppercase tracking-widest text-primary transition-colors group-hover:text-amber-glow">
                    Подробнее →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedBeer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedBeer(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative mx-4 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-sm border border-border bg-card p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBeer(null)}
              className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X size={20} />
            </button>

            <p className="mb-1 font-body text-xs uppercase tracking-widest text-primary">
              {selectedBeer.type} • {selectedBeer.abv} ABV
            </p>
            <h3 className="mb-4 font-display text-2xl font-bold text-foreground">
              {selectedBeer.name}
            </h3>
            <div className="mb-6 h-px w-full bg-border" />
            <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">
              {selectedBeer.description}
            </p>

            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Дегустационные Заметки
            </h4>
            <div className="grid gap-4">
              {Object.entries(selectedBeer.notes).map(([key, value]) => (
                <div key={key}>
                  <p className="mb-1 font-body text-xs font-semibold uppercase tracking-widest text-primary">
                    {key}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default BrewsSection;
