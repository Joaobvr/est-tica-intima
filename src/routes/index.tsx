import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Leaf,
  Droplets,
  Flower2,
  Sun,
  Activity,
  Stethoscope,
  ClipboardCheck,
  Microscope,
  HandHeart,
  CircleCheck,
  Scissors,
  Clock,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  VolumeIllustration,
  FirmnessIllustration,
  RejuvenationIllustration,
  RetractionIllustration,
  ComfortIllustration,
  FlowerMark,
} from "@/components/intimor/Illustrations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Isabela Tovar — Harmonização Íntima Feminina" },
      {
        name: "description",
        content:
          "Harmonização íntima feminina com a Dra. Isabela Tovar: procedimentos sem corte, foco em saúde, conforto e autoestima. Avaliação individualizada.",
      },
      { property: "og:title", content: "Dra. Isabela Tovar — Harmonização Íntima Feminina" },
      {
        property: "og:description",
        content:
          "Redescubra sua feminilidade, confiança e bem-estar íntimo com protocolos personalizados e tecnologia de ponta.",
      },
    ],
  }),
  component: LandingPage,
});

const Section = ({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className={`px-6 md:px-10 py-20 md:py-28 ${className}`}>
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-6">
    <span className="h-px w-8 bg-foreground/30" />
    {children}
  </div>
);

function LandingPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 inset-x-0 z-20 px-6 md:px-10 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FlowerMark className="w-6 h-6" />
          <span className="font-serif text-lg">Dra. Isabela Tovar</span>
        </div>
        <a
          href="#contato"
          className="hidden md:inline-flex text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition"
        >
          Agendar avaliação
        </a>
      </header>

      {/* 1. HERO */}
      <section className="relative min-h-[100svh] flex items-center px-6 md:px-10 pt-28 pb-20">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 70% 30%, var(--rose-soft) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, var(--nude) 0%, transparent 60%), var(--warm-white)",
          }}
        />
        <div className="absolute top-1/4 right-[-120px] w-[400px] h-[400px] rounded-full opacity-40 blur-3xl -z-10"
          style={{ background: "var(--rose-soft)" }}
        />

        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <Eyebrow>Harmonização Íntima Feminina</Eyebrow>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,5.25rem)] leading-[1.02] tracking-tight">
              Redescubra sua{" "}
              <em className="italic text-foreground/70">feminilidade</em>,
              <br className="hidden md:block" /> confiança e bem-estar íntimo.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              A harmonização íntima vai além da estética — é sobre conforto,
              saúde e qualidade de vida.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full h-14 px-8 text-sm tracking-wide bg-foreground text-background hover:bg-foreground/90"
              >
                <a href="#para-quem">Quero entender se é para mim</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full h-14 px-6 text-sm tracking-wide hover:bg-transparent hover:text-foreground/60"
              >
                <a href="#metodo">Conhecer o método →</a>
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 relative hidden md:block">
            <div
              className="aspect-[4/5] rounded-[3rem] relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, var(--nude) 0%, var(--rose-soft) 100%)",
              }}
            >
              <div className="absolute inset-8 rounded-[2.5rem] border border-white/40" />
              <div className="absolute bottom-10 left-10 right-10 text-foreground/80">
                <FlowerMark className="w-10 h-10 mb-4" />
                <p className="font-serif text-2xl italic leading-snug">
                  "A saúde da mulher começa pela forma como ela se sente
                  consigo mesma."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONEXÃO (DOR) */}
      <Section id="conexao" className="bg-[var(--bege)]">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Eyebrow>Você se reconhece?</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Sentir-se bem com seu corpo é um direito seu.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5">
            {[
              "Incômodo com a aparência da região íntima",
              "Flacidez ou excesso de volume no monte de Vênus",
              "Escurecimento da pele ou perda de uniformidade",
              "Desconforto com os pequenos lábios",
              "Ressecamento e alterações ao longo do tempo",
              "Perda de confiança na intimidade",
              "Sensação de falta de firmeza interna",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 pb-5 border-b border-foreground/10"
              >
                <span className="font-serif text-2xl text-foreground/40 mt-1 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg text-foreground/80 leading-relaxed flex-1">
                  {item}
                </p>
              </div>
            ))}
            <p className="font-serif text-2xl md:text-3xl italic mt-10 leading-snug text-foreground/90">
              Você não precisa aceitar isso como algo definitivo ou inevitável.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. TRANSFORMAÇÃO */}
      <Section id="transformacao">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Eyebrow>A transformação possível</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Cinco frentes de cuidado, um único objetivo:{" "}
            <em className="italic text-foreground/60">você</em>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              Illust: VolumeIllustration,
              title: "Redução de volume",
              desc: "Diminuição da gordura no monte de Vênus para um contorno mais harmônico.",
            },
            {
              Illust: FirmnessIllustration,
              title: "Firmeza tecidual",
              desc: "Melhora da firmeza e retração natural dos tecidos.",
            },
            {
              Illust: RejuvenationIllustration,
              title: "Tom e textura",
              desc: "Pele mais uniforme, suave e com aparência rejuvenescida.",
            },
            {
              Illust: RetractionIllustration,
              title: "Estímulo de colágeno",
              desc: "Bioestimulação para resultados progressivos e duradouros.",
            },
            {
              Illust: ComfortIllustration,
              title: "Lubrificação e conforto",
              desc: "Melhora da hidratação íntima e do bem-estar diário.",
            },
            {
              Illust: FlowerMark,
              title: "Cuidado integral",
              desc: "Plano construído com base na sua história e seus objetivos.",
              tall: true,
            },
          ].map(({ Illust, title, desc }, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl bg-[var(--bege)]/40 border border-foreground/5 hover:bg-[var(--bege)] transition-colors"
            >
              <div
                className="w-24 h-24 rounded-2xl mb-6 flex items-center justify-center"
                style={{ background: "var(--warm-white)" }}
              >
                <Illust className="w-16 h-16" />
              </div>
              <h3 className="font-serif text-2xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. DIFERENCIAL DO MÉTODO */}
      <Section id="metodo" className="bg-foreground text-background">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-background/60 mb-6">
              <span className="h-px w-8 bg-background/40" />
              O método
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-background">
              Procedimentos sem corte,{" "}
              <em className="italic text-background/60">sem cicatrizes</em>,
              com recuperação rápida.
            </h2>
            <p className="mt-6 text-background/70 leading-relaxed">
              Uma abordagem moderna que une tecnologia, ciência e sensibilidade
              clínica para resultados naturais e progressivos.
            </p>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-background/10 rounded-2xl overflow-hidden">
            {[
              { Icon: Scissors, label: "Sem corte" },
              { Icon: Sparkles, label: "Sem cicatrizes" },
              { Icon: ShieldCheck, label: "Sem cirurgia" },
              { Icon: HeartHandshake, label: "Sem hematomas e sem sangramentos" },
              { Icon: Clock, label: "Recuperação rápida" },
              { Icon: Leaf, label: "Resultados progressivos" },
            ].map(({ Icon, label }, i) => (
              <div
                key={i}
                className="bg-foreground p-8 flex flex-col gap-4 hover:bg-foreground/95 transition-colors"
              >
                <Icon className="w-6 h-6 text-[var(--rose-soft)]" strokeWidth={1.2} />
                <p className="font-serif text-xl text-background">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. BENEFÍCIOS FUNCIONAIS */}
      <Section id="beneficios">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 md:sticky md:top-20">
            <Eyebrow>Benefícios funcionais</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Mais do que estética. Saúde, conforto e{" "}
              <em className="italic text-foreground/60">qualidade de vida</em>.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-2">
            {[
              { Icon: Droplets, title: "Melhora da lubrificação vaginal" },
              { Icon: HeartHandshake, title: "Redução de dor ou desconforto nas relações" },
              { Icon: Activity, title: "Melhora da firmeza interna vaginal" },
              { Icon: ShieldCheck, title: "Apoio em quadros leves de incontinência urinária" },
              { Icon: Flower2, title: "Redução de desconfortos íntimos" },
              { Icon: Sun, title: "Melhora da qualidade da vida íntima" },
              { Icon: Sparkles, title: "Mais segurança e bem-estar" },
            ].map(({ Icon, title }, i) => (
              <div
                key={i}
                className="flex items-center gap-6 py-5 border-b border-foreground/10 group hover:pl-2 transition-all"
              >
                <Icon className="w-5 h-5 text-foreground/60 shrink-0" strokeWidth={1.2} />
                <p className="text-lg text-foreground/80 flex-1">{title}</p>
                <CircleCheck className="w-4 h-4 text-[var(--olive)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. PARA QUEM É */}
      <Section id="para-quem" className="bg-[var(--rose-soft)]/40">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Eyebrow>Para quem é</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Cada fase da vida pede um cuidado diferente.
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {[
            { title: "Mulheres jovens", desc: "Com incômodos estéticos." },
            { title: "Pós-gestação", desc: "Recuperando firmeza e conforto." },
            { title: "Climatério & menopausa", desc: "Lidando com novas mudanças." },
            { title: "Ressecamento vaginal", desc: "Em busca de alívio diário." },
            { title: "Autoestima", desc: "Buscando confiança renovada." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-6 border border-foreground/5 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="font-serif text-3xl text-foreground/30 mb-4">
                0{i + 1}
              </div>
              <h3 className="font-serif text-xl mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. TECNOLOGIAS */}
      <Section id="tecnologias">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <Eyebrow>Tecnologias e abordagem</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              FF Sculpt Intimor & bioestimulação de colágeno.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Combinamos tecnologias de retração tecidual, bioestimuladores de
              colágeno e protocolos personalizados para entregar resultados
              naturais e progressivos.
            </p>
            <p className="font-serif italic text-xl text-foreground/80 mt-8">
              Cada paciente recebe um plano individualizado.
            </p>
          </div>

          <div className="md:col-span-6">
            <div className="space-y-4">
              {[
                { Icon: Zap, name: "FF Sculpt Intimor", tag: "Tecnologia principal" },
                { Icon: Leaf, name: "Bioestimuladores de colágeno", tag: "Estímulo natural" },
                { Icon: Sparkles, name: "Tecnologias de retração tecidual", tag: "Firmeza progressiva" },
                { Icon: ClipboardCheck, name: "Protocolos personalizados", tag: "Plano único" },
              ].map(({ Icon, name, tag }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 p-6 rounded-2xl border border-foreground/10 hover:border-foreground/30 transition-colors"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--bege)" }}
                  >
                    <Icon className="w-5 h-5 text-foreground/70" strokeWidth={1.2} />
                  </div>
                  <div>
                    <p className="font-serif text-xl leading-tight">{name}</p>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">
                      {tag}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 8. SOBRE A MÉDICA */}
      <Section id="sobre" className="bg-[var(--bege)]">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div
              className="aspect-[4/5] rounded-[2.5rem] relative overflow-hidden flex items-end p-8"
              style={{
                background:
                  "linear-gradient(180deg, var(--nude) 0%, var(--rose-soft) 100%)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-foreground/40">
                <div className="text-center">
                  <FlowerMark className="w-16 h-16 mx-auto mb-3 opacity-50" />
                  <p className="text-xs uppercase tracking-[0.2em]">
                    Foto profissional
                  </p>
                </div>
              </div>
              <div className="relative z-10 text-foreground bg-background/80 backdrop-blur rounded-2xl p-5">
                <p className="font-serif text-2xl leading-tight">Dra. Isabela Tovar</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  CRM: ______
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <Eyebrow>Sobre a médica</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Um olhar integral sobre a{" "}
              <em className="italic text-foreground/60">saúde da mulher</em>.
            </h2>
            <div className="space-y-5 text-foreground/80 leading-relaxed">
              <p>
                A Dra. Isabela Tovar é médica com foco em saúde da mulher,
                dedicada ao acompanhamento integral feminino.
              </p>
              <p>
                Seu olhar vai além dos aspectos biológicos, considerando também
                fatores fundamentais como autoestima, confiança, beleza,
                disposição e qualidade de vida.
              </p>
              <p>
                Acredita que a saúde da mulher está diretamente conectada à
                forma como ela se sente consigo mesma — por isso, seus
                tratamentos são pensados para promover não apenas resultados
                físicos, mas também bem-estar e segurança.
              </p>
              <p>
                Seu modelo de atendimento é baseado em acompanhamento contínuo,
                permitindo ajustes individualizados e evolução progressiva dos
                resultados ao longo do tempo.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. SEGURANÇA */}
      <Section id="seguranca">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Eyebrow>Segurança e confiança</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Cuidado com base científica e olhar humano.
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-px bg-foreground/10 rounded-3xl overflow-hidden">
          {[
            { Icon: Stethoscope, title: "Avaliação individualizada" },
            { Icon: ClipboardCheck, title: "Protocolos personalizados" },
            { Icon: ShieldCheck, title: "Técnicas seguras" },
            { Icon: Microscope, title: "Base científica" },
            { Icon: HandHeart, title: "Acompanhamento próximo" },
          ].map(({ Icon, title }, i) => (
            <div
              key={i}
              className="bg-background p-8 flex flex-col items-center text-center gap-4"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: "var(--rose-soft)" }}
              >
                <Icon className="w-5 h-5 text-foreground/80" strokeWidth={1.2} />
              </div>
              <p className="font-serif text-lg leading-tight">{title}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 10. CTA FINAL */}
      <Section id="contato" className="pb-32">
        <div
          className="rounded-[2.5rem] md:rounded-[3rem] px-8 md:px-16 py-20 md:py-28 text-center relative overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, var(--rose-soft) 0%, transparent 50%), radial-gradient(circle at 70% 80%, var(--nude) 0%, transparent 60%), var(--bege)",
          }}
        >
          <FlowerMark className="w-12 h-12 mx-auto mb-8 opacity-60" />
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto">
            Cuidar da sua intimidade também é{" "}
            <em className="italic text-foreground/70">cuidar de você</em>.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            Dê o primeiro passo. Uma conversa segura, acolhedora e sem
            julgamentos.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-12 rounded-full h-14 px-10 text-sm tracking-wide bg-foreground text-background hover:bg-foreground/90"
          >
            <a href="#">Agendar avaliação</a>
          </Button>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 py-10 border-t border-foreground/10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <FlowerMark className="w-5 h-5" />
            <span className="font-serif text-sm text-foreground">
              Dra. Isabela Tovar
            </span>
          </div>
          <p>© {new Date().getFullYear()} — Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
