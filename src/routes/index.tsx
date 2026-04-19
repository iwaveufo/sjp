import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/sjp-logo.png";
import splatter1 from "@/assets/splatter-1.png";
import splatter2 from "@/assets/splatter-2.png";
import { Mail, Phone, FileText, Brush, Home, PaintRoller, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Decorative splatters */}
      <img
        src={splatter1}
        alt=""
        aria-hidden="true"
        width={1024}
        height={1024}
        className="pointer-events-none absolute -top-16 -right-16 w-[18rem] max-w-[35vw] opacity-95 animate-drip"
      />
      <img
        src={splatter2}
        alt=""
        aria-hidden="true"
        width={1024}
        height={1024}
        loading="lazy"
        className="pointer-events-none absolute -bottom-20 -left-20 w-[20rem] max-w-[40vw] opacity-95"
      />

      {/* Nav */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="SJP Schilderwerken logo" width={48} height={48} className="h-12 w-12" />
          <span className="font-display text-2xl tracking-wider">SJP</span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#diensten" className="hover:text-primary transition-colors">Diensten</a>
          <a href="#over" className="hover:text-primary transition-colors">Over</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 md:inline-block"
        >
          Offerte
        </a>
      </header>

      {/* Hero */}
      <section id="top" className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-32 md:pt-20 md:pb-44">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 inline-block rounded-sm border border-primary/60 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
              Schilderwerken sinds 2015
            </p>
            <h1 className="font-display text-6xl leading-[0.9] tracking-tight text-balance md:text-8xl lg:text-9xl">
              Strak werk. <br />
              <span className="text-primary">Frisse kleur.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted-foreground">
              Vakkundig schilderwerk binnen en buiten — door Jonathan Prawinchaikul.
              Eerlijke prijzen, nette afwerking, elke streek met zorg gezet.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-sm bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-xl transition-transform hover:scale-105"
              >
                Vraag een offerte
              </a>
              <a
                href="tel:+32492886777"
                className="rounded-sm border border-foreground/30 px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-foreground/10"
              >
                Bel 0492 88 67 77
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 -z-10 bg-primary/20 blur-3xl" />
            <img
              src={logo}
              alt="SJP Schilderwerken logo — verfroller"
              width={520}
              height={520}
              className="w-full max-w-[28rem] drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="diensten" className="relative z-10 border-y border-foreground/15 bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-5xl tracking-tight md:text-7xl">Diensten</h2>
            <p className="max-w-md text-muted-foreground">
              Van een enkele kamer tot complete gevels — alles met dezelfde aandacht voor detail.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Home, title: "Binnenwerk", desc: "Muren, plafonds, deuren en kozijnen. Strakke randen, geen spatten." },
              { icon: Brush, title: "Buitenwerk", desc: "Gevels, ramen, dakgoten. Bestand tegen weer en wind." },
              { icon: PaintRoller, title: "Renovatie & herstel", desc: "Voorbereiding, plamuren, schuren en schilderen — van A tot Z." },
            ].map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-sm border border-foreground/15 bg-background/40 p-8 transition-colors hover:border-primary"
              >
                <Icon className="mb-6 h-10 w-10 text-primary" strokeWidth={1.5} />
                <h3 className="font-display text-2xl tracking-wide">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="over" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Over Jonathan</p>
            <h2 className="font-display text-5xl tracking-tight md:text-6xl">
              Eén schilder. <br /> Eén verantwoordelijke.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Geen onderaannemers, geen verrassingen. Jonathan komt zelf langs voor de offerte,
              voert het werk zelf uit en blijft het aanspreekpunt tot de laatste streek gezet is.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Vrijblijvende offerte aan huis",
                "Hoogwaardige verven & materialen",
                "Nette werkplek, opgeruimd achtergelaten",
                "Garantie op uitvoering",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-sm border border-primary bg-card p-10 shadow-2xl">
              <p className="font-display text-3xl text-primary">"</p>
              <p className="mt-2 text-xl leading-relaxed">
                Een schilderwerk is pas klaar wanneer ik het zelf zou laten staan in mijn eigen huis.
              </p>
              <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
                — Jonathan Prawinchaikul
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 border-t border-foreground/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 text-center">
            <h2 className="font-display text-5xl tracking-tight md:text-7xl">Contact</h2>
            <p className="mt-4 text-muted-foreground">Neem contact op voor een vrijblijvende offerte.</p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
            <a
              href="tel:+32492886777"
              className="group flex items-center gap-4 rounded-sm border border-foreground/15 bg-background/40 p-6 transition-colors hover:border-primary"
            >
              <Phone className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Telefoon</p>
                <p className="font-semibold">0492 88 67 77</p>
              </div>
            </a>
            <a
              href="mailto:jonathan.schilderwerken@gmail.com"
              className="group flex items-center gap-4 rounded-sm border border-foreground/15 bg-background/40 p-6 transition-colors hover:border-primary"
            >
              <Mail className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">E-mail</p>
                <p className="font-semibold break-all">jonathan.schilderwerken@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-sm border border-foreground/15 bg-background/40 p-6 md:col-span-2">
              <FileText className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">BTW</p>
                <p className="font-semibold">BE 1018.375.185</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-foreground/15 px-6 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SJP Schilderwerken — Jonathan Prawinchaikul
      </footer>
    </main>
  );
}
