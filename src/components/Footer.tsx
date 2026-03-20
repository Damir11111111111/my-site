import { useState } from "react";
import { Beer } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Вы подписаны! Добро пожаловать в семью Amber & Steel.");
    setEmail("");
  };

  return (
    <footer className="border-t border-border bg-charcoal px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Beer className="h-5 w-5 text-primary" />
              <span className="font-display text-base font-bold tracking-wider text-foreground">
                AMBER <span className="text-primary">&</span> STEEL
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Крафтовое пиво, сваренное с душой. Москва, Россия.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-foreground">
              Навигация
            </h4>
            {[
              { label: "Наследие", href: "#heritage" },
              { label: "Наше пиво", href: "#brews" },
              { label: "Процесс", href: "#process" },
              { label: "Лаборатория", href: "#lab" },
              { label: "Контакты", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-foreground">
              Рассылка
            </h4>
            <p className="font-body text-sm text-muted-foreground">
              Получайте новости о новых сортах и мероприятиях.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ваш@email.com"
                required
                className="flex-1 rounded-sm border border-border bg-card px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-sm bg-primary px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-amber-glow"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
          <p className="font-body text-xs text-muted-foreground">
            © 2025 Amber & Steel Brewing Co. Все права защищены.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Пожалуйста, употребляйте ответственно. Продажа лицам 18+.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
